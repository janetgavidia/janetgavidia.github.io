# Janet Gavidia - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project is configured for static export and optimized for GitHub Pages deployment.

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Google Fonts** - Custom typography (Dancing Script for signature)

## Project Structure

```
janet-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles and Tailwind config
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── LogoGrid.tsx
│   │   ├── EducationItem.tsx
│   │   └── CommunityCard.tsx
│   └── data/               # Content data files (easy to update)
│       ├── about.ts
│       ├── education.ts
│       ├── experience.ts
│       ├── projects.ts
│       ├── clients.ts
│       └── community.ts
├── public/
│   └── images/            # Static images and logos
└── out/                   # Generated static site (after build)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/janetgavidia/janetgavidia.github.io.git
cd janetgavidia.github.io
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The page will automatically reload when you make changes to the code.

### Making Content Updates

All content is stored in the `/src/data` directory as TypeScript files. To update content:

1. **About Me**: Edit `/src/data/about.ts`
2. **Education**: Edit `/src/data/education.ts`
3. **Professional Experience**: Edit `/src/data/experience.ts`
4. **Projects**: Edit `/src/data/projects.ts`
5. **Clients/Partners**: Edit `/src/data/clients.ts`
6. **Community**: Edit `/src/data/community.ts`

After editing, save the file and the dev server will automatically reload.

### Building for Production

Build the static site:

```bash
npm run build
```

This generates static HTML, CSS, and JavaScript files in the `/out` directory.

## Deploying to GitHub Pages

This portfolio is configured to be hosted at `https://janetgavidia.github.io`.

### Initial Setup

1. **Create the GitHub repository** (if not already created):
   - Go to GitHub and create a new repository named `janetgavidia.github.io`
   - The repository name MUST match this format: `<username>.github.io`

2. **Initialize git** (if not already initialized):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Add remote and push**:
```bash
git remote add origin https://github.com/janetgavidia/janetgavidia.github.io.git
git branch -M main
git push -u origin main
```

### Deployment Methods

#### Option 1: Manual Deployment (Recommended for first deployment)

1. **Build the site**:
```bash
npm run build
```

2. **Deploy the `out` folder contents**:
```bash
# Install gh-pages package (one-time)
npm install -D gh-pages

# Deploy
npx gh-pages -d out -b gh-pages
```

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select branch: `gh-pages`
   - Click **Save**
   - Your site will be live at `https://janetgavidia.github.io` in a few minutes

#### Option 2: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

Then configure GitHub Pages to use GitHub Actions:
- Go to **Settings** → **Pages**
- Under "Source", select **GitHub Actions**
- Push to main branch to trigger deployment

### Updating the Site

To update your live site:

1. Make your changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

5. Deploy (if using manual method):
```bash
npx gh-pages -d out -b gh-pages
```

If using GitHub Actions, deployment happens automatically on push to main.

## Customization

### Adding Images

1. Add image files to `/public/images/`
2. Reference them in data files using `/images/your-image.jpg`
3. Rebuild the site

### Updating Colors

Edit `/src/app/globals.css`:
- `--background`: Main background color (currently cream/beige)
- `--yellow-highlight`: Section header highlight color

### Modifying Components

All components are in `/src/components/`. They use TypeScript interfaces for type safety.

## Troubleshooting

### Issue: 404 errors after deployment
- **Solution**: Ensure GitHub Pages is configured to use the correct branch (`gh-pages`)
- Check that the `output: 'export'` is set in `next.config.ts`

### Issue: Images not loading
- **Solution**: Verify images are in `/public/images/` and paths start with `/images/`
- Ensure `images.unoptimized: true` is set in `next.config.ts` (required for static export)

### Issue: Styles not applying
- **Solution**: Run `npm run build` to regenerate Tailwind CSS
- Clear browser cache

### Issue: Changes not appearing on live site
- **Solution**: 
  1. Rebuild: `npm run build`
  2. Clear the `out` folder
  3. Redeploy: `npx gh-pages -d out -b gh-pages`
  4. Wait a few minutes for GitHub to update
  5. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

## Development Tips

- Use `npm run dev` for instant hot reload during development
- All content is in `/src/data/` - no need to touch components to update text
- Components are reusable - great for adding similar sections
- TypeScript provides autocomplete and type checking for content

## License

© 2024 Janet Gavidia. All rights reserved.

## Support

For issues or questions, please open an issue on the GitHub repository.
