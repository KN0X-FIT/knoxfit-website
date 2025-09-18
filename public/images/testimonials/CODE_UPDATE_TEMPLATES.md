# 🔧 Code Update Templates

## How to Update Image Paths After Upload

Once you've uploaded your client images to the proper folders, use these templates to update the code:

### 1. Main Testimonials Section (`src/components/sections/testimonials.tsx`)

```javascript
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    age: 32,
    program: 'Weight Loss',
    quote: 'I lost 15 kg in 3 months with the sustainable diet plan. No supplements, just clean eating and consistent workouts.',
    achievement: 'Lost 15 kg',
    // UPDATE THESE PATHS:
    image: '/images/testimonials/profiles/rahul-sharma-profile.jpg',
    beforeImage: '/images/testimonials/before-after/rahul-sharma-before.jpg',
    afterImage: '/images/testimonials/before-after/rahul-sharma-after.jpg'
  },
  {
    id: '2',
    name: 'Priya Patel',
    age: 28,
    program: 'Body Recomposition',
    quote: 'The trainers at KN0X-FIT are incredibly supportive. With daily check-ins and personalized guidance, I achieved a body I never thought possible!',
    achievement: 'Gained 5 kg muscle, lost 8 kg fat',
    // UPDATE THESE PATHS:
    image: '/images/testimonials/profiles/priya-patel-profile.jpg',
    beforeImage: '/images/testimonials/before-after/priya-patel-before.jpg',
    afterImage: '/images/testimonials/before-after/priya-patel-after.jpg'
  },
  // Continue for all testimonials...
];
```

### 2. Testimonials Page (`src/pages/Testimonials.tsx`)

```javascript
const testimonials = [
  {
    id: 1,
    name: "Kartik Hegde",
    age: 22,
    category: "Muscle Gain",
    program: "KN0X-FIT Total Transformation Program",
    duration: "6 months",
    startingWeight: "70 kg",
    currentWeight: "81 kg",
    leanMassGained: "6.9 kg",
    totalWeightGained: "11 kg",
    result: "Noticeable increase in muscle size, strength, and confidence",
    message: "KN0X-FIT helped me transform completely! In just 6 months, I went from 70 kg to 81 kg and built nearly 7 kg of solid lean muscle. The personalized workouts and diet plans gave me strength, size, and the confidence I always wanted!",
    achievement: "Gained 11kg & 6.9kg lean mass",
    metrics: {
      weight: "11kg gained",
      muscle: "6.9kg lean mass",
      confidence: "Boosted significantly"
    },
    beforeAfterImages: {
      // UPDATE THESE PATHS:
      before: '/images/testimonials/before-after/kartik-hegde-before.jpg',
      after: '/images/testimonials/before-after/kartik-hegde-after.jpg'
    }
  },
  // Continue for all testimonials...
];
```

### 3. Testimonial Strip (`src/components/TestimonialStrip.tsx`)

```javascript
const testimonialImages = [
  {
    id: 1,
    name: "Kartik Hegde",
    // UPDATE THIS PATH:
    image: '/images/testimonials/strip/kartik-hegde-avatar.jpg',
    type: "Muscle Gain"
  },
  {
    id: 2,
    name: "Rohit S Shet",
    // UPDATE THIS PATH:
    image: '/images/testimonials/strip/rohit-shet-avatar.jpg',
    type: "Muscle Gain"
  },
  // Continue for all testimonials...
];
```

## 📋 Complete File Names Needed

### Profiles Folder (`/profiles/`)
- `rahul-sharma-profile.jpg` (600x600px)
- `priya-patel-profile.jpg` (600x600px)
- `amit-khanna-profile.jpg` (600x600px)
- `neha-gupta-profile.jpg` (600x600px)

### Before/After Folder (`/before-after/`)
**Main Testimonials:**
- `rahul-sharma-before.jpg` & `rahul-sharma-after.jpg`
- `priya-patel-before.jpg` & `priya-patel-after.jpg`
- `amit-khanna-before.jpg` & `amit-khanna-after.jpg`
- `neha-gupta-before.jpg` & `neha-gupta-after.jpg`

**Testimonials Page:**
- `kartik-hegde-before.jpg` & `kartik-hegde-after.jpg`
- `rohit-shet-before.jpg` & `rohit-shet-after.jpg`
- `rohit-parser-before.jpg` & `rohit-parser-after.jpg`
- `prajwal-kakandaki-before.jpg` & `prajwal-kakandaki-after.jpg`
- `vignesh-hulekal-before.jpg` & `vignesh-hulekal-after.jpg`
- `arya-before.jpg` & `arya-after.jpg`
- `pavan-shetty-before.jpg` & `pavan-shetty-after.jpg`

### Strip Folder (`/strip/`)
- `kartik-hegde-avatar.jpg` (200x200px)
- `rohit-shet-avatar.jpg` (200x200px)
- `rohit-parser-avatar.jpg` (200x200px)
- `prajwal-kakandaki-avatar.jpg` (200x200px)
- `vignesh-hulekal-avatar.jpg` (200x200px)
- `arya-avatar.jpg` (200x200px)
- `pavan-shetty-avatar.jpg` (200x200px)

## ⚠️ Important Notes

1. **File Extensions**: Use `.jpg` or `.webp` - ensure consistency
2. **Case Sensitivity**: Use lowercase file names for better compatibility
3. **No Spaces**: Use hyphens (-) instead of spaces in file names
4. **Aspect Ratios**: Maintain 1:1 (square) ratios for all images
5. **Testing**: Test images on mobile devices after upload

## 🔄 Steps to Update Code

1. Upload all images to correct folders
2. Update image paths in the three files mentioned above
3. Remove the placeholder `null` values
4. Test in browser to ensure images load correctly
5. Check mobile responsiveness

## 🚀 Quick Find & Replace

For bulk updates, you can use these find/replace patterns:

**Find:** `image: null`  
**Replace:** `image: '/images/testimonials/strip/[CLIENT-NAME]-avatar.jpg'`

**Find:** `before: null`  
**Replace:** `before: '/images/testimonials/before-after/[CLIENT-NAME]-before.jpg'`

**Find:** `after: null`  
**Replace:** `after: '/images/testimonials/before-after/[CLIENT-NAME]-after.jpg'`