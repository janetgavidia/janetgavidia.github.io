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

- Node.js 18+ and pnpm installed
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/janetgavidia/janetgavidia.github.io.git
cd janetgavidia.github.io
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server with hot reload:

```bash
pnpm dev
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
pnpm build
```

This generates static HTML, CSS, and JavaScript files in the `/out` directory.

## Deploying to GitHub Pages

This portfolio is configured for automatic deployment to `https://janetgavidia.github.io` using GitHub Actions.

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

### Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Click **Save**

That's it! The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site whenever you push to the `main` branch.

### How It Works

The deployment workflow:
- Triggers automatically on every push to the `main` branch
- Can also be triggered manually from the Actions tab
- Installs dependencies using pnpm
- Builds the Next.js static site
- Deploys the `out` folder to GitHub Pages
- Your site will be live at `https://janetgavidia.github.io`

### Updating the Site

To update your live site:

1. Make your changes locally
2. Test with `pnpm dev`
3. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

4. GitHub Actions will automatically build and deploy your changes
5. Your site will be updated at `https://janetgavidia.github.io` in a few minutes

You can monitor the deployment progress in the **Actions** tab of your GitHub repository.

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
- **Solution**: Ensure GitHub Pages is configured to use **GitHub Actions** as the source
- Check that the `output: 'export'` is set in `next.config.ts`
- Verify the workflow completed successfully in the Actions tab

### Issue: Images not loading
- **Solution**: Verify images are in `/public/images/` and paths start with `/images/`
- Ensure `images.unoptimized: true` is set in `next.config.ts` (required for static export)

### Issue: Styles not applying
- **Solution**: Run `pnpm build` to regenerate Tailwind CSS
- Clear browser cache

### Issue: Changes not appearing on live site
- **Solution**: 
  1. Check that your changes were pushed to the `main` branch
  2. Verify the GitHub Actions workflow completed successfully (Actions tab)
  3. Wait a few minutes for GitHub Pages to update
  4. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

## Development Tips

- Use `pnpm dev` for instant hot reload during development
- All content is in `/src/data/` - no need to touch components to update text
- Components are reusable - great for adding similar sections
- TypeScript provides autocomplete and type checking for content

## License

© 2024 Janet Gavidia. All rights reserved.

## Support

For issues or questions, please open an issue on the GitHub repository.
