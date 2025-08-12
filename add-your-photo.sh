#!/bin/bash

echo "🎯 Adding Your Profile Photo to Portfolio"
echo "========================================"
echo ""

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "Creating images directory..."
    mkdir -p public/images
fi

echo "📁 Your images folder is ready at: public/images/"
echo ""
echo "📸 To add your profile photo:"
echo "   1. Save your photo as 'profile-photo.jpg' in public/images/"
echo "   2. Or use the upload feature on the website"
echo ""
echo "🌐 Your portfolio is running at: http://localhost:3000"
echo ""
echo "💡 Tip: You can also use the upload feature by:"
echo "   - Going to http://localhost:3000"
echo "   - Hovering over your profile photo"
echo "   - Clicking the camera icon"
echo "   - Selecting your photo file"
echo ""
echo "✅ Ready to add your photo!"
