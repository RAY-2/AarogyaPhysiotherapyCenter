# Image Directory Structure

This directory contains all images used in the website. Organize your images as follows:

## Directory Structure

```
public/images/
├── machines/          # Physiotherapy machine photos
├── bones/            # Bone and muscle anatomy images
├── exercises/        # Exercise demonstration images (optional)
└── general/          # General images (logo, clinic photos, etc.)
```

## Required Machine Images

Place the following machine images in `machines/` folder:

1. **tens.png** - TENS machine photo
2. **ultrasound.png** - Ultrasound Therapy machine
3. **ift.png** - IFT (Interferential Therapy) machine
4. **wax-bath.png** - Wax Bath Therapy equipment
5. **traction.png** - Lumbar & Cervical Traction machine
6. **swd.png** - SWD (Short Wave Diathermy) machine
7. **laser.png** - Laser Therapy machine
8. **muscle-stimulator.png** - Muscle Stimulator equipment
9. **cupping.png** - Dry Cupping Therapy equipment
10. **manual-exercise.png** - Manual Exercise Equipment
11. **cpm.png** - CPM (Continuous Passive Motion) machine
12. **ultrasonic.png** - Ultrasonic Therapy machine

### Image Specifications for Machines:
- **Recommended size**: 800x600px or larger
- **Aspect ratio**: 4:3 or 16:9
- **Format**: PNG
- **File size**: Keep under 500KB per image for fast loading

## Bone & Muscle Images (Optional but Recommended)

Place anatomy images in `bones/` folder:

1. **skull.png** - Skull anatomy image
2. **spine.png** - Spine/Vertebral column
3. **ribcage.png** - Ribcage structure
4. **humerus.png** - Humerus bone
5. **femur.png** - Femur bone
6. **tibia.png** - Tibia bone
7. **biceps.png** - Biceps muscle
8. **triceps.png** - Triceps muscle
9. **quadriceps.png** - Quadriceps muscles
10. **hamstrings.png** - Hamstring muscles
11. **deltoid.png** - Deltoid muscle
12. **latissimus.png** - Latissimus Dorsi muscle

### Image Specifications for Bones/Muscles:
- **Recommended size**: 600x400px or larger
- **Format**: PNG
- **File size**: Keep under 300KB per image
- **Background**: Transparent or white background preferred

## Exercise Images (Optional)

You can add exercise demonstration images in `exercises/` folder if needed for the exercise pages.

## General Images

Place clinic photos, logos, or other general images in `general/` folder.

## Notes

- All image paths in the code reference images from the `public` folder
- The website will automatically show a placeholder if an image is missing
- Image names are case-sensitive - use lowercase with hyphens (e.g., `wax-bath.png`)
- Always optimize images before uploading to ensure fast page load times
- Consider using image optimization tools to compress images without losing quality

## Image Optimization Tips

1. Use tools like TinyPNG, ImageOptim, or Squoosh to compress PNG images
2. PNG format is used for all images (supports transparency and good quality)
3. Use WebP format if supported for better compression (optional)
4. Maintain aspect ratios to prevent distortion
5. Test images on both desktop and mobile devices
