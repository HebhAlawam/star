# STAR Animal Rescue Website

Modernized frontend for STAR (Syrian Team for Animal Rescue) website with professional UI/UX while maintaining RTL support and existing design identity.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
star/
├── resources/           # Source files
│   ├── js/             # JavaScript modules
│   ├── scss/           # SCSS modules
│   └── images/         # Source images
├── public/             # Static assets
├── dist/               # Build output (generated)
├── legacy/             # Old files (backup)
└── *.html              # HTML pages
```

## 🛠️ Tech Stack

- **Build Tool**: Vite 5
- **CSS Framework**: Bootstrap 5.3
- **Preprocessor**: Sass/SCSS
- **JavaScript**: ES6+ (jQuery temporarily)
- **Icons**: Font Awesome 6
- **Code Quality**: ESLint + Prettier

## 📚 Documentation

- [Frontend Setup Guide](./FRONTEND_SETUP.md) - How to run dev/build
- [UI Design Tokens](./UI_TOKENS.md) - Design system documentation
- [Changelog](./CHANGELOG.md) - What changed and why
- [Acceptance Checklist](./ACCEPTANCE_CHECKLIST.md) - Testing criteria

## ✨ Features

- ✅ Modern build system (Vite)
- ✅ Professional design system (8px grid, design tokens)
- ✅ Improved typography hierarchy
- ✅ Accessible components (WCAG AA compliant)
- ✅ Perfect RTL support
- ✅ Responsive design (mobile-first)
- ✅ Optimized performance (code splitting, tree-shaking)

## 🎨 Design Principles

- **Consistency**: 8px grid system, consistent spacing
- **Accessibility**: WCAG AA standards, keyboard navigation
- **Performance**: Optimized bundles, lazy loading
- **Maintainability**: Modular SCSS, clean code structure

## 📝 Development

```bash
# Development server with HMR
npm run dev

# Lint code
npm run lint
npm run lint:fix

# Format code
npm run format
npm run format:check

# Build production
npm run build
npm run preview
```

## 🔄 Migration Status

- [x] Phase 1: Build & Tooling
- [x] Phase 2: UI Professional Polish
- [ ] Phase 3: CSS Refactor
- [ ] Phase 4: Performance Cleanup

## 📖 License

Internal project for STAR Animal Rescue organization.

