#  FloraVision - Premium Plant Collection

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

FloraVision is a sophisticated, high-performance frontend landing page for a premium plant e-commerce brand. Designed with modern aesthetics and smooth interactions, it provides a seamless user experience for discovering and exploring indoor and outdoor plants.

[**Explore the Live Demo »**](https://flora-vision.onrender.com)

---

##  Project Description

FloraVision is built to showcase a premium collection of plants, emphasizing their aesthetic value and environmental benefits. The application features a dynamic design with glassmorphism effects, smooth scroll animations, and a responsive layout that adapts to all devices.

##  Features

- **Modern UI/UX**: Premium design with glassmorphism and deep green color palettes.
- **Dynamic Hero Section**: Shared background across home and trending sections for visual continuity.
- **Interactive Trending Section**: Showcases the most popular plants with hover effects.
- **O2 Plant Highlights**: Dedicated section for oxygen-producing plants with specialized pagination.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile views.
- **Framer Motion Animations**: Smooth entry and interaction animations for a premium feel.
- **Glass Panel Components**: Beautifully styled review and featured product cards.

##  Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS (Custom Tokens & Design System)
- **Animations**: Framer Motion
- **Icons**: React Icons (Hi, Fa, Hi2)
- **Deployment**: Render

##  Folder Structure

```text
FloraVision/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Optimized plant and avatar images
│   ├── components/      # Reusable UI components
│   ├── data/            # Mock product data
│   ├── pages/           # Main page views
│   ├── App.jsx          # Root component
│   ├── index.css        # Global styles & theme variables
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

##  Installation Instructions

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ragunathsuresh/FloraVision..git
   ```
2. **Navigate to the project directory**
   ```bash
   cd Flora-Vision
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```

##  Running the Project Locally

Run the following command to start the development server:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```
The output will be generated in the `dist` folder.

## 🌍 Deployment on Render

This project is optimized for deployment on **Render** as a Static Site.

### Step-by-Step Deployment:
1. **Push your code**: Ensure your latest changes are pushed to your GitHub repository.
2. **Create New Static Site**: On your Render Dashboard, click **New +** and select **Static Site**.
3. **Connect Repository**: Connect your GitHub account and select the `Flora-Vision` repository.
4. **Configure Build Settings**:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. **Deploy**: Click **Create Static Site**. Render will build and deploy your application automatically.

##  Environment Variables

If you need to add custom environment variables (e.g., API keys), create a `.env` file in the root directory.
> [!IMPORTANT]
> Since this project uses Vite, all environment variables must be prefixed with `VITE_` (e.g., `VITE_API_KEY`).




##  Contributing Guidelines

Contributions are welcome! If you'd like to improve the project:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

##  License

Distributed under the MIT License. See `LICENSE` for more information.

##  Author Information

**Ragu**
- GitHub: [@ragunathsuresh](https://github.com/ragunathsuresh)
- Email: ragusuresh291@gmail.com

---
*Frontend deployed and hosted with on Render.*
