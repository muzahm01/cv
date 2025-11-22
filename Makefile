# Makefile for CV/Resume Generation
# Builds HTML, PDF, and DOCX versions from LaTeX source

.PHONY: all html pdf docx clean validate a11y-test help watch serve

# Default target
all: html pdf docx
	@echo "✓ All formats built successfully!"

# Variables
PANDOC := /opt/homebrew/bin/pandoc
LATEX_SOURCE := cv.tex
HTML_OUTPUT := index.html
PDF_OUTPUT := cv.pdf
DOCX_OUTPUT := cv.docx
TEMPLATE := template.html
CSS_FILE := styles.css
JS_FILE := script.js

# Pandoc common flags
PANDOC_FLAGS := --standalone

# HTML generation with custom template
html: $(HTML_OUTPUT)

$(HTML_OUTPUT): $(LATEX_SOURCE) $(TEMPLATE) $(CSS_FILE) $(JS_FILE)
	@echo "Building HTML..."
	$(PANDOC) $(LATEX_SOURCE) \
		-o $(HTML_OUTPUT) \
		$(PANDOC_FLAGS) \
		--embed-resources \
		--template=$(TEMPLATE) \
		--metadata title="Muzamil Ahmed - CV" \
		--metadata pagetitle="Muzamil Ahmed - Software Engineer & DevOps Specialist"
	@echo "✓ HTML built: $(HTML_OUTPUT)"
	@echo "📄 File location: $$(pwd)/$(HTML_OUTPUT)"
	@echo "🌐 Open in browser: file://$$(pwd)/$(HTML_OUTPUT)"

# PDF generation
pdf: $(PDF_OUTPUT)

$(PDF_OUTPUT): $(LATEX_SOURCE)
	@echo "Building PDF..."
	$(PANDOC) $(LATEX_SOURCE) \
		-o $(PDF_OUTPUT) \
		$(PANDOC_FLAGS) \
		--pdf-engine=xelatex \
		--variable geometry:margin=1in
	@echo "✓ PDF built: $(PDF_OUTPUT)"

# DOCX generation
docx: $(DOCX_OUTPUT)

$(DOCX_OUTPUT): $(LATEX_SOURCE)
	@echo "Building DOCX..."
	$(PANDOC) $(LATEX_SOURCE) \
		-o $(DOCX_OUTPUT) \
		$(PANDOC_FLAGS)
	@echo "✓ DOCX built: $(DOCX_OUTPUT)"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -f $(HTML_OUTPUT) $(PDF_OUTPUT) $(DOCX_OUTPUT)
	rm -f *.aux *.log *.out *.toc *.fdb_latexmk *.fls *.synctex.gz
	rm -f *.bbl *.blg *.bcf *.run.xml
	@echo "✓ Cleaned!"

# Validate HTML using W3C validator (requires vnu or validator)
validate: html
	@echo "Validating HTML..."
	@if command -v vnu >/dev/null 2>&1; then \
		vnu --skip-non-html $(HTML_OUTPUT); \
	elif command -v validator >/dev/null 2>&1; then \
		validator $(HTML_OUTPUT); \
	else \
		echo "⚠ HTML validator not found. Install vnu (https://validator.github.io/validator/)"; \
		echo "  npm install -g vnu-jar"; \
	fi

# Accessibility testing (requires pa11y)
a11y-test: html
	@echo "Running accessibility tests..."
	@if command -v pa11y >/dev/null 2>&1; then \
		pa11y $(HTML_OUTPUT) --standard WCAG2AA --reporter cli; \
	else \
		echo "⚠ pa11y not found. Install it with:"; \
		echo "  npm install -g pa11y"; \
	fi

# Watch for changes and rebuild (requires entr or fswatch)
watch:
	@echo "Watching for changes..."
	@if command -v entr >/dev/null 2>&1; then \
		echo "Press Ctrl+C to stop watching"; \
		ls $(LATEX_SOURCE) $(TEMPLATE) $(CSS_FILE) $(JS_FILE) | entr -c make html; \
	elif command -v fswatch >/dev/null 2>&1; then \
		echo "Press Ctrl+C to stop watching"; \
		fswatch -o $(LATEX_SOURCE) $(TEMPLATE) $(CSS_FILE) $(JS_FILE) | xargs -n1 -I{} make html; \
	else \
		echo "⚠ File watcher not found. Install entr or fswatch:"; \
		echo "  macOS: brew install entr"; \
		echo "  Linux: apt-get install entr"; \
	fi

# Serve HTML locally (requires Python)
serve: html
	@echo "Starting local server at http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	@python3 -m http.server 8000 || python -m SimpleHTTPServer 8000

# Quick rebuild (HTML only, faster for development)
quick: html
	@echo "✓ Quick build complete!"

# Check dependencies
check-deps:
	@echo "Checking dependencies..."
	@command -v $(PANDOC) >/dev/null 2>&1 || { echo "✗ pandoc not found"; exit 1; }
	@command -v xelatex >/dev/null 2>&1 || { echo "✗ xelatex not found"; exit 1; }
	@echo "✓ All required dependencies found!"
	@echo ""
	@echo "Installed versions:"
	@$(PANDOC) --version | head -n 1
	@xelatex --version | head -n 1

# Print file sizes
sizes: all
	@echo "Build artifact sizes:"
	@ls -lh $(HTML_OUTPUT) $(PDF_OUTPUT) $(DOCX_OUTPUT) | awk '{print $$9, "-", $$5}'

# Open outputs
open: all
	@echo "Opening generated files..."
	@if [ "$(shell uname)" = "Darwin" ]; then \
		open $(HTML_OUTPUT); \
	elif [ "$(shell uname)" = "Linux" ]; then \
		xdg-open $(HTML_OUTPUT); \
	else \
		start $(HTML_OUTPUT); \
	fi

# Deploy to GitHub Pages (requires git)
deploy: all
	@echo "Deploying to GitHub Pages..."
	@git add $(HTML_OUTPUT) $(PDF_OUTPUT) $(DOCX_OUTPUT) $(CSS_FILE) $(JS_FILE)
	@git commit -m "Deploy: Update CV (auto-generated)" || true
	@git push origin main
	@echo "✓ Deployed! Your site will be live shortly."

# Help target
help:
	@echo "CV/Resume Makefile"
	@echo ""
	@echo "Available targets:"
	@echo "  make all         - Build all formats (HTML, PDF, DOCX)"
	@echo "  make html        - Build HTML version only"
	@echo "  make pdf         - Build PDF version only"
	@echo "  make docx        - Build DOCX version only"
	@echo "  make clean       - Remove all build artifacts"
	@echo "  make validate    - Validate HTML output (requires vnu)"
	@echo "  make a11y-test   - Run accessibility tests (requires pa11y)"
	@echo "  make watch       - Watch for changes and rebuild (requires entr)"
	@echo "  make serve       - Start local web server (requires Python)"
	@echo "  make quick       - Quick rebuild (HTML only)"
	@echo "  make check-deps  - Check if required dependencies are installed"
	@echo "  make sizes       - Show file sizes of generated documents"
	@echo "  make open        - Build and open HTML in browser"
	@echo "  make deploy      - Build and deploy to GitHub Pages"
	@echo "  make help        - Show this help message"
	@echo ""
	@echo "Dependencies:"
	@echo "  Required: pandoc, xelatex (TeX Live)"
	@echo "  Optional: vnu (HTML validation), pa11y (accessibility), entr (watch mode)"
	@echo ""
	@echo "Examples:"
	@echo "  make              # Build everything"
	@echo "  make html         # Build HTML only"
	@echo "  make watch        # Watch and rebuild on changes"
	@echo "  make serve        # Start local server"
	@echo "  make clean all    # Clean and rebuild"
