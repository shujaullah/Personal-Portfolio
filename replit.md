# Overview

This is a personal portfolio website for Shujaullah Ahsan, a Software Development Engineer and Data Science graduate student. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, designed to showcase professional experience, projects, skills, and educational background.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds
- **Component Style**: "New York" variant of shadcn/ui with neutral color scheme

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Request Handling**: RESTful API endpoints
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request/response logging middleware

## Database Architecture
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured but not actively used in current implementation)
- **Schema**: User authentication schema defined but using in-memory storage
- **Migration**: Drizzle Kit for schema management

# Key Components

## Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Hero Section**: Professional introduction with photo and social links
- **Skills Section**: Categorized technical skills with visual representation
- **Experience Section**: Timeline-based work experience display
- **Projects Section**: Featured project showcase with technology badges
- **Education Section**: Academic background with coursework details
- **Achievements Section**: Awards and recognition display
- **Contact Section**: Contact form with validation and submission handling

## Backend Services
- **Contact API**: Handles contact form submissions with Zod validation
- **File Serving**: Serves resume PDF from attached assets
- **Static Assets**: Serves frontend build files in production
- **Development Tools**: Vite middleware integration for hot reloading

## UI Components
- Comprehensive shadcn/ui component library including:
  - Form components (Input, Textarea, Button, Label)
  - Layout components (Card, Sheet, Dialog)
  - Feedback components (Toast, Alert)
  - Navigation components (Tabs, Accordion)

# Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack React Query
2. **API Processing**: Express server handles requests with validation
3. **Response Handling**: Structured JSON responses with error handling
4. **State Management**: React Query manages server state and caching
5. **UI Updates**: Components re-render based on query state changes

## Contact Form Flow
1. User fills out contact form
2. Client-side validation using react-hook-form
3. Form submission to `/api/contact` endpoint
4. Server-side validation using Zod schema
5. Success/error feedback via toast notifications

# External Dependencies

## Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Library**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Backend**: Express.js, connect-pg-simple for sessions
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Utilities**: date-fns, lucide-react icons, nanoid

## Development Dependencies
- **TypeScript**: Full TypeScript support across the stack
- **Build Tools**: Vite, esbuild for production builds
- **Development**: tsx for TypeScript execution, Replit plugins

# Deployment Strategy

## Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Features**: Hot reloading, error overlays, development middleware

## Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: esbuild bundles server to `dist/index.js`
- **Static Files**: Served from built frontend directory
- **Assets**: Resume and images served from `attached_assets`

## Replit Configuration
- **Modules**: Node.js 20, web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

# User Preferences

Preferred communication style: Simple, everyday language.

# Changelog

Changelog:
- June 24, 2025. Initial setup