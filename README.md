# Avichal's Portfolio Website

A dynamic, space-themed portfolio website for Avichal Verma, showcasing his projects, skills, and experience in space technology and chemical engineering.

## Features

- **Dynamic Space Backgrounds**: Interactive animations that simulate celestial phenomena like stars, nebulas, and gravity lensing
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Detailed project cards with modal views for more information
- **Resume Integration**: Structured data from resume displayed throughout the site
- **Contact Information**: Easy access to contact details and social media profiles

## Tech Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **React Router**: For navigation between pages

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/geekdyout/avichal-portfolio-website.git
   cd avichal-portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment with Vercel

This project is configured for easy deployment with Vercel:

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/geekdyout/avichal-portfolio-website.git
   git push -u origin main
   ```

2. Deploy to Vercel:
   - Create an account on [Vercel](https://vercel.com/) if you don't have one
   - Click "New Project" and import your GitHub repository (geekdyout/avichal-portfolio-website)
   - Vercel will automatically detect React and configure the build settings
   - Click "Deploy"
   - Your site will be live in minutes at a `vercel.app` subdomain
   - You can add a custom domain in the project settings if desired

## Project Structure

```
avichal-portfolio-website/
├── public/               # Public assets
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── data/             # Data files (resume data)
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   ├── index.tsx         # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

### Resume Data

Update the resume information in `src/data/resumeData.ts` to reflect your own details.

### Theme Colors

Modify the color palette in `tailwind.config.js` to change the theme colors.

### Background Effects

Adjust the space animations in `StarBackground.tsx` and `Home.tsx` to create different space effects.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Space images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)