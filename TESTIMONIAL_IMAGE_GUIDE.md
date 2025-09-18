# 📸 **KNOX-FIT Testimonial Images Upload Guide**

## 🗂️ **Directory Structure**

```
public/
├── testimonials/
│   ├── profile/          # Profile/headshot images
│   │   ├── kartik-hegde.jpg
│   │   ├── rohit-s-shet.jpg
│   │   ├── rohit-r-parser.jpg
│   │   ├── prajwal-kakandaki.jpg
│   │   ├── vignesh-hulekal.jpg
│   │   ├── arya.jpg
│   │   └── pavan-kumar-shetty.jpg
│   ├── before/           # Before transformation images
│   │   ├── kartik-hegde-before.jpg
│   │   ├── rohit-s-shet-before.jpg
│   │   ├── rohit-r-parser-before.jpg
│   │   ├── prajwal-kakandaki-before.jpg
│   │   ├── vignesh-hulekal-before.jpg
│   │   ├── arya-before.jpg
│   │   └── pavan-kumar-shetty-before.jpg
│   └── after/            # After transformation images
│       ├── kartik-hegde-after.jpg
│       ├── rohit-s-shet-after.jpg
│       ├── rohit-r-parser-after.jpg
│       ├── prajwal-kakandaki-after.jpg
│       ├── vignesh-hulekal-after.jpg
│       ├── arya-after.jpg
│       └── pavan-kumar-shetty-after.jpg
```

## 🎯 **Image Specifications & Proportions**

### **1. Profile Images (`/testimonials/profile/`)**
- **Usage**: Main testimonial cards, testimonial strip
- **Dimensions**: 800x800px (1:1 square ratio)
- **Format**: JPG or WebP (preferred for better compression)
- **File Size**: Maximum 150KB
- **Content**: Clear headshot/portrait showing face clearly
- **Background**: Clean, professional background preferred
- **Quality**: High resolution, well-lit, sharp focus

### **2. Before Images (`/testimonials/before/`)**
- **Usage**: Before/after comparison views
- **Dimensions**: 600x800px (3:4 portrait ratio)
- **Format**: JPG or WebP
- **File Size**: Maximum 200KB
- **Content**: Full body or relevant body part showing starting condition
- **Pose**: Standing straight, neutral pose
- **Clothing**: Minimal, form-fitting to show body shape
- **Lighting**: Consistent, natural lighting preferred

### **3. After Images (`/testimonials/after/`)**
- **Usage**: Before/after comparison views
- **Dimensions**: 600x800px (3:4 portrait ratio)
- **Format**: JPG or WebP
- **File Size**: Maximum 200KB
- **Content**: Same pose/angle as before image
- **Pose**: Identical to before image for accurate comparison
- **Clothing**: Similar style to before image
- **Lighting**: Consistent with before image

## 📝 **Naming Convention**

### **Format**: `[first-name]-[last-name]-[type].jpg`
- Use lowercase letters only
- Replace spaces with hyphens (-)
- Remove special characters

### **Examples**:
```
kartik-hegde.jpg              # Profile image
kartik-hegde-before.jpg       # Before transformation
kartik-hegde-after.jpg        # After transformation
```

## 🎨 **Image Quality Guidelines**

### **Technical Requirements**:
- **Resolution**: Minimum 600x600px for profiles, 600x800px for before/after
- **Color Space**: sRGB
- **Compression**: 85-90% quality (balance between file size and quality)
- **Format Priority**: WebP > JPG > PNG

### **Photography Guidelines**:
- **Lighting**: Natural light or well-balanced artificial lighting
- **Background**: Solid color or minimal distraction
- **Focus**: Sharp focus on subject
- **Angle**: Front-facing for profiles, consistent angles for before/after
- **Expression**: Natural, confident expression for profiles

## 🏃‍♂️ **Client-Specific Requirements**

### **Current Clients Needing Images**:

1. **Kartik Hegde** (22, Muscle Gain)
   - Starting: 70kg → Current: 81kg
   - Focus: Muscle definition, arm/chest development

2. **Rohit S Shet** (21, Muscle Gain)
   - Starting: 60kg → Current: 68kg
   - Focus: Overall muscle growth, lean physique

3. **Rohit R Parser** (22, Muscle Gain)
   - Starting: 51kg → Current: 56kg
   - Focus: Transformation from very lean to muscular

4. **Prajwal Kakandaki** (26, Fat Loss)
   - Starting: 85kg → Current: 65kg
   - Focus: Dramatic weight loss, body composition change

5. **Vignesh Hulekal** (24, Fat Loss)
   - Starting: 96kg → Current: 81kg
   - Focus: Significant fat loss, body shape transformation

6. **Arya** (20, Fat Loss)
   - Starting: 97kg → Current: 91kg
   - Focus: Body composition improvement, fitness gains

7. **Pavan Kumar Shetty** (25, Muscle Gain)
   - Starting: 75kg → Current: 88kg
   - Focus: Substantial muscle mass increase

## 📱 **Mobile Optimization**

Images are automatically optimized for mobile viewing with:
- **Responsive sizing**: 64px → 80px → 96px across breakpoints
- **Progressive loading**: Optimized for fast mobile networks
- **Touch-friendly interactions**: Properly sized for mobile taps

## 🔧 **Implementation Steps**

### **Step 1: Upload Images**
1. Place images in appropriate folders following naming convention
2. Ensure all images meet size and quality requirements
3. Test images load correctly in browser

### **Step 2: Update Code References**
After uploading, update the image paths in the code:

```javascript
// In testimonials.tsx (Profile images)
image: '/testimonials/profile/kartik-hegde.jpg'

// In testimonials.tsx (Before/After)
beforeImage: '/testimonials/before/kartik-hegde-before.jpg'
afterImage: '/testimonials/after/kartik-hegde-after.jpg'

// In TestimonialStrip.tsx
image: '/testimonials/profile/kartik-hegde.jpg'
```

### **Step 3: Test Across Devices**
- Verify images display correctly on desktop
- Test mobile responsiveness
- Check loading performance
- Validate before/after comparison functionality

## ⚡ **Performance Tips**

1. **Use WebP format** when possible for better compression
2. **Optimize before upload** using tools like TinyPNG or ImageOptim
3. **Consider lazy loading** for better page performance
4. **Test on slow connections** to ensure good user experience

## 🎯 **Content Guidelines**

### **For Muscle Gain Clients**:
- Show muscle definition clearly
- Include multiple angles if possible
- Highlight specific muscle groups that improved

### **For Fat Loss Clients**:
- Demonstrate body composition changes
- Show overall silhouette transformation
- Include measurements or clothing fit comparisons

### **General Best Practices**:
- Maintain client privacy and consent
- Use consistent poses for accurate comparisons
- Ensure good lighting for clear visibility
- Keep backgrounds simple and professional

## 📞 **Support**

If you need help with image preparation or have questions about specifications, refer to this guide or consult with the development team for technical assistance.