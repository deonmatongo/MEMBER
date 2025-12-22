# Image Setup Guide

## Current Image Sources

The site is currently using the original base44 Supabase storage URLs for all page images (hero sections, collections, featured images, etc.).

## Product Images

The product images in `src/data/products.json` currently use placeholder images. To use your actual product images:

1. **Option 1: Use the original product image URLs** (if you have them)
   - Replace the image URLs in `src/data/products.json` with your actual product image URLs

2. **Option 2: Use local images**
   - Create a `public/images/products/` directory
   - Place your product images there
   - Update the image URLs in `src/data/products.json` to use `/images/products/your-image.jpg`

3. **Option 3: Use a CDN or image hosting service**
   - Upload images to your preferred hosting service
   - Update the URLs in `src/data/products.json`

## Image Structure

Current images are loaded from:
- **Logo**: Supabase storage (base44-prod bucket)
- **Page Images**: Supabase storage (base44-prod bucket)
- **Product Images**: Currently using placeholder images (needs update)

If the Supabase storage URLs become unavailable, you'll need to:
1. Download the images from the current URLs
2. Host them locally or on a CDN
3. Update the URLs in the respective component files

