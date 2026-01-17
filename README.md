# Advanced Econometrics Learning Plan

Refresher coursework checklist for advanced econometrics with Python, spatial analysis, and causal inference.

## Features

- ✅ Interactive checklist with progress tracking
- 💾 Automatic progress saving (localStorage)
- 📊 Visual progress indicator
- 🔗 Direct links to all course materials
- 📱 Mobile-responsive design
- 🎨 Beautiful, modern UI

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to Render.com

### Option 1: Deploy from GitHub

1. Push this code to a GitHub repository
2. Go to [Render.com](https://render.com)
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Name**: econometrics-learning-plan
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"

### Option 2: Deploy with Render Blueprint

1. Create a `render.yaml` file (see below)
2. Push to GitHub
3. Connect to Render using the Blueprint

### render.yaml
```yaml
services:
  - type: web
    name: econometrics-learning-plan
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
```

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **LocalStorage** - Progress persistence

## Learning Plan Overview

### Phase 1: Math Foundation (8 weeks)
- Single-variable & Multivariable Calculus
- Linear Algebra
- Matrix Calculus

### Phase 2: Foundation Econometrics (2 months)
- Core econometric theory
- Python for econometrics
- First causal inference project

### Phase 3: Advanced Econometrics (3 months)
- Graduate-level econometrics
- Time series and panel data
- Advanced projects

### Phase 4: Spatial Econometrics (2 months)
- PySAL and spatial analysis
- GIS + econometrics integration
- Spatial regression models

### Phase 5: Advanced Topics (Ongoing)
- Dynamic optimization
- Specialized econometric methods
- Capstone research project

## Estimated Timeline

- **Minimum**: 8 months (15 hrs/week)
- **Realistic**: 10-12 months (12-15 hrs/week)
- **Part-time**: 15-18 months (8-10 hrs/week)

## License

MIT License - feel free to use and modify for your learning journey!
