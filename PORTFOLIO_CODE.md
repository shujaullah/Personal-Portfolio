# Portfolio Website Code

This is the complete code for Shujaullah Ahsan's professional portfolio website.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── navigation.tsx
│   │   │   └── sections/
│   │   │       ├── hero.tsx
│   │   │       ├── skills.tsx
│   │   │       ├── experience.tsx
│   │   │       ├── projects.tsx
│   │   │       ├── education.tsx
│   │   │       ├── achievements.tsx
│   │   │       └── contact.tsx
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   └── queryClient.ts
│   │   ├── hooks/
│   │   │   └── use-toast.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── attached_assets/
│   ├── Resume_Shuja_1750795062850.pdf
│   └── image_1750795230400.png
└── package.json
```

## Key Features

### Frontend Components

**Hero Section (`client/src/components/sections/hero.tsx`)**
- Professional photo display
- Contact information and social links
- Resume download functionality
- Gradient background with animation effects

**Skills Section (`client/src/components/sections/skills.tsx`)**
- Categorized skill display with icons
- Interactive skill bars for programming languages
- Technology badges for frameworks and tools
- Categories: Programming, Frameworks, Databases, Tools, Testing, Systems

**Experience Section (`client/src/components/sections/experience.tsx`)**
- Timeline-based work experience layout
- Current role at Medica Corporation highlighted
- Detailed responsibility lists with icons
- Professional imagery for each role

**Projects Section (`client/src/components/sections/projects.tsx`)**
- Featured project cards with images
- Technology stack badges with color coding
- GitHub and live demo links
- Projects: EasyLyte Application, Matched Platform, Java Compiler, JDBC Shop

**Education Section (`client/src/components/sections/education.tsx`)**
- Academic timeline from Associate to Masters
- Relevant coursework display
- Status indicators (In Progress, Completed, Foundation)
- Gradient styling for current degree

**Achievements Section (`client/src/components/sections/achievements.tsx`)**
- Awards and recognition display
- Icon-based achievement cards
- Year and institution information

**Contact Section (`client/src/components/sections/contact.tsx`)**
- Contact form with validation
- Social media links
- Location and email display
- Form submission handling

### Backend API

**Contact Form Handler (`server/routes.ts`)**
- Zod validation for form data
- Error handling and response formatting
- Resume download endpoint

**Storage Layer (`server/storage.ts`)**
- Interface-based storage design
- In-memory storage implementation
- User management capabilities

### Styling and Design

**CSS Configuration (`client/src/index.css`)**
- Custom CSS variables for consistent theming
- Navy blue primary color scheme
- Dark mode support
- Inter font family integration
- Utility classes for gradients and colors

**Tailwind Configuration (`tailwind.config.ts`)**
- shadcn/ui integration
- Custom color palette
- Animation support
- Typography plugin

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- Wouter for routing
- TanStack React Query for state management
- React Hook Form for form handling
- Lucide React for icons

### Backend
- Express.js with TypeScript
- Zod for validation
- Drizzle ORM (configured)
- PostgreSQL support

### Development Tools
- TypeScript throughout
- ESBuild for production builds
- Replit deployment configuration

## Setup Instructions

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

4. Start production server:
   ```bash
   npm run start
   ```

## Features Implemented

✓ Responsive design for all screen sizes
✓ Professional portfolio layout
✓ Interactive contact form
✓ Resume download functionality
✓ Smooth scrolling navigation
✓ SEO optimization
✓ Professional photography integration
✓ Skills visualization
✓ Project showcase
✓ Work experience timeline
✓ Educational background
✓ Achievement gallery
✓ Social media integration

## Additional Experience Integration

Based on the resume and user input, the following additional experiences have been incorporated:

- **Android Development**: Java 8 experience highlighted in skills section
- **Spring Framework**: Spring and Spring Boot prominently listed in frameworks
- **Risk Assessment**: Added to Testing & Documentation skills category
- **Documentation**: Software Requirements Documents (SRD), Software Design Documents (SDD), and Software Verification documents mentioned
- **Espresso Testing**: Included in testing capabilities section

## Complete File Listings

All source code files are available in the project structure above. The portfolio includes:
- Professional hero section with uploaded photo
- Interactive skills showcase with all mentioned technologies
- Timeline-based experience section highlighting current Medica Corporation role
- Project gallery featuring EasyLyte application and other key projects
- Educational background from Associate to Masters degree
- Achievement gallery with awards and recognition
- Functional contact form with backend validation

The portfolio is production-ready and optimized for professional presentation, showcasing comprehensive software engineering experience across multiple technologies and domains.