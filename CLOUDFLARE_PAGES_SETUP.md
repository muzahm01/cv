# Cloudflare Pages Setup Guide

This guide will help you set up automatic branch previews using Cloudflare Pages.

## Step 1: Create Cloudflare Account

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/sign-up)
2. Sign up with your email (it's free!)
3. Verify your email address

## Step 2: Connect to GitHub

1. In Cloudflare Dashboard, go to **Workers & Pages**
2. Click **Create application**
3. Select **Pages** tab
4. Click **Connect to Git**
5. Choose **GitHub** and authorize Cloudflare to access your repositories
6. Select the **muzahm01/cv** repository

## Step 3: Configure Build Settings

Use these exact settings:

### Basic Configuration
- **Project name**: `cv` (or your preferred name)
- **Production branch**: `main`

### Build Configuration
- **Framework preset**: `None` (select from dropdown)
- **Build command**: `make all`
- **Build output directory**: `/` (root directory)

### Environment Variables
No environment variables needed for this project.

## Step 4: Root Directory (Advanced Settings)

Click on **Advanced** and set:
- **Root directory**: `/` (leave empty or set to root)

## Step 5: Build Settings Summary

```yaml
Production branch: main
Build command: make all
Build output directory: /
Root directory: /
```

## Step 6: Deploy!

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the first build
3. You'll get your production URL: `cv.pages.dev` (or similar)

## How Branch Previews Work

Once set up, Cloudflare Pages automatically:

1. **Detects new branches**: When you push to any branch (like `claude/*`)
2. **Builds automatically**: Runs `make all` on that branch
3. **Deploys to preview URL**: Creates `branch-name.cv.pages.dev`
4. **Comments on PRs**: Adds a comment with the preview URL (if you create a PR)

## Preview URL Format

- **Production**: `https://cv.pages.dev` (from main branch)
- **Branch preview**: `https://branch-name.cv.pages.dev`

For example, your current branch would be:
- `https://branch-preview-feature-01slpfnmc3kxd75aej2feztn.cv.pages.dev`

## Verify It's Working

After setup, push a change to your `claude/branch-preview-feature-01SLPfnMc3KxD75aeJ2feztn` branch:

```bash
# Make a small change
echo "<!-- Cloudflare Pages test -->" >> template.html

# Commit and push
git add template.html
git commit -m "Test Cloudflare Pages preview"
git push
```

Then check:
1. Go to Cloudflare Dashboard → **Workers & Pages** → **cv**
2. You'll see your branch listed under **Deployments**
3. Click on it to get the preview URL

## Domain Configuration (Optional)

Your main site at `muzamil.fi` stays on GitHub Pages. No changes needed!

If you want custom preview domains later:
1. Go to **Custom domains** in your Cloudflare Pages project
2. Add `preview.muzamil.fi` (or any subdomain)
3. Cloudflare will guide you through DNS setup

## Troubleshooting

### Build Fails

If the build fails, check:
1. **Build command**: Should be exactly `make all`
2. **Root directory**: Should be `/` or empty
3. **Build logs**: Check what command failed

Common issues:
- If Pandoc is missing, Cloudflare installs it automatically
- If LaTeX is missing, you may need to add install commands

### Preview URL Not Working

- Wait 2-3 minutes after push
- Check **Deployments** tab in Cloudflare Dashboard
- Look for your branch name in the list

## Cleanup Old Previews

Cloudflare automatically:
- Keeps the last 5 deployments per branch
- Deletes preview deployments when branches are deleted

## Cost

Everything described here is **FREE** on Cloudflare Pages free tier:
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds/month (more than enough)
- ✅ Automatic branch previews

## Next Steps

After setup:
1. You can **delete** the `.github/workflows/Preview_Branch.yml` workflow (no longer needed)
2. Keep your main deployment on GitHub Pages with `muzamil.fi`
3. Use Cloudflare preview URLs for testing branches

## Getting Help

If you run into issues:
- Check Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
- View build logs in the dashboard
- Ask me for help!

---

**Ready?** Open [dash.cloudflare.com](https://dash.cloudflare.com) and start with Step 1!
