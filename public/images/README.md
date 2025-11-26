# Images Directory

This directory contains all static images for the portfolio.

## Current Structure

```
images/
├── clients/         # Client and partner logos
├── logos/          # Education institution logos
└── projects/       # Project showcase images
```

## Replacing Placeholder Images

The current images are SVG placeholders. To replace them with real images:

1. **Client Logos** (`/images/clients/`):
   - Replace `.png` files with actual company logos
   - Recommended size: 200x100px (will be auto-sized)
   - Format: PNG with transparent background preferred

2. **Education Logos** (`/images/logos/`):
   - Replace with actual institution logos
   - Recommended size: 150x150px
   - Format: PNG with transparent background preferred

3. **Project Images** (`/images/projects/`):
   - Replace with actual project photos
   - Recommended size: 800x600px minimum
   - Format: JPG or PNG
   - Aspect ratio: 16:9 or 4:3

## Adding New Images

1. Add image files to the appropriate directory
2. Update the corresponding data file in `/src/data/`:
   - Projects: `/src/data/projects.ts`
   - Clients: `/src/data/clients.ts`
   - Education: `/src/data/education.ts`
3. Reference using: `/images/category/filename.ext`
4. Rebuild: `npm run build`

## Tips

- Use descriptive filenames (e.g., `universal-studios.jpg` not `img1.jpg`)
- Optimize images before adding (compress for web)
- Keep file sizes reasonable for fast loading
- Use WebP format for best performance (optional)

