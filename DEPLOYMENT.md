# Deployment Guide for Eli's Blog

This document explains how to deploy the Astro blog with Static CMS to GitHub Pages and set up Netlify for CMS authentication.

## GitHub Pages Deployment

1. Push your repository to GitHub.

2. In your GitHub repository settings, go to the "Pages" section.

3. Set the source to "GitHub Actions" (this will use our workflow file).

4. The GitHub Actions workflow in `.github/workflows/deploy.yml` will build and deploy your site to GitHub Pages automatically when you push to the main branch.

5. Your site will be available at `https://yourusername.github.io/website-eli-blog`.

## Netlify Setup for CMS Authentication

Even if you deploy to GitHub Pages, you need Netlify for the CMS authentication:

1. Sign up for a Netlify account if you don't have one.

2. Create a new site from Git in Netlify, and connect your GitHub repository.
   - Build command: `npm run build`
   - Publish directory: `dist`

3. Go to Site settings > Identity and enable Identity service.

4. Under Identity settings:
   - Set Registration to "Invite only" for security
   - Enable Git Gateway

5. Generate API access tokens in your Identity settings.

6. Set environment variables in your GitHub repository:
   - Go to Settings > Secrets and variables > Actions
   - Add these secrets:
     - NETLIFY_AUTH_TOKEN: Your Netlify auth token
     - NETLIFY_SITE_ID: Your Netlify site ID

## Local Development

1. Run the CMS proxy server in one terminal:
   ```
   npm run cms-proxy
   ```

2. Run the Astro development server in another terminal:
   ```
   npm run dev
   ```

3. Access the CMS at `http://localhost:4321/admin/`

## Troubleshooting

- **CMS Authentication Issues**: Make sure Git Gateway is properly set up in Netlify.
- **GitHub Pages Not Updating**: Check the GitHub Actions workflow logs for errors.
- **Local CMS Not Working**: Ensure both the CMS proxy server and Astro dev server are running.

## Additional Configuration

- **Custom Domain**: Configure your custom domain in GitHub Pages settings.
- **HTTPS**: Enable HTTPS for your site in both GitHub Pages and Netlify.
- **User Registration**: Invite users to your CMS via the Netlify Identity dashboard. 
