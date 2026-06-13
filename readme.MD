# 🏋️‍♂️ BeStrong Gym - Responsive React JS Website

Welcome to the **BeStrong Gym** website repository! This is a modern, premium, and fully responsive website designed for fitness clubs, gyms, and personal trainers. Built using **React JS** and **Vanilla CSS**, this application features a sleek dark mode aesthetic, smooth micro-animations, and interactive tools to provide an elite user experience across all devices.

---

## ✨ Features

- **📱 Fully Responsive Design**: Seamlessly optimized for mobile, tablet, and desktop screens.
- **⚡ Interactive BMI Calculator**: An on-page tool that allows users to instantly calculate their Body Mass Index and receive immediate health/training advice.
- **📋 Membership Pricing Plans**: Sleek pricing tiers (Basic, Premium, Elite) with detailed feature comparisons and Monthly/Annual billing period togglers.
- **💪 Dynamic Programs Section**: Display gym programs with interactive hover effects and fully detailed popup program specifications overlay.
- **👥 Meet the 6 Elite Trainers**: Section highlighting 6 certified professional coaches, their athletic bios, specialties, experience, and custom training request links.
- **🖼️ Interactive Photo Gallery**: Showcase of gym facilities, top-tier equipments, and real member transformations with category buttons and fullscreen blurred lightbox cycling.
- **💬 Testimonials Slider**: Interactive sliding cards showing success stories and feedback from gym members.
- **✉️ Contact & Enrollment Form**: A fully styled contact form with real-time field validation for new member inquiries.
- **💬 WhatsApp Business Integration**: Seamless customer routing. Submitting the scheduling form or support enquiries compiles the structured user data and opens a pre-filled direct chat to `+91 8263919311`, coupled with a floating WhatsApp action badge.
- **🎨 Modern Aesthetics**: Utilizing high-contrast dark themes, vibrant gradients, glassmorphism, and custom typography.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React.js](https://react.dev/) (Hooks, Functional Components)
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid, Glassmorphism)
- **Animations**: CSS Keyframes & [Framer Motion](https://www.framer.com/motion/) (optional/pre-configured)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Outfit & Inter)

---

## 🎨 Brand Design & Theme Colors

The website's visual identity is built around the **Be Strong Fitness Club** brand logo, utilizing an energetic athletic color scheme designed to drive focus, strength, and membership conversion.

| Accent / Color | HEX Code | CSS Variable | Primary Application |
| :--- | :--- | :--- | :--- |
| **Vibrant Athletic Orange** | `#E57C00` | `--color-primary` | Call-To-Action buttons, active nav elements, borders, hero accents, icons |
| **Deep Charcoal Black** | `#0C0C0E` | `--color-bg` | Main application background, core container layout |
| **Medium Charcoal** | `#151518` | `--color-bg-light` | Alternate section background, cards, card hover highlight, inputs |
| **High-Contrast White** | `#FFFFFF` | `--color-text-white` | Primary headings, button typography, high-priority info |

### How to use the Theme
We have created a modular, production-ready theme system in [theme.css](file:///d:/Desktop/BESTRONG%20GYM/theme.css) that provides custom CSS properties and utility classes. 

To apply it globally in your React project, import it inside your React entry point (`src/main.jsx` or `src/App.jsx`):
```javascript
import './theme.css';
```

---

## 📂 Project Structure

Here is a breakdown of the standard structure for this React application:

```text
BESTRONG GYM/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/             # Images, videos, and icons
│   ├── components/         # Reusable UI components
│   │   ├── Navbar/         # Responsive navigation bar
│   │   ├── Hero/           # Catchy landing section with CTAs
│   │   ├── Programs/       # Gym programs list
│   │   ├── About/          # Gym features & ethos
│   │   ├── Calculator/     # BMI calculator component
│   │   ├── Pricing/        # Membership plans
│   │   ├── Testimonials/   # User reviews carousel
│   │   ├── Contact/        # Contact form & location info
│   │   └── Footer/         # Footer with links & newsletter
│   ├── App.css             # Global styling & design system
│   ├── App.jsx             # Main app container
│   ├── index.css           # CSS Reset & Base styles
│   └── main.jsx            # React entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 16.x or higher is recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bestrong-gym.git
   cd bestrong-gym
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the website.

---

## 📦 Production Build

To build the application for production, run:

```bash
npm run build
```

This compiles and optimizes your React code into static assets inside the `dist` (or `build`) folder, ready to be deployed to hosting platforms like Netlify, Vercel, or GitHub Pages.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
"# BEstronggym" 
