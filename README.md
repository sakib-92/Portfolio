# Sakib Sayyed — AI/ML Engineer Portfolio Website

A visually striking, responsive single-page portfolio website built for an AI/ML Engineer. Features a cinematic dark studio lighting theme (red & purple rim accents, vibrant orange highlight color), oversized display typography, custom interactive 3D neural network canvas, 3D tilt project cards, custom animated cursor, and Framer Motion scroll reveals.

---

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [React Three Fiber](https://r3f.docs.pmnd.rs/) + [Drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Local Development Setup

Follow these steps to run the application locally on your machine:

1. **Clone or navigate to the repository directory**:
   ```bash
   cd "Portfolio Website"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build

To build the static assets for production deployment:

```bash
npm run build
```

The optimized static files will be compiled into the `dist/` directory.

To preview the built production app locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guide (One-Click Hosting)

### 1. Deploying to Vercel (Recommended)
1. Push your repository to **GitHub**.
2. Log into [Vercel](https://vercel.com/) and click **"Add New" > "Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and host your portfolio with an SSL URL.

### 2. Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com/) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

### 3. Deploying to GitHub Pages
1. In `vite.config.js`, ensure `base: './'` is configured (already enabled).
2. Install `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
3. Add deploy script in `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run build && npm run deploy
   ```

---

## 👤 Author

**Sakib Sayyed**  
AI/ML Engineer | Pune, India  
- Email: [engsakib92@gmail.com](mailto:engsakib92@gmail.com)
- LinkedIn: [linkedin.com/in/sakibali-sayyed](https://linkedin.com/in/sakibali-sayyed/)
- Phone: +91-9156793756
