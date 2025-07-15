# Domain Setup Guide for Trendy Woodworks

## Deployment Options

This React application can be deployed to several platforms. Here are the most popular options:

### 1. Netlify (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will auto-deploy using the `netlify.toml` configuration
4. In Netlify dashboard, go to Domain Management
5. Add your custom domain
6. Update your domain's DNS records to point to Netlify

### 2. Vercel
1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Vercel will auto-deploy using the `vercel.json` configuration
4. In Vercel dashboard, go to Domains
5. Add your custom domain
6. Update your domain's DNS records to point to Vercel

### 3. GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Set source to GitHub Actions
3. Create `.github/workflows/deploy.yml` for automated deployment
4. Add custom domain in repository settings

## DNS Configuration

For any platform, you'll need to update your domain's DNS records:

### For Netlify:
- Add CNAME record: `www` → `your-site.netlify.app`
- Add A record: `@` → `75.2.60.5`

### For Vercel:
- Add CNAME record: `www` → `your-site.vercel.app`
- Add A record: `@` → `76.76.19.61`

## Build Commands
- Build: `npm run build`
- Preview: `npm run preview`
- Development: `npm run dev`

## Environment Setup
- Node.js version: 18+
- Package manager: npm
- Build output: `dist/` directory