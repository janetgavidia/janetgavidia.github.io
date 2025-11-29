# Migration to GitHub Actions - Next Steps

This guide will help you complete the migration from `gh-pages` branch deployment to GitHub Actions.

## Step 1: Update Dependencies

Remove the gh-pages package from node_modules:

```bash
pnpm install
```

This will update your `node_modules` based on the modified `package.json` (which no longer includes `gh-pages`).

## Step 2: Commit and Push Changes

Commit the new workflow and updated files:

```bash
git add .
git commit -m "Migrate to GitHub Actions deployment"
git push origin main
```

## Step 3: Configure GitHub Pages Settings

1. Go to your repository on GitHub: `https://github.com/janetgavidia/janetgavidia.github.io`
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment" → "Source":
   - Change from **Deploy from a branch** (gh-pages)
   - To **GitHub Actions**
4. Click **Save**

## Step 4: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (should take 2-3 minutes)
4. Once complete, visit `https://janetgavidia.github.io` to verify your site is live

## Step 5: Clean Up Old Deployment Method

After confirming the GitHub Actions deployment works successfully:

### Delete the gh-pages branch

```bash
# Delete the local gh-pages branch (if it exists)
git branch -D gh-pages

# Delete the remote gh-pages branch
git push origin --delete gh-pages
```

### Clean up local files

You can safely delete this migration instructions file:

```bash
git rm MIGRATION_INSTRUCTIONS.md
git commit -m "Clean up migration instructions"
git push origin main
```

## Troubleshooting

### Workflow fails with "Permission denied"

If the workflow fails with permission errors:
1. Go to **Settings** → **Actions** → **General**
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Click **Save**
6. Re-run the failed workflow from the Actions tab

### Site shows 404

- Ensure GitHub Pages source is set to "GitHub Actions"
- Check that the workflow completed successfully
- Wait a few minutes for GitHub's CDN to update
- Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

### Workflow runs but site doesn't update

- Check the workflow logs in the Actions tab
- Ensure the build step completed successfully
- Verify the `out` directory was created and contains files

## What Changed

### Added
- `.github/workflows/deploy.yml` - Automated deployment workflow
- Automatic deployment on every push to `main`
- Build caching for faster deployments

### Removed
- `gh-pages` package dependency
- `pnpm run deploy` script
- Manual deployment process
- `gh-pages` branch (after cleanup)

### Updated
- README.md with new deployment instructions
- Simplified deployment process

## Benefits of GitHub Actions

✅ **Automatic** - Deploys on every push to main
✅ **Consistent** - Same build environment every time
✅ **Visible** - See deployment status in Actions tab
✅ **Fast** - Built-in caching speeds up builds
✅ **Reliable** - No need to remember deployment commands
✅ **Cleaner** - No need for a separate gh-pages branch

---

Once you've verified everything works, you can delete this file!

