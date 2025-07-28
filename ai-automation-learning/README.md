# 🤖 AI Automation Learning Platform

A modern, responsive frontend for an AI-powered software automation learning platform built with Next.js, TypeScript, and Firebase.

## ✨ Features

### 🎯 Core Functionality
- **Homepage with Hero Section** - Engaging landing page with animated gradient background
- **Course Categories & Filtering** - Advanced search and filter system with real-time results
- **Interactive Tutorial Pages** - Video content, written guides, quizzes, and live demos
- **User Dashboard** - Comprehensive learning analytics and progress tracking
- **Firebase Authentication** - Secure login with email/password and Google OAuth

### 🎨 Design & UX
- **Modern Blue Theme** - Primary: Dark Blue (#1E3A8A), Accent: Electric Blue (#00B4D8)
- **Clean Typography** - Inter for headings, Open Sans for body text
- **Mobile-First Design** - Fully responsive layouts with touch-friendly interactions
- **Dark Mode Support** - System-aware theme switching with smooth transitions
- **Subtle Animations** - Framer Motion powered micro-interactions for engagement

### 🔧 Interactive Elements
- **Knowledge Quizzes** - Interactive questions with instant feedback
- **Live Code Demos** - Browser-based IDE for trying automation scripts
- **Progress Tracking** - Visual progress bars and achievement system
- **Video Integration** - React Player with custom controls and timestamps

### ♿ Accessibility
- **ARIA Labels** - Screen reader support throughout the application
- **Keyboard Navigation** - Full keyboard accessibility for all interactive elements
- **High Contrast** - WCAG compliant color ratios in both light and dark modes
- **Focus Management** - Clear focus indicators and logical tab order

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Video Player**: React Player
- **Forms**: React Hook Form with Yup validation
- **Theme**: Next Themes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-automation-learning
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication with Email/Password and Google providers
   - Enable Firestore Database
   - Copy your Firebase configuration

4. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── courses/           # Course listing page
│   ├── dashboard/         # User dashboard
│   ├── login/            # Authentication page
│   ├── tutorials/        # Tutorial pages with video content
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
│   ├── header.tsx        # Navigation with auth integration
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Homepage hero
│   ├── features-section.tsx
│   ├── testimonials-section.tsx
│   └── theme-provider.tsx
├── contexts/             # React contexts
│   └── auth-context.tsx  # Firebase auth context
├── lib/                  # Utility functions
│   ├── firebase.ts      # Firebase configuration
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with animated background
- Features overview with interactive cards
- Student testimonials with ratings
- Call-to-action sections

### Course Catalog (`/courses`)
- Advanced filtering by difficulty, category, and duration
- Real-time search functionality
- Course cards with progress tracking
- Responsive grid layout

### Tutorial Page (`/tutorials/[slug]`)
- Video player with progress tracking
- Chapter navigation with completion status
- Interactive quizzes with instant feedback
- Live code demos and downloadable resources
- Table of contents sidebar

### User Dashboard (`/dashboard`)
- Learning analytics and progress visualization
- Course continuation suggestions
- Achievement system with rarities
- Weekly activity charts
- Profile management

## 🎨 Design System

### Colors
```css
/* Primary Colors */
--primary-600: #1E3A8A;  /* Dark Blue */
--accent-500: #00B4D8;   /* Electric Blue */
--neutral-50: #F5F5F5;   /* Light Gray */

/* Custom Gradients */
.bg-ai-gradient {
  background: linear-gradient(135deg, #1E3A8A 0%, #00B4D8 100%);
}
```

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: Open Sans (Google Fonts)
- **Font Weights**: 400, 500, 600, 700

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card` with consistent shadows and borders
- **Text**: `.text-gradient` for accent text

## 🔐 Authentication Flow

1. **User Registration/Login** - Firebase Auth with email/password or Google OAuth
2. **Profile Creation** - Automatic Firestore document creation
3. **Session Management** - Context-based auth state management
4. **Protected Routes** - Dashboard and tutorial progress require authentication
5. **Profile Updates** - Real-time sync with Firestore

## 📱 Mobile Responsiveness

- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Collapsible hamburger menu for mobile
- **Cards**: Stacked layout on small screens
- **Typography**: Responsive font sizes
- **Touch**: Touch-friendly button sizes (minimum 44px)

## ⚡ Performance Features

- **Next.js 15**: App Router with automatic code splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Static Generation**: Pre-rendered pages for better SEO
- **Bundle Optimization**: Tree shaking and minification
- **Font Optimization**: Google Fonts with display=swap

## 🧪 Development Features

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency checks
- **Tailwind CSS**: Utility-first styling with JIT compilation
- **Hot Reload**: Instant development feedback
- **Error Boundaries**: Graceful error handling

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npm run start
```

### Environment Variables
Make sure to set all Firebase environment variables in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email [support@example.com](mailto:support@example.com) or create an issue in the repository.

---

Built with ❤️ for the automation learning community
