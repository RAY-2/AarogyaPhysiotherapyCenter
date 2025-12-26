# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`

## Important: Configuration Required

Before using the website, update these values:

### 1. WhatsApp Number
- Open `src/components/Footer.jsx`
- Open `src/components/SocialButtons.jsx`
- Open `src/components/AppointmentForm.jsx`
- Open `src/pages/Contact.jsx`
- Open `src/pages/Careers.jsx`
- Replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number (format: country code + number, e.g., `919876543210`)

### 2. YouTube Channel
- Open `src/components/Footer.jsx`
- Open `src/components/SocialButtons.jsx`
- Replace `YOUR_YOUTUBE_CHANNEL` with your actual YouTube channel URL or channel ID

### 3. Contact Information
- **Email**: Update in `src/pages/Contact.jsx` (line with `const email`)
- **Address**: Update in `src/pages/Contact.jsx` (line with `const address`)
- **Google Maps**: Update the iframe `src` URL in `src/pages/Contact.jsx` with your clinic's location

### 4. Careers Email
- Open `src/pages/Careers.jsx`
- Update the email address

### 5. Machine Photos (Optional)
- Create a `public/images/` folder
- Add photos of your machines (tens.jpg, ultrasound.jpg, etc.)
- Update image paths in `src/pages/Machines.jsx` if you add actual photos

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

## Features Overview

✅ Pain area selection with 3D exercise models  
✅ Interactive bone structure learning tool  
✅ Comprehensive machine showcase  
✅ Patient visit counter (wheel-shaped)  
✅ WhatsApp appointment booking  
✅ Pricing display with discounts  
✅ Patient testimonials  
✅ Contact page with Google Maps  
✅ Career opportunities page  
✅ Social media integration (WhatsApp & YouTube)  

## Design Features

- Clean, calm design with White + Light Blue + Green color scheme
- Mobile-first responsive design
- Large, readable fonts
- Smooth animations and transitions
