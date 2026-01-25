# Robertson SDA Website

A React + Vite project for the Robertson SDA church website with Tailwind CSS styling and custom animations.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RobertsonSDA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To build the project for production:

```bash
npm run build
```

The optimized build output will be in the `dist/` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Linting

To check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   └── Dropdown.jsx
├── pages/            # Page components
│   ├── Home.jsx
│   └── Navbar.jsx
├── assets/           # Static assets
├── style.css        # Global styles with Tailwind
└── main.jsx         # React entry point
```

## Technology Stack

- **React** - UI library
- **Vite** - Build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **React Compiler** - Performance optimizations (enabled by default)
- **ESLint** - Code quality tool

## Features

- Custom fade-in/fade-out animations defined in [src/style.css](src/style.css)
- Dropdown menu component in [src/components/Dropdown.jsx](src/components/Dropdown.jsx)
- Responsive navbar in [src/pages/Navbar.jsx](src/pages/Navbar.jsx)
- Tailwind CSS with custom theme configuration

## Notes

- The React Compiler is enabled by default, which may impact Vite dev & build performance. See the [React Compiler documentation](https://react.dev/learn/react-compiler) for details.
- For production applications, consider migrating to TypeScript with type-aware lint rules.