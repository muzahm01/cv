# Cloudflare Pages Deployment Guide

This guide explains how to deploy your Next.js CV to Cloudflare Pages using GitHub Actions with API tokens (no GitHub integration required).

## Overview

**What you get:**
- ✅ Production site from `main` branch
- ✅ Automatic branch previews for all branches (including `claude/*`)
- ✅ Unlimited bandwidth and builds (free tier)
- ✅ No need to authorize Cloudflare to access your GitHub account
- ✅ Full control via GitHub Actions

## Step 1: Create Cloudflare Pages Project

### 1.1 Sign Up for Cloudflare
1. Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Create a free account (no credit card required)
3. Verify your email

### 1.2 Create a Pages Project
1. In Cloudflare Dashboard, go to **Workers & Pages**
2. Click **Create application** → **Pages** → **Upload assets**
3. Give it a name: `cv` (must match the `projectName` in workflow)
4. Upload any dummy HTML file (we'll overwrite it with GitHub Actions)
5. Click **Save and Deploy**

**Note:** We're using "Upload assets" method because we're deploying via API, not GitHub integration.

## Step 2: Get Cloudflare API Credentials

### 2.1 Get Account ID
1. In Cloudflare Dashboard, go to **Workers & Pages**
2. On the right sidebar, you'll see **Account ID**
3. Click to copy it
4. Save it somewhere temporarily

### 2.2 Create API Token
1. Go to [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Click **Use template** next to **Edit Cloudflare Workers**
4. Or create a custom token with these permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
5. Under **Account Resources**, select your account
6. Under **Zone Resources**, select **All zones** or specific zones
7. Click **Continue to summary**
8. Click **Create Token**
9. **IMPORTANT:** Copy the token now - you won't see it again!

## Step 3: Add Secrets to GitHub

### 3.1 Navigate to Repository Settings
1. Go to your GitHub repository: `https://github.com/muzahm01/cv`
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### 3.2 Add CLOUDFLARE_API_TOKEN
1. Click **New repository secret**
2. Name: `CLOUDFLARE_API_TOKEN`
3. Value: Paste the API token from Step 2.2
4. Click **Add secret**

### 3.3 Add CLOUDFLARE_ACCOUNT_ID
1. Click **New repository secret** again
2. Name: `CLOUDFLARE_ACCOUNT_ID`
3. Value: Paste the Account ID from Step 2.1
4. Click **Add secret**

## Step 4: Deploy!

### 4.1 Push to Trigger Deployment
Once secrets are set up, any push to `main` or `claude/*` branches will automatically deploy:

```bash
# Commit and push your changes
git add .
git commit -m "Set up Cloudflare Pages deployment"
git push
```

### 4.2 Monitor Deployment
1. Go to your repository's **Actions** tab
2. You'll see the workflow running
3. Click on it to see progress
4. Once complete, you'll see deployment URLs in the summary

## Step 5: Access Your Sites

### Production Site (from main branch)
- **URL:** `https://cv.pages.dev`
- Or your custom domain: `https://muzamil.fi` (after DNS setup)

### Preview Sites (from feature branches)
- **URL:** `https://branch-name.cv.pages.dev`
- Example: `https://branch-preview-feature-01slpfnmc3kxd75aej2feztn.cv.pages.dev`

## Custom Domain Setup (Optional)

### Set Up muzamil.fi

1. In Cloudflare Dashboard, go to your **cv** Pages project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `muzamil.fi` (or `cv.muzamil.fi` for subdomain)
5. Follow the DNS instructions:

#### Option A: Subdomain (Recommended for testing)
Add CNAME record:
```
Type: CNAME
Name: cv
Target: cv.pages.dev
```

Your new site will be at: `https://cv.muzamil.fi`

#### Option B: Root Domain (After testing)
Add CNAME record:
```
Type: CNAME
Name: @
Target: cv.pages.dev
```

Your new site will be at: `https://muzamil.fi`

## Troubleshooting

### Build Fails

**Check the logs:**
1. Go to **Actions** tab in GitHub
2. Click on the failed workflow
3. Expand the **Build Next.js application** step

**Common issues:**
- **Missing dependencies:** Run `npm install` locally to update `package-lock.json`
- **Build errors:** Test locally with `npm run build`
- **TypeScript errors:** Fix type issues in components

### Deployment Fails

**Error: "Invalid API token"**
- Verify `CLOUDFLARE_API_TOKEN` is correct
- Make sure token has **Cloudflare Pages Edit** permission
- Check token hasn't expired

**Error: "Account ID not found"**
- Verify `CLOUDFLARE_ACCOUNT_ID` is correct
- Copy it again from Cloudflare Dashboard

**Error: "Project not found"**
- Make sure you created the `cv` project in Cloudflare Pages
- Verify the `projectName` in workflow matches your Pages project name

### Preview URL Not Working

**Wait a bit:**
- Deployments take 1-3 minutes
- Check the Actions tab for deployment status

**Check branch name:**
- Branch previews only work for `main` and `claude/*` branches
- Other branches won't trigger deployment (modify workflow to add more)

## Workflow Customization

### Deploy on Different Branches

Edit `.github/workflows/Deploy_Cloudflare_Pages.yml`:

```yaml
on:
  push:
    branches:
      - main
      - 'claude/**'
      - 'feature/**'  # Add this line
      - 'dev'         # Or this
```

### Change Project Name

If your Cloudflare Pages project isn't named `cv`:

```yaml
- name: Publish to Cloudflare Pages
  with:
    projectName: your-project-name  # Change this
```

### Add Build Environment Variables

```yaml
- name: Build Next.js application
  run: npm run build
  env:
    NODE_ENV: production
    NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}  # Add custom env vars
```

## Benefits of This Setup

✅ **No GitHub OAuth:** You control API access via tokens
✅ **Automatic previews:** Every branch gets its own URL
✅ **Free unlimited bandwidth:** Perfect for CV sites
✅ **Fast global CDN:** Cloudflare's edge network
✅ **Easy rollbacks:** Just revert your commit
✅ **PR comments:** Workflow can comment with preview URLs
✅ **No lock-in:** Easy to migrate to another host

## Cost

**Cloudflare Pages Free Tier:**
- Unlimited bandwidth ✅
- Unlimited requests ✅
- 500 builds/month ✅
- 1 build at a time ✅

**For your CV site: $0/month forever** 🎉

## Next Steps

1. ✅ Set up Cloudflare API token
2. ✅ Add secrets to GitHub
3. ✅ Push to trigger deployment
4. ⏭️ Test your production site
5. ⏭️ Test a preview branch
6. ⏭️ Set up custom domain (optional)
7. ⏭️ Remove old GitHub Pages workflow (optional)

## Support

If you encounter issues:
- Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- Review GitHub Actions logs
- Verify API token permissions
- Ask me for help!

---

**Ready to deploy?** Follow the steps above and your modern CV will be live in minutes! 🚀
