# 🖼️ Image Optimization Guide

## Recommended Tools for Image Optimization

### Online Tools (Free)
1. **TinyPNG** (https://tinypng.com/)
   - Excellent for JPEG and PNG compression
   - Maintains quality while reducing file size
   - Batch processing available

2. **ImageOptim** (https://imageoptim.com/)
   - Mac users
   - Drag and drop interface
   - Removes metadata automatically

3. **Squoosh** (https://squoosh.app/)
   - Google's web-based tool
   - Real-time preview
   - Advanced format support (WebP, AVIF)

### Software Tools
1. **Adobe Photoshop**
   - Export for Web feature
   - Precise control over quality
   - Batch actions for multiple images

2. **GIMP** (Free)
   - Open source alternative
   - Export quality settings
   - Resize capabilities

### Batch Processing Script (Node.js)

If you have many images to process, here's a script template:

```javascript
// image-optimizer.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './raw-images';
const outputDir = './optimized-images';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
      
      try {
        await sharp(inputPath)
          .resize(600, 600, { 
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ 
            quality: 85,
            progressive: true 
          })
          .toFile(outputPath);
          
        console.log(`Optimized: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

optimizeImages();
```

To use this script:
1. Install dependencies: `npm install sharp`
2. Place raw images in `./raw-images` folder
3. Run: `node image-optimizer.js`
4. Optimized images will be in `./optimized-images`

## Image Guidelines by Type

### Profile Images (600x600px)
- Quality: 85-90%
- Format: JPEG
- Target size: 50-150KB
- Focus: Clear, well-lit portraits

### Before/After Images (600x600px)
- Quality: 80-85%
- Format: JPEG
- Target size: 50-200KB
- Focus: Consistent lighting and pose

### Strip Avatars (200x200px)
- Quality: 80%
- Format: JPEG
- Target size: 20-50KB
- Focus: Clear face recognition

## Quick Mobile Testing

After uploading images, test on various devices:

### Viewport Sizes to Test:
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 414px (iPhone Plus)
- 768px (iPad)
- 1024px (Desktop)

### Performance Checklist:
- [ ] Images load in under 2 seconds on 3G
- [ ] No layout shift when images load
- [ ] Images look sharp on Retina displays
- [ ] File sizes are optimized for mobile data

## WebP Conversion (Advanced)

For better performance, consider WebP format:

```bash
# Convert JPEG to WebP using cwebp
cwebp -q 85 input.jpg -o output.webp

# Batch convert
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

Then update your code to use WebP with JPEG fallback:

```javascript
// Example with fallback
const getImageUrl = (basePath, format = 'webp') => {
  return format === 'webp' 
    ? `${basePath}.webp`
    : `${basePath}.jpg`;
};
```

## Final Upload Checklist

- [ ] All images are 1:1 aspect ratio (square)
- [ ] Profile images: 600x600px, <200KB
- [ ] Before/After images: 600x600px, <200KB
- [ ] Strip avatars: 200x200px, <50KB
- [ ] File names follow naming convention
- [ ] Images are placed in correct folders
- [ ] Code has been updated with new paths
- [ ] Images tested on mobile devices
- [ ] All images load without errors