# Aarogya Physiotherapy Center Website

A comprehensive, modern website for Aarogya Physiotherapy Center featuring interactive 3D exercise models, anatomy learning tools, and clinic information.

## Features

### 1. Pain Area Selection & Exercises
- Interactive selection of pain areas (Neck, Back, Shoulder, Knee, etc.)
- 3D rotatable models showing exercise movements
- Detailed exercise instructions for each pain area
- Built with React Three Fiber for smooth 3D interactions

### 2. Bone Structure Learning
- Interactive anatomy learning tool for medical students
- Click on bones and muscles to learn about them
- Detailed descriptions, functions, and physiotherapy relevance
- Covers major bones and muscles

### 3. Clinic Machines Showcase
- Comprehensive list of all available machines:
  - TENS (Transcutaneous Electrical Nerve Stimulation)
  - Ultrasound Therapy (US)
  - IFT (Interferential Therapy)
  - Wax Bath Therapy
  - Lumbar & Cervical Traction
  - SWD (Short Wave Diathermy)
  - Laser Therapy
  - Muscle Stimulator
  - Dry Cupping Therapy
  - Manual Exercise Equipment
  - CPM (Continuous Passive Motion)
  - Ultrasonic Therapy
- Each machine includes description and common uses

### 4. Patient Visit Counter
- Wheel-shaped counter in bottom left corner
- Tracks unique visits using localStorage
- Visual wheel rotation animation

### 5. Appointment Booking
- User-friendly booking form
- Direct WhatsApp integration
- Sends formatted message with appointment details
- Includes date, time, and patient information

### 6. Pricing Information
- Clear pricing display: ₹300 (40% off from ₹500)
- Strikethrough original price
- Free consultation highlighted
- "Consult Today" call-to-action

### 7. Patient Testimonials
- Stories from satisfied patients
- Rating system
- Condition-specific feedback

### 8. Contact Page
- Google Maps integration
- Contact information (email, address)
- Working hours
- Direct WhatsApp link

### 9. Career Opportunities
- Current job openings
- Detailed job descriptions
- Application process
- Future opportunities section

### 10. Social Media Integration
- Fixed WhatsApp button (bottom right)
- YouTube channel link
- Social links in footer

## Design

- **Colors**: White + Light Blue + Green
- **Style**: Clean, calm, professional
- **Typography**: Large, readable fonts
- **Responsive**: Mobile-first design (optimized for 80% mobile users)

## Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **React Three Fiber** - 3D graphics
- **Three.js** - 3D library
- **Vite** - Build tool
- **CSS3** - Styling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Configuration

### Important: Update These Values

Before deploying, update the following in the codebase:

1. **WhatsApp Number**: 
   - Search for `YOUR_WHATSAPP_NUMBER` and replace with your actual WhatsApp number (format: country code + number, e.g., `919876543210`)

2. **YouTube Channel**: 
   - Search for `YOUR_YOUTUBE_CHANNEL` and replace with your actual YouTube channel URL or channel ID

3. **Email Addresses**:
   - Contact email in `src/pages/Contact.jsx`
   - Careers email in `src/pages/Careers.jsx`

4. **Address**:
   - Update clinic address in `src/pages/Contact.jsx`

5. **Google Maps Embed**:
   - Replace the Google Maps iframe URL in `src/pages/Contact.jsx` with your actual clinic location coordinates

6. **Machine Images**:
   - Add actual machine photos in a `/public/images/` folder
   - Update image paths in `src/pages/Machines.jsx`

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── VisitCounter.jsx
│   ├── SocialButtons.jsx
│   ├── Pricing.jsx
│   ├── AppointmentForm.jsx
│   ├── Testimonials.jsx
│   └── ExerciseModel.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Exercises.jsx
│   ├── BoneStructure.jsx
│   ├── Machines.jsx
│   ├── Contact.jsx
│   └── Careers.jsx
├── styles/          # CSS files
│   └── ...
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Aarogya Physiotherapy Center. All rights reserved.
