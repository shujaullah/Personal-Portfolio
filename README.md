# Shujaullah Ahsan - Professional Portfolio

A modern, responsive portfolio website showcasing software development experience, projects, and skills.

## 🌐 Live Demo

Visit the live portfolio: [https://shujaullah.github.io/ProfessionalPortfolio/](https://shujaullah.github.io/ProfessionalPortfolio/)

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Sections** - Skills visualization, project showcase, contact form
- **Resume Download** - Direct PDF download functionality
- **Contact Form** - Working contact form with email notifications
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Technology Stack

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
- Nodemailer for email functionality
- Zod for validation

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shujaullah/ProfessionalPortfolio.git
   cd ProfessionalPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The website will be available at: `http://localhost:5000`

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment
1. Build the project: `npm run build`
2. The built files will be in the `dist/` folder
3. Deploy the contents of `dist/` to your hosting provider

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (hero, skills, etc.)
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                # Shared types and schemas
├── attached_assets/       # Resume PDF and images
├── .github/workflows/     # GitHub Actions deployment
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Customization

### Updating Content
1. **Personal Information**: Edit `client/src/components/sections/hero.tsx`
2. **Skills**: Modify `client/src/components/sections/skills.tsx`
3. **Work Experience**: Update `client/src/components/sections/experience.tsx`
4. **Projects**: Edit `client/src/components/sections/projects.tsx`
5. **Education**: Modify `client/src/components/sections/education.tsx`

### Replacing Assets
1. **Profile Photo**: Replace `attached_assets/image_1750795230400.png`
2. **Resume PDF**: Replace `attached_assets/Resume_Shuja_1750795062850.pdf`

## 📧 Contact Form

The contact form is fully functional and sends emails to the configured email address. The backend uses Nodemailer with Gmail SMTP for email delivery.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Shujaullah Ahsan**