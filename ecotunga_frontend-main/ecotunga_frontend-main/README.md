# Ecotunga Frontend

## Description
Ecotunga Frontend is a modern web application built with React that provides an intuitive interface for users to connect with local farmers, browse products, and manage their sustainable agriculture needs. The application features a responsive design, multi-language support, and real-time updates.

## Repository
[GitHub Repository]https://github.com/angeiradu/EcoTunfga_-Platform.git

## Tech Stack

- React 18
- React Router v6
- TailwindCSS
- i18next for internationalization
- Axios for API requests
- Heroicons & Lucide React for icons

## Environment Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecotunga.git
cd ecotunga_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
# API Configuration
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=false
REACT_APP_ENABLE_NOTIFICATIONS=true

# Third-party Services (if needed)
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ecotunga_frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   ├── layouts/        # Layout components
│   ├── locales/        # Translation files
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
└── package.json        # Project dependencies
```

## Designs

### Figma Mockups
[View Figma Design](https://www.figma.com/design/kpt0ILLjeMGhvAQOrBaDWX/EcoTunga?node-id=0-1&p=f&t=t295o4HrPA4C08Jw-0)

### Application Screenshots
![Signup](C:\Users\HP\Downloads\ecotunga\ecotunga_frontend-main\ecotunga_frontend-main\src\assets\screenshot\signup.jpg)
![Login](C:\Users\HP\Downloads\ecotunga\ecotunga_frontend-main\ecotunga_frontend-main\src\assets\screenshot\Login page.jpg)
![Dashboard](C:\Users\HP\Downloads\ecotunga\ecotunga_frontend-main\ecotunga_frontend-main\src\assets\screenshot\Login page.jpg)(C:\Users\HP\Downloads\ecotunga\ecotunga_frontend-main\ecotunga_frontend-main\src\assets\screenshot\dashboard2.jpg)


## Available Scripts

- `npm start`: Start the development server
- `npm run build`: Build the production bundle
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## Features

- Responsive design for all devices
- Multi-language support
- Real-time updates
- User authentication
- Product browsing and search
- Shopping cart functionality
- Order management
- User profile management

## Deployment Plan

### 1. Production Build
```bash
# Create production build
npm run build
```

### 2. Deployment Options
- **Static Hosting**: Deploy to services like:
  - Netlify
  - Vercel
  - AWS S3 + CloudFront
  - GitHub Pages

### 3. CI/CD Pipeline
- Set up automated testing
- Configure build and deployment workflows
- Implement staging environment



