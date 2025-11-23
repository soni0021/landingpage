# AMRC-SAT Landing Page

A modern, conversion-optimized landing page for AMRC-SAT (Anand Mani Residential Coaching Selection-cum-Admission Test) built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- 📱 **Mobile-First**: Fully responsive across all devices
- ⚡ **Fast Performance**: Optimized for speed and user experience
- 🎯 **Conversion-Focused**: Clear CTAs and user-friendly registration form
- ✨ **Smooth Animations**: Framer Motion for engaging interactions
- 🎨 **Professional Design**: Based on best practices from top coaching institutes

## Sections

1. **Hero Section**: Eye-catching headline with key statistics
2. **Target Audience**: Information for 9th-12th grade and dropper students
3. **Lowest Fee Promotion**: Highlighting the best fee offer
4. **Registration Form**: Complete form with OTP verification
5. **Benefits**: Six key benefits of joining through AMRC-SAT
6. **Test Information**: Test dates, time slots, instructions, syllabus, and sample papers
7. **Past Records**: Showcasing 28% selection rate and achievements
8. **Footer**: Contact information and quick links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Database Setup:
   - The database connection string is already configured in `lib/db.ts`
   - The database tables will be automatically created on first API call
   - Alternatively, you can manually initialize by visiting: `http://localhost:3000/api/init-db`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library
- **PostgreSQL (Neon)**: Database for storing registrations
- **pg**: PostgreSQL client for Node.js

## Project Structure

```
landingpage/
├── app/
│   ├── api/
│   │   ├── register/route.ts    # Registration API endpoint
│   │   ├── otp/route.ts         # OTP generation endpoint
│   │   └── init-db/route.ts     # Database initialization
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page
│   └── globals.css              # Global styles
├── components/
│   ├── Hero.tsx
│   ├── RegistrationForm.tsx
│   ├── Benefits.tsx
│   ├── TestInfo.tsx
│   ├── PastRecords.tsx
│   ├── TargetAudience.tsx
│   ├── LowestFee.tsx
│   └── Footer.tsx
├── lib/
│   ├── db.ts                    # Database connection
│   └── init-db.ts               # Database schema initialization
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Content

All content can be easily modified in the respective component files.

## Features Implemented

✅ Responsive design for all screen sizes
✅ Smooth scroll animations
✅ Interactive registration form
✅ OTP verification flow (dummy implementation - ready for SMS API integration)
✅ Database integration with Neon PostgreSQL
✅ Form data persistence
✅ Test date and time slot selection
✅ Mobile-optimized UI
✅ Fast loading times
✅ SEO-friendly structure

## Database

The application uses **Neon PostgreSQL** database to store:
- Registration data (mobile, name, email, DOB, test preferences, etc.)
- OTP verification records

### Database Tables

1. **registrations**: Stores all registration form submissions
2. **otp_verifications**: Tracks OTP codes for mobile verification

### OTP Implementation

Currently using a **dummy OTP system** for development:
- OTP is generated and stored in the database
- OTP is returned in API response (for development only)
- OTP expires after 10 minutes
- Ready to integrate with SMS service API (just replace the OTP sending logic in `app/api/otp/route.ts`)

### Integrating Real SMS API

When you have the SMS API ready:
1. Update `app/api/otp/route.ts`
2. Replace the console.log with your SMS API call
3. Remove the `otp` field from the API response
4. Remove the development OTP display from `RegistrationForm.tsx`

## Contact Information

- **Offline Batch**: 9007002666
- **Online Batch & Books**: 08042303689
- **General**: 7303088746
- **Email**: support@anandmani.in

## License

This project is created for AMRC-SAT registration purposes.

# landingpage
