# App Size Optimization Plan for Offline Use

## Current State
- **Total Assets**: 270 MB
- **Images Used**: 42 out of 771 files
- **Display Size**: 375px × 200px (card images)
- **Current Image Dimensions**: 1000×667px (overkill)
- **Target**: Reduce to 30-50 MB for offline app

## Optimization Strategy

### Phase 1: Remove Unused Assets (Immediate - Saves ~90MB)

#### 1.1 Delete Duplicate Folders
```bash
# Remove duplicate hotel folders (saves ~90MB)
rm -rf assets/images/hotels1/
rm -rf assets/images/hotels2/
```

#### 1.2 Remove Unused Images
Only keep images actually referenced in `data/placeholderData.js`:
- **Hotels**: safari1-4, bayview1-4, blueheron1-4, santafe1-4 (16 images)
- **Restaurants**: coffeelab1-4, elmuellededarwin1-4, lolo1-4, aquelarre1-4 (16 images)
- **Other**: g1-5, reserva-el-chato, galapagos-beach, SanCristobal, gsc, endangered/* (10 images)

**Action**: Move unused images to a backup folder, or delete if confirmed unused.

### Phase 2: Image Optimization (Saves ~150-200MB)

#### 2.1 Resize Images
**Target Dimensions**: 
- **Card images**: 800px width × 450px height (2x for retina = 1600×900px max)
- **Thumbnails**: 400px width × 225px height
- **Icons**: Keep current size (already small)

**Rationale**: 
- Mobile screens: 375-414px wide
- Retina displays: 2x = 750-828px max needed
- 800px width provides buffer for larger devices
- Height: 200px display × 2.25 = 450px (maintains aspect ratio)

#### 2.2 Compress Images
**JPEG Settings**:
- Quality: 80-85% (good balance of quality/size)
- Progressive: Yes (better perceived loading)
- Strip EXIF: Yes (removes metadata, saves space)

**PNG Settings**:
- Convert to JPEG if no transparency needed
- Use PNG only for icons/logos with transparency
- Optimize with pngquant or optipng

#### 2.3 Expected Results
- **Before**: 200-500KB per image
- **After**: 50-100KB per image (60-80% reduction)
- **42 images**: ~2-4MB total (down from ~10-20MB)

### Phase 3: Additional Optimizations

#### 3.1 Use WebP Format (Optional)
- Better compression than JPEG (30% smaller)
- React Native supports WebP natively
- Fallback to JPEG if needed

#### 3.2 Optimize Other Assets
- **Videos**: Compress or remove if not essential (5.3MB)
- **Icons**: Already optimized (976KB is fine)
- **Splash screens**: Optimize PNGs

#### 3.3 Code Optimization
- Remove unused dependencies
- Enable code splitting if possible
- Tree-shake unused code

## Implementation Steps

### Step 1: Clean Up (Do First)
```bash
# Backup first!
cd main-app/assets/images
mkdir -p ../backup
cp -r . ../backup/

# Remove duplicates
rm -rf hotels1/ hotels2/

# Create list of used images
grep -r "require.*assets/images" ../data/ ../screens/ | \
  grep -o "assets/images/[^'\"]*" | sort -u > used_images.txt
```

### Step 2: Image Optimization Script
Use ImageMagick or Sharp to batch optimize:

**ImageMagick Example**:
```bash
# Resize and compress JPEGs
find assets/images -name "*.jpg" -exec mogrify \
  -resize 800x450\> \
  -quality 85 \
  -strip \
  -interlace Plane \
  {} \;
```

**Sharp (Node.js) - Recommended**:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(800, 450, { 
      fit: 'inside',
      withoutEnlargement: true 
    })
    .jpeg({ 
      quality: 85, 
      progressive: true,
      mozjpeg: true 
    })
    .toFile(outputPath);
}
```

### Step 3: Verify
- Test app functionality
- Check image quality on devices
- Measure final bundle size

## Expected Results

| Phase | Action | Size Reduction |
|-------|---------------------|-----------------|
| Current | Baseline | 270 MB |
| Phase 1 | Remove duplicates + unused | ~180 MB (-90 MB) |
| Phase 2 | Optimize images | ~30-50 MB (-130-150 MB) |
| Phase 3 | Additional optimizations | ~25-40 MB (-5-10 MB) |

**Final Target**: 25-40 MB (90% reduction from current)

## Tools Needed

1. **ImageMagick** (command line):
   ```bash
   brew install imagemagick  # macOS
   ```

2. **Sharp** (Node.js - recommended):
   ```bash
   npm install --save-dev sharp
   ```

3. **Manual Tools**:
   - ImageOptim (macOS GUI)
   - Squoosh (web-based)
   - TinyPNG (web-based)

## Notes for Offline Apps

Since this app must work offline:
- ✅ All assets must be bundled
- ✅ No CDN/remote loading possible
- ✅ Images must be optimized before bundling
- ✅ Consider progressive image loading (low-res first, then full-res)
- ✅ Use appropriate formats (JPEG for photos, PNG for icons)

## Priority Order

1. **High Priority** (Do First):
   - Remove duplicate folders (hotels1, hotels2)
   - Remove unused images
   - Resize images to 800px width

2. **Medium Priority**:
   - Compress images (quality 80-85%)
   - Optimize other assets (videos, PNGs)

3. **Low Priority** (Nice to Have):
   - Convert to WebP
   - Advanced compression techniques

