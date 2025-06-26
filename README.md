# Shujaullah Ahsan - Portfolio Website

A professional portfolio website showcasing software development experience, projects, and skills.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation & Setup

1. **Download and Extract**
   - Download the project folder
   - Extract it to your desired location
   - Open terminal/command prompt in the project folder

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The website will be available at: `http://localhost:5000`

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot reloading. The site will automatically refresh when you make changes.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Production Server
```bash
npm run start
```
Starts the production server (run `npm run build` first).

## Project Structure

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
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Professional Layout**: Clean, modern design with smooth animations
- **Interactive Sections**: Skills visualization, project showcase, contact form
- **Resume Download**: Direct PDF download functionality
- **Contact Form**: Working contact form with validation
- **SEO Optimized**: Meta tags and structured data

## Customization

### Updating Content

1. **Personal Information**: Edit `client/src/components/sections/hero.tsx`
2. **Skills**: Modify `client/src/components/sections/skills.tsx`
3. **Work Experience**: Update `client/src/components/sections/experience.tsx`
4. **Projects**: Edit `client/src/components/sections/projects.tsx`
5. **Education**: Modify `client/src/components/sections/education.tsx`

### Replacing Assets

1. **Profile Photo**: Replace `attached_assets/image_1750795230400.png`
2. **Resume PDF**: Replace `attached_assets/Resume_Shuja_1750795062850.pdf`

### Styling Changes

- **Colors**: Edit CSS variables in `client/src/index.css`
- **Fonts**: Update font imports in `client/index.html`
- **Layout**: Modify Tailwind classes in component files

## Deployment Options

### Option 1: Replit (Recommended)
- Upload the project folder to Replit
- Replit will automatically detect and run the project
- Use the deployment feature for production hosting

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 3: Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings: Build command `npm run build`, Publish directory `dist`

### Option 4: Traditional Hosting
1. Run `npm run build`
2. Upload the contents of `dist/` folder to your web server
3. Ensure your server can serve static files and handle API routes

## Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill processes using port 5000
npx kill-port 5000
```

**2. Dependencies Not Installing**
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**3. Build Errors**
```bash
# Check Node.js version (should be 18+)
node --version

# Update dependencies
npm update
```

**4. Hot Reloading Not Working**
- Ensure you're running `npm run dev` (not `npm start`)
- Check that port 5000 isn't blocked by firewall
- Try restarting the development server

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility
4. Check file permissions in the project directory

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod
- **Deployment**: Replit, Vercel, Netlify compatible

## Contact

For questions or support regarding this portfolio:
- Email: ahsanshuja1127@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Note**: This portfolio is production-ready and optimized for professional use. The code is clean, well-documented, and follows modern web development best practices.