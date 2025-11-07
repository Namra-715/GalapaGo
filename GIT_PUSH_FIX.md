# Fixing Git Push Error with Large Files

## Problem
You're getting SSL errors when pushing because you have 263MB of images and 5.3MB of videos in your git repository.

## Solutions (try in order):

### Option 1: Use SSH instead of HTTPS (Recommended)
If your remote is using HTTPS, switch to SSH:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push origin namra
```

### Option 2: Use Git LFS for Large Files
Install Git LFS and track large files:
```bash
# Install Git LFS (if not installed)
brew install git-lfs

# Initialize Git LFS
git lfs install

# Track large image/video files
git lfs track "*.jpg"
git lfs track "*.jpeg"
git lfs track "*.png"
git lfs track "*.webp"
git lfs track "*.mp4"

# Add the .gitattributes file
git add .gitattributes
git commit -m "Add Git LFS tracking for large files"

# Push
git push origin namra
```

### Option 3: Push in Smaller Batches
```bash
# Push with smaller pack size
git config pack.windowMemory "256m"
git config pack.packSizeLimit "2g"
git push origin namra
```

### Option 4: Use GitHub CLI
```bash
gh auth login
gh repo sync
```

### Option 5: Remove Large Files from History (Advanced)
If you don't need the large files in git history:
```bash
# Use git-filter-repo or BFG Repo-Cleaner
# This rewrites history - be careful!
```

## Quick Fix (Try This First)
```bash
# Increase timeout and buffer
git config http.postBuffer 1048576000
git config http.timeout 600

# Try pushing again
git push origin namra
```

## Best Practice
For future projects, add large assets to `.gitignore` and use:
- Cloud storage (AWS S3, Cloudinary, etc.)
- CDN for images
- Git LFS for version control of large files

