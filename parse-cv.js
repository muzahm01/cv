const fs = require('fs');
const path = require('path');

// Parse cv.tex and extract structured data
function parseCVTeX(texContent) {
  const data = {
    personal: {},
    introduction: '',
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    publications: [],
  };

  // Extract name and title
  const nameMatch = texContent.match(/\\textbf\{([^}]+)\}/);
  if (nameMatch) data.personal.name = nameMatch[1];

  const titleMatch = texContent.match(/Senior Software Test Engineer at (.+?)\\s*\\\\/);
  if (titleMatch) {
    data.personal.title = 'Senior Software Test Engineer';
    data.personal.company = titleMatch[1].trim();
  }

  // Extract location
  const locationMatch = texContent.match(/([^\\]+),\s*Finland/);
  if (locationMatch) data.personal.location = `${locationMatch[1].trim()}, Finland`;

  // Extract contact info
  const emailMatch = texContent.match(/\\href\{mailto:([^}]+)\}/);
  if (emailMatch) data.personal.email = emailMatch[1];

  const linkedinMatch = texContent.match(/\\href\{https:\/\/linkedin\.com\/in\/([^}]+)\}/);
  if (linkedinMatch) data.personal.linkedin = linkedinMatch[1];

  const githubMatch = texContent.match(/\\href\{https:\/\/github\.com\/([^}]+)\}/);
  if (githubMatch) data.personal.github = githubMatch[1];

  // Extract introduction
  const introMatch = texContent.match(/\\section\*\{Introduction\}[^]*?\\label\{introduction\}[^]*?\n\n([^]*?)(?=\\section)/);
  if (introMatch) {
    data.introduction = introMatch[1].trim().replace(/\n/g, ' ');
  }

  // Extract skills
  const skillsSection = texContent.match(/\\section\*\{Skills\}[^]*?(?=\\section)/s);
  if (skillsSection) {
    // Match \item[Category] Items format
    const skillLines = skillsSection[0].match(/\\item\[([^\]]+)\]\s*([^\n\\]+)/g);
    if (skillLines) {
      skillLines.forEach(line => {
        const match = line.match(/\\item\[([^\]]+)\]\s*([^\n\\]+)/);
        if (match) {
          data.skills.push({
            category: match[1],
            items: match[2].split(',').map(s => s.trim()).filter(s => s)
          });
        }
      });
    }
  }

  // Extract experience
  const experienceSection = texContent.match(/\\section\*\{Professional Experience\}[^]*?(?=\\section)/s);
  if (experienceSection) {
    const jobs = experienceSection[0].split(/\\vspace\{0\.5cm\}\s*\\noindent\\rule/);
    jobs.forEach(job => {
      const companyMatch = job.match(/\\noindent\\textbf\{([^}]+)\}/);
      const periodMatch = job.match(/\\hfill\s*\\textbf\{([^}]+)\}/);
      const roleMatch = job.match(/\\textit\{([^}]+)\}/);
      const itemsMatch = job.match(/\\begin\{itemize\}([^]*?)\\end\{itemize\}/s);

      if (companyMatch && periodMatch && roleMatch) {
        const responsibilities = [];
        if (itemsMatch) {
          const items = itemsMatch[1].match(/\\item\s+([^\\]+)/g);
          if (items) {
            items.forEach(item => {
              const text = item.replace(/\\item\s+/, '').trim();
              if (text) responsibilities.push(text);
            });
          }
        }

        data.experience.push({
          company: companyMatch[1],
          period: periodMatch[1],
          role: roleMatch[1],
          responsibilities
        });
      }
    });
  }

  // Extract education
  const educationSection = texContent.match(/\\section\*\{Education\}[^]*?(?=\\section)/s);
  if (educationSection) {
    const eduItems = educationSection[0].match(/\\item\s+\\textbf\{([^}]+)\}[^]*?\\hfill[^]*?\\textbf\{([^}]+)\}[^]*?\n\s*([^\n]+)/g);
    if (eduItems) {
      eduItems.forEach(item => {
        const match = item.match(/\\textbf\{([^}]+)\}[^]*?\\hfill[^]*?\\textbf\{([^}]+)\}[^]*?\n\s*([^\n]+)/);
        if (match) {
          data.education.push({
            institution: match[1],
            period: match[2],
            degree: match[3].trim()
          });
        }
      });
    }
  }

  // Extract certifications
  const certSection = texContent.match(/\\section\*\{Certifications\}[^]*?(?=\\section)/s);
  if (certSection) {
    const certs = certSection[0].match(/\\item\s+\\textbf\{([^}]+)\}[^]*?Issued:\s*([^\\]+)[^]*?Credential ID:\s*([^\n]+)/g);
    if (certs) {
      certs.forEach(cert => {
        const match = cert.match(/\\textbf\{([^}]+)\}[^]*?--\s*([^\\]+)[^]*?Issued:\s*([^\\]+)[^]*?Credential ID:\s*([^\n]+)/);
        if (match) {
          data.certifications.push({
            name: match[1].trim(),
            issuer: match[2].trim(),
            date: match[3].trim(),
            credentialId: match[4].trim()
          });
        }
      });
    }
  }

  // Extract publications
  const pubSection = texContent.match(/\\section\*\{Publications\}[^]*?(?=\\section)/s);
  if (pubSection) {
    const pubs = pubSection[0].match(/\\item\s+([^]*?)(?=\\item|\\end\{itemize\})/g);
    if (pubs) {
      pubs.forEach(pub => {
        const text = pub.replace(/\\item\s+/, '').trim();
        const match = text.match(/([^(]+)\((\d{4})\)\.\s*([^.]+)\.\s*\\textit\{([^}]+)\},?\s*([^.]+)\./);
        if (match) {
          data.publications.push({
            authors: match[1].trim(),
            year: match[2],
            title: match[3].trim(),
            venue: match[4].trim(),
            pages: match[5].trim()
          });
        }
      });
    }
  }

  return data;
}

// Main execution
try {
  const texPath = path.join(__dirname, 'cv.tex');
  const texContent = fs.readFileSync(texPath, 'utf-8');

  const cvData = parseCVTeX(texContent);

  const outputPath = path.join(__dirname, 'cv-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(cvData, null, 2));

  console.log('✓ CV data extracted from cv.tex');
  console.log(`✓ Saved to ${outputPath}`);
} catch (error) {
  console.error('Error parsing CV:', error.message);
  process.exit(1);
}
