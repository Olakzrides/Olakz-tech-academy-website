# Olakz Tech Academy Website

A modern, fully responsive website for Olakz Tech Academy - Nigeria's leading tech training institution.

## 🎯 Overview

This is a complete Next.js 16 website featuring:
- 13 comprehensive tech courses
- Online admissions system
- Success stories showcase
- Contact forms
- Responsive design for all devices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## 📄 Pages

### Main Pages
- **Homepage** (`/`) - Hero, featured courses, testimonials, stats
- **Courses** (`/courses`) - All 13 courses with filtering
- **Individual Courses** (`/courses/[slug]`) - Detailed course pages with curriculum
- **Admissions** (`/admissions`) - Enrollment form and intake dates
- **About** (`/about`) - Our story, mission, values
- **Success Stories** (`/success-stories`) - Graduate testimonials
- **Contact** (`/contact`) - Contact form and information

### Legal Pages
- **Privacy Policy** (`/privacy`)
- **Terms of Service** (`/terms`)

## 💻 All 13 Courses

1. Full Stack Development - ₦500,000 (Most Popular)
2. Cybersecurity - ₦450,000 (High Demand)
3. Python Programming - ₦350,000
4. Data Analysis - ₦300,000
5. Frontend Development - ₦300,000
6. Backend Development - ₦300,000
7. Digital Marketing - ₦250,000
8. Social Media Management - ₦250,000
9. Cinematography & Video Editing - ₦250,000
10. Product Design - ₦200,000
11. Graphic Design & Branding - ₦200,000
12. Product Management - ₦200,000
13. Computer Literacy - ₦100,000 (Best for Beginners)

## ✨ Key Features

### Design
- Modern, professional UI/UX
- Fully responsive (mobile, tablet, desktop)
- Custom color scheme (Blue theme)
- Smooth animations and transitions
- Hover effects on interactive elements

### Functionality
- Course filtering by category
- Interactive application forms
- Form validation
- Success messages
- WhatsApp integration (floating button)
- Newsletter signup
- Mobile-friendly navigation

### Content
- Detailed 12-week curriculum (Full Stack Development)
- Career outcomes for each course
- FAQ sections
- Payment options (Full & Installment)
- Class schedule information
- Success stories with salary transformations

## 🎨 Design System

### Colors
- Primary Blue: `#0066FF`
- Secondary Blue: `#0052CC`
- Dark Blue: `#003D99`
- Light Blue: `#E6F2FF`
- Text Dark: `#1A1A1A`
- Text Gray: `#666666`
- Gray Light: `#F5F5F5`

### Typography
- Headings: Poppins (Bold)
- Body: Inter (Regular)

## 📱 Contact Information

- **Phone:** +234 814 876 1419
- **WhatsApp:** +234 814 876 1419
- **Email:** johnenenche56@gmail.com
- **Location:** Ikorodu, Lagos, Nigeria

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Inter, Poppins (Google Fonts)

## 📂 Project Structure

```
olakz-tech-academy/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── courses/
│   │   ├── page.tsx               # Courses listing
│   │   └── [slug]/page.tsx        # Individual course pages
│   ├── admissions/page.tsx        # Admissions page
│   ├── about/page.tsx             # About page
│   ├── success-stories/page.tsx   # Success stories
│   ├── contact/page.tsx           # Contact page
│   ├── privacy/page.tsx           # Privacy policy
│   └── terms/page.tsx             # Terms of service
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Footer.tsx             # Footer with newsletter
│   │   └── WhatsAppButton.tsx     # Floating WhatsApp button
│   └── home/
│       ├── Hero.tsx               # Hero section
│       ├── FeaturedCourses.tsx    # Featured courses
│       ├── WhyChooseUs.tsx        # Why choose us
│       ├── HowItWorks.tsx         # How it works
│       ├── Testimonials.tsx       # Testimonials
│       ├── Stats.tsx              # Stats section
│       └── FinalCTA.tsx           # Final CTA
├── lib/
│   └── coursesData.ts             # Course data
└── tailwind.config.ts             # Tailwind configuration
```

## 🎓 Course Features

Each course page includes:
- Course overview and highlights
- What you'll learn (topics)
- 12-week curriculum (detailed for Full Stack)
- Career opportunities
- Average salary range
- Payment options (Full & Installment)
- FAQ section
- Prerequisites
- Multiple CTAs

## 📋 Admissions Process

1. **Choose Your Course** - Browse 13 courses
2. **Fill Application Form** - Complete online form
3. **Make Payment** - Full or 50% installment
4. **Receive Confirmation** - Email with schedule

### Intake Dates
- March 2026 Cohort (Open - 12 spots)
- June 2026 Cohort (Early Registration - 25 spots)
- September 2026 Cohort (Coming Soon)

## 💳 Payment Options

### Full Payment
- Immediate enrollment
- All course materials
- Priority placement

### Installment Plan (Most Popular)
- 50% upfront
- 50% before week 7
- No extra fees or interest

### Payment Methods
- Bank Transfer
- Card Payment
- USSD
- Mobile Money

## 📅 Class Schedule

- **Monday - Wednesday:** 9:00 AM - 4:00 PM (Physical classes in Lagos)
- **Thursday - Friday:** Work from home (Assignments & projects)
- **Saturday - Sunday:** Rest & personal time

## 🎯 What's Included

- 12 weeks of intensive training
- All course materials and resources
- Hands-on projects and assignments
- Industry-recognized certificate
- 3-month internship opportunity
- Job placement support
- Access to alumni network

## 📊 Our Impact

- **500+** Students Graduated
- **85%** Job Placement Rate
- **13** Tech Programs
- **50+** Hiring Partners
- **100%** Get Internships
- **₦15M+** Collective Salary Increase

## 🌟 Success Stories

Our graduates have achieved:
- Up to 483% salary increases
- Transitions from unemployment to employment
- Career changes from non-tech to tech roles
- Average starting salary: ₦250,000+

## 📞 Support

For questions or support:
- Visit the Contact page
- WhatsApp: +234 814 876 1419
- Email: johnenenche56@gmail.com

## 🚀 Deployment

The website is ready for production deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting

## 📝 License

© 2026 Olakz Tech Academy. All rights reserved.

---

**Built with ❤️ using Next.js 16 and Tailwind CSS**
