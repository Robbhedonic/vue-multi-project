# Vue Multi Project

A full-stack web application with a Vue.js frontend and Express.js backend.

## Project Structure

```
vue-multi-project/
├── frontend/          # Vue.js frontend application
│   ├── src/          # Source files
│   ├── public/       # Static assets
│   └── dist/         # Build output (generated)
└── backend/          # Express.js backend API
```

## Features

- **Frontend**: Vue 3 application built with Vue CLI
- **Backend**: Express.js REST API
- **Deployment**: Automated GitHub Pages deployment via GitHub Actions

## Prerequisites

- Node.js 18+ 
- npm

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run serve    # Development server
npm run build    # Production build
```

### Backend Setup

```bash
cd backend
npm install
node server.js   # Start backend server
```

## Development

### Frontend Development

The frontend runs on `http://localhost:8080` by default (when using `npm run serve`).

### Backend Development

The backend API runs on `http://localhost:3000` by default.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Configuration

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically build and deploy on every push to `main` branch

### Deployment URL

Once deployed, your site will be available at:
```
https://robbhedonic.github.io/vue-multi-project/
```

## GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Installs Node.js and dependencies
2. Builds the Vue.js application
3. Deploys to GitHub Pages automatically

## Technologies Used

- **Frontend**: Vue 3, Vue CLI, ESLint
- **Backend**: Express.js, SQLite3, CORS
- **Build Tool**: Vue CLI Service
- **Deployment**: GitHub Actions, GitHub Pages

## License

ISC
