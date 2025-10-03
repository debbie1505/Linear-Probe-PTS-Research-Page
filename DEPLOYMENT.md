# Deployment Guide

This guide will help you deploy your research paper website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Basic familiarity with command line

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `research-paper-site`)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface

1. In your new repository, click "uploading an existing file"
2. Drag and drop all the files from your `research-paper-site` folder
3. Add a commit message like "Initial commit: Research paper website"
4. Click "Commit changes"

### Option B: Using Git Command Line

```bash
# Navigate to your project directory
cd /path/to/research-paper-site

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Research paper website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

## Step 4: Configure Jekyll for GitHub Pages

Since GitHub Pages uses Jekyll, you may need to update your `_config.yml`:

```yaml
# Add these lines to your _config.yml
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-paginate

# Make sure your baseurl is correct
baseurl: "/your-repository-name"  # Replace with your actual repository name
url: "https://yourusername.github.io"
```

## Step 5: Wait for Deployment

- GitHub Pages typically takes 5-10 minutes to build and deploy
- You can check the deployment status in the "Actions" tab
- Your site will be available at: `https://yourusername.github.io/your-repository-name`

## Step 6: Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `url` in your `_config.yml` to your custom domain

## Troubleshooting

### Common Issues:

1. **Site not loading**: Check that your repository is public
2. **CSS not working**: Ensure your `_config.yml` has the correct `baseurl`
3. **Build errors**: Check the Actions tab for build logs
4. **Images not showing**: Make sure image paths are correct

### Build Logs:

- Go to your repository → Actions tab
- Click on the latest workflow run
- Check for any error messages

## Local Development

To test your site locally:

```bash
# Install Jekyll and dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Updating Your Site

To update your site:

1. Make changes to your files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update research content"
   git push
   ```
3. GitHub Pages will automatically rebuild and deploy

## Performance Tips

1. **Optimize images**: Use WebP format when possible
2. **Minimize assets**: Remove unused CSS/JS
3. **Use CDN**: GitHub Pages includes a global CDN
4. **Enable compression**: GitHub Pages handles this automatically

## Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add this to your `_config.yml`:
   ```yaml
   google_analytics: YOUR_TRACKING_ID
   ```
3. The tracking code will be automatically included

## Security

- Your site is served over HTTPS automatically
- GitHub Pages includes security headers
- No server maintenance required

## Support

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Support](https://support.github.com/)

Your research paper website is now live and ready to showcase your work to the world!
