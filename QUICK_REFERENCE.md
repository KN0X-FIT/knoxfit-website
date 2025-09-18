# 🚀 **Quick Reference: Exact File Paths Needed**

## 📁 **Upload These Exact Files**

### **Profile Images** (800x800px, square)
```
public/testimonials/profile/kartik-hegde.jpg
public/testimonials/profile/rohit-s-shet.jpg
public/testimonials/profile/rohit-r-parser.jpg
public/testimonials/profile/prajwal-kakandaki.jpg
public/testimonials/profile/vignesh-hulekal.jpg
public/testimonials/profile/arya.jpg
public/testimonials/profile/pavan-kumar-shetty.jpg
```

### **Before Images** (600x800px, portrait)
```
public/testimonials/before/kartik-hegde-before.jpg
public/testimonials/before/rohit-s-shet-before.jpg
public/testimonials/before/rohit-r-parser-before.jpg
public/testimonials/before/prajwal-kakandaki-before.jpg
public/testimonials/before/vignesh-hulekal-before.jpg
public/testimonials/before/arya-before.jpg
public/testimonials/before/pavan-kumar-shetty-before.jpg
```

### **After Images** (600x800px, portrait)
```
public/testimonials/after/kartik-hegde-after.jpg
public/testimonials/after/rohit-s-shet-after.jpg
public/testimonials/after/rohit-r-parser-after.jpg
public/testimonials/after/prajwal-kakandaki-after.jpg
public/testimonials/after/vignesh-hulekal-after.jpg
public/testimonials/after/arya-after.jpg
public/testimonials/after/pavan-kumar-shetty-after.jpg
```

## 🔄 **After Upload: Update Code**

Once files are uploaded, update these locations:

### **1. Main Testimonials Component**
File: `src/components/sections/testimonials.tsx`
- Replace placeholder URLs with: `/testimonials/profile/[filename].jpg`

### **2. Testimonials Page** 
File: `src/pages/Testimonials.tsx`
- Update `beforeAfterImages.before` to: `/testimonials/before/[filename]-before.jpg`
- Update `beforeAfterImages.after` to: `/testimonials/after/[filename]-after.jpg`

### **3. Testimonial Strip**
File: `src/components/TestimonialStrip.tsx` 
- Update `image` property to: `/testimonials/profile/[filename].jpg`

## 📏 **Size Requirements Summary**
- **Profile**: 800x800px (1:1) - Max 150KB
- **Before/After**: 600x800px (3:4) - Max 200KB
- **Format**: JPG or WebP preferred
- **Quality**: 85-90% compression