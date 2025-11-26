# Quick Start Guide

## 🎯 Your Portfolio is Ready!

This Next.js portfolio has been built with:
- ✅ Responsive design matching your Figma mockup
- ✅ Reusable components for easy maintenance
- ✅ Data-driven content (easy to update)
- ✅ Static export configured for GitHub Pages
- ✅ Professional styling with Tailwind CSS

## 🚀 Next Steps

### 1. Test Locally (Recommended First Step)

```bash
pnpm dev
```

Open http://localhost:3000 to preview your site.

### 2. Replace Placeholder Images

Current placeholders are in `/public/images/`:
- **Projects**: Add your project photos to `/public/images/projects/`
- **Client logos**: Add to `/public/images/clients/`
- **Education logos**: Add to `/public/images/logos/`

See `/public/images/README.md` for image specifications.

### 3. Update Content

All content is in `/src/data/`:
- `about.ts` - Your bio and tagline
- `experience.ts` - Professional experience
- `education.ts` - Educational background
- `projects.ts` - Notable projects
- `clients.ts` - Client/partner logos
- `community.ts` - Community involvement

Just edit the files and save - the dev server auto-reloads!

### 4. Deploy to GitHub Pages

**One-time setup:**

```bash
# Create repository on GitHub: janetgavidia.github.io
git remote add origin https://github.com/janetgavidia/janetgavidia.github.io.git
git branch -M main
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

**Deploy:**

```bash
pnpm deploy
```

**Configure GitHub Pages:**
1. Go to repository Settings → Pages
2. Source: Select `gh-pages` branch
3. Save
4. Wait a few minutes
5. Visit: https://janetgavidia.github.io

### 5. Making Updates

```bash
# 1. Make your changes
# 2. Test locally
pnpm dev

# 3. Deploy
pnpm deploy
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   └── layout.tsx        # Site layout & metadata
├── components/           # Reusable UI components
│   ├── Navigation.tsx
│   ├── SectionHeader.tsx
│   ├── ExperienceCard.tsx
│   ├── ProjectCard.tsx
│   └── ...
└── data/                 # Content files (EDIT THESE!)
    ├── about.ts
    ├── experience.ts
    ├── education.ts
    └── ...
```

## 💡 Tips

1. **Always test locally** before deploying: `pnpm dev`
2. **Content changes** only require editing `/src/data/` files
3. **Adding a new project**: Edit `/src/data/projects.ts` and add image to `/public/images/projects/`
4. **Changing colors**: Edit `/src/app/globals.css` (look for CSS variables)
5. **Deploy anytime**: Just run `pnpm deploy`

## 🆘 Need Help?

See `README.md` for:
- Detailed deployment instructions
- Troubleshooting guide
- Customization options
- Full documentation

## ✅ Checklist

- [ ] Test site locally (`pnpm dev`)
- [ ] Replace placeholder images
- [ ] Update content in `/src/data/`
- [ ] Create GitHub repository: `janetgavidia.github.io`
- [ ] Deploy: `pnpm deploy`
- [ ] Configure GitHub Pages settings
- [ ] Visit live site: `https://janetgavidia.github.io`

---

**You're all set!** Start with `pnpm dev` to see your portfolio locally.

