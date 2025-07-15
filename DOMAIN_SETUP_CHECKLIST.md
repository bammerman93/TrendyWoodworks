# Domain Setup Checklist for Trendy Woodworks

## Pre-Deployment Steps
- [ ] Code is ready and tested locally
- [ ] All components are working properly
- [ ] Build runs successfully (`npm run build`)

## Choose Your Deployment Platform

### Option 1: Netlify (Easiest)
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Verify auto-deployment works
- [ ] Go to Site Settings > Domain Management
- [ ] Click "Add custom domain"
- [ ] Enter your domain name
- [ ] Follow DNS configuration instructions

### Option 2: Vercel
- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Verify deployment
- [ ] Go to Project Settings > Domains
- [ ] Add your custom domain
- [ ] Configure DNS as instructed

### Option 3: GitHub Pages
- [ ] Enable GitHub Pages in repo settings
- [ ] Set source to "GitHub Actions"
- [ ] Push code to trigger deployment
- [ ] Add custom domain in Pages settings
- [ ] Configure DNS records

## DNS Configuration

### At Your Domain Registrar:
1. [ ] Log into your domain registrar (GoDaddy, Namecheap, etc.)
2. [ ] Find DNS Management/DNS Records section
3. [ ] Add the required records (provided by your chosen platform)
4. [ ] Wait 24-48 hours for DNS propagation

## Verification
- [ ] Visit your domain to confirm it works
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness

## Troubleshooting
- DNS changes can take up to 48 hours
- Use online DNS checker tools to verify propagation
- Clear browser cache if seeing old content
- Check platform-specific documentation for issues