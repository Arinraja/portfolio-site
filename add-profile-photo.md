# How to Add Your Profile Photo

## Quick Steps:

1. **Save your profile photo** as `profile-photo.jpg` in the `public/images/` folder
2. **Replace the placeholder** in `public/index.html`:

   Change this line:
   ```html
   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Arin Raja" class="profile-photo" id="profilePhoto">
   ```

   To this:
   ```html
   <img src="images/profile-photo.jpg" alt="Arin Raja" class="profile-photo" id="profilePhoto">
   ```

## Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Size**: 300x300 pixels or larger (square recommended)
- **File size**: Under 500KB for best performance

## Alternative: Use the Upload Feature
You can also use the built-in upload feature:
1. Hover over your profile photo
2. Click the camera icon
3. Select your photo file
4. It will be saved automatically

## Current Status:
✅ Server is running on http://localhost:3000
✅ Profile photo upload functionality is working
✅ GitHub icon is commented out
⏳ Waiting for your profile photo file
