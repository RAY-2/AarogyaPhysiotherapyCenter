# Image Setup Guide

This guide explains how to add images to your Aarogya Physiotherapy Center website.

## Directory Structure

Images should be placed in the `public/images/` folder with the following structure:

```
public/
└── images/
    ├── machines/          # Physiotherapy machine photos (REQUIRED)
    ├── bones/            # Bone and muscle anatomy images (OPTIONAL)
    ├── exercises/        # Exercise demonstration images (OPTIONAL)
    └── general/          # General images like logos, clinic photos (OPTIONAL)
```

## Step-by-Step Instructions

### 1. Machine Images (Required)

Add photos of your physiotherapy machines to `public/images/machines/` folder:

**Required Files:**
- `tens.png`
- `ultrasound.png`
- `ift.png`
- `wax-bath.png`
- `traction.png`
- `swd.png`
- `laser.png`
- `muscle-stimulator.png`
- `cupping.png`
- `manual-exercise.png`
- `cpm.png`
- `ultrasonic.png`

**Tips:**
- Use clear, well-lit photos of each machine
- Recommended size: 800x600px or larger
- Keep file sizes under 500KB for fast loading
- Use PNG format for images

### 2. Bone & Muscle Images (Optional but Recommended)

Add anatomy images to `public/images/bones/` folder to enhance the learning experience:

**Available Files:**
- `skull.png`
- `spine.png`
- `ribcage.png`
- `humerus.png`
- `femur.png`
- `tibia.png`
- `biceps.png`
- `triceps.png`
- `quadriceps.png`
- `hamstrings.png`
- `deltoid.png`
- `latissimus.png`

**Tips:**
- Use educational/anatomical diagrams or photos
- Recommended size: 600x400px or larger
- Transparent or white backgrounds work best
- Use PNG format for all images

### 3. How Images Work

- **If an image exists**: It will be displayed automatically
- **If an image is missing**: A placeholder will be shown with instructions on where to add the image
- **Image paths**: All images are referenced from the `/images/` path (which maps to `public/images/`)

### 4. Image Optimization

Before adding images, optimize them for web:

1. **Resize**: Ensure images aren't unnecessarily large
2. **Compress**: Use tools like:
   - [TinyPNG](https://tinypng.com/) - For PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Google's image optimizer
   - [ImageOptim](https://imageoptim.com/) - For Mac users
3. **Format**: 
   - Use PNG format for all images
   - PNG supports transparency and good quality
   - Consider WebP for better compression (if supported)

### 5. Testing

After adding images:

1. Restart the development server: `npm run dev`
2. Navigate to the Machines page to see machine images
3. Navigate to the Bone Structure page and click on bones/muscles to see anatomy images
4. Check that all images load correctly

## Current Status

✅ Image directories created
✅ Code updated to support images
✅ Error handling in place (shows placeholder if image missing)
✅ Responsive image styling applied

## Next Steps

1. Take photos of your physiotherapy machines
2. Gather anatomy images for bones/muscles (if desired)
3. Optimize all images
4. Place images in the correct directories
5. Test the website to ensure everything displays correctly

The website will work without images (showing placeholders), but adding real images will significantly improve the user experience!
