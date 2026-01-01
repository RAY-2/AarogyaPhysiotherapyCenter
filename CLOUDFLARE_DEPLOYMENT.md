# Cloudflare Pages Deployment Guide

## Fixed Issues

1. **Removed basename from BrowserRouter** - Changed from `/AarogyaPhysiotherapyCenter` to root `/` for production deployment
2. **Added `_redirects` file** - Required for Cloudflare Pages to handle SPA routing

## Cloudflare Pages Configuration

### Build Settings:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty or set to root)

### Environment Variables:
- None required for basic deployment

## Important Notes

1. The `_redirects` file in `public/` folder will be copied to `dist/` during build
2. This file ensures all routes redirect to `index.html` for client-side routing
3. The base path is set to `/` in `vite.config.js` for root domain deployment

## After Deployment

1. Make sure Cloudflare Pages is connected to your GitHub repository
2. Set the build command to: `npm run build`
3. Set the output directory to: `dist`
4. Deploy and the site should work at your root domain

## Troubleshooting

If you still see a blank page:
1. Check browser console for JavaScript errors
2. Verify the build completed successfully
3. Check that `_redirects` file is in the `dist` folder after build
4. Clear Cloudflare cache if needed

