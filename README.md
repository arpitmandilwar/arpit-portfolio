# Arpit Mandilwar | Developer Portfolio

A responsive personal portfolio website for Arpit Mandilwar, a MERN Stack and Full Stack Developer.

**Live site:** _add your deployed URL here after deployment_

## Tech stack

- React (JavaScript) with Vite
- Tailwind CSS v4 (via the official `@tailwindcss/vite` plugin)
- react-icons
- No backend. This is a frontend-only application.

## Features

- Responsive layout for phones, tablets and desktops
- Sticky navigation with a collapsible mobile menu and active-section highlighting
- Sections: Hero, About, Skills, Experience, Projects, Education, Certifications, Achievements, Contact
- Content stored in a single data file, so it is easy to update
- Resume download with a safe fallback message if the file is missing
- Contact form with validation. It opens the visitor's email app using a `mailto:` link.
- Accessibility: semantic HTML, skip link, visible focus states, reduced-motion support

## Getting started

Requirements: Node.js (a current LTS version) and npm.

```bash
git clone https://github.com/arpitmandilwar/arpit-portfolio.git
cd arpit-portfolio
npm install
npm run dev
```

Then open the local address printed in the terminal (usually http://localhost:5173).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Project structure

```
arpit-portfolio/
├── public/
│   ├── images/
│   └── Arpit-Mandilwar-Resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/            (Badge, Reveal, SectionHeading, ProjectVisual, ResumeButton)
│   │   ├── Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Experience.jsx
│   │   ├── Projects.jsx, Education.jsx, Certifications.jsx
│   │   └── Achievements.jsx, Contact.jsx, Footer.jsx
│   ├── data/portfolioData.js
│   ├── hooks/useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Updating the content

Almost everything is edited in `src/data/portfolioData.js`:

- Personal details, GitHub and LinkedIn URLs
- Skills, experience, projects, education, certifications and achievements
- Project `github` and `live` URLs (a button appears only when a URL is set)
- Certification `verifyUrl` (a Verify button appears only when set)

## Resume

Place the PDF at `public/Arpit-Mandilwar-Resume.pdf`. Keep the filename the same, including capital letters.

## Contact form

The site has no backend, so the form opens the visitor's email app with the message pre-filled. To deliver messages without opening an email app, connect a hosted form service later. Use only public form IDs or keys in frontend code, never secret keys.

## Deployment

Build command: `npm run build`. Output directory: `dist`. Works on Vercel or Netlify.