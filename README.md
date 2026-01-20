# Portfolio Website

Your personalized interior architecture portfolio with grayscale-to-color reveal effect.

## Quick Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project" → "Upload"
3. Drag this entire folder
4. Click "Deploy"
5. Your site will be live in ~2 minutes!

## Project Structure

```
portfolio-site/
├── package.json
├── public/
│   ├── index.html
│   └── images/
│       ├── office-chaos.png
│       ├── platform.png
│       ├── morico-moodboard.png
│       ├── morico-menu.png
│       ├── punkraft-menu.png
│       ├── punkraft-drinks.png
│       ├── punkraft-moodboard.png
│       ├── punkraft-diagrams.png
│       ├── ai-chair.png
│       └── ai-building.png
└── src/
    ├── App.js
    └── index.js
```

## Features

- Grayscale images on homepage → Full color on click
- Custom cursor with "View" indicator
- Smooth scroll animations
- Responsive design (desktop, tablet, mobile)
- Project descriptions from your notes

## Customization

Edit `src/App.js` to change:
- Project titles and descriptions
- Your name in header/footer
- Add/remove projects
- Adjust colors and fonts

---

Built with React
