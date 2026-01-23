# Frontend Setup Guide

## Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will start Vite dev server on `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in `dist/` directory

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
star/
├── resources/
│   ├── js/
│   │   ├── app.js              # Main JS entry point
│   │   ├── bootstrap.js        # jQuery/bootstrap bridge
│   │   ├── modules/            # ES6 modules (Phase 3+)
│   │   └── vendor/             # Wrapped plugins (Phase 3+)
│   ├── scss/
│   │   ├── app.scss            # Main SCSS entry point
│   │   ├── _tokens.scss        # Design tokens
│   │   ├── base/               # Reset, typography, RTL
│   │   ├── components/         # Reusable components
│   │   ├── layout/             # Header, footer, navigation
│   │   ├── pages/              # Page-specific styles
│   │   ├── themes/             # Theme variants
│   │   └── utilities/          # Helper classes
│   └── images/                 # Source images
├── public/                     # Static assets (images, fonts)
├── dist/                       # Build output (generated)
├── legacy/                     # Old files (backup)
├── package.json
├── vite.config.js
└── *.html                      # HTML pages
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (minified, optimized)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on JavaScript files
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Development Workflow

1. **Make changes** to files in `resources/` directory
2. **Save** - Vite will automatically reload (HMR)
3. **Test** in browser at `http://localhost:5173`
4. **Build** when ready: `npm run build`

## HTML Integration

### Development
In development, Vite injects scripts automatically. Your HTML files should reference:
```html
<script type="module" src="/resources/js/app.js"></script>
```

### Production
After building, Vite generates hashed filenames. Update your HTML to use:
```html
<link rel="stylesheet" href="/assets/css/app-[hash].css">
<script type="module" src="/assets/js/app-[hash].js"></script>
```

Or use a build tool to automatically inject these.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions
- No IE11 support (removed for performance)

## Troubleshooting

### Port already in use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3000, // Change to available port
}
```

### Build errors
1. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Check Node.js version: `node --version` (should be >= 18)

### RTL not working
- Ensure `dir="rtl"` on `<html>` tag
- Check that RTL SCSS is imported in `app.scss`

## Performance Tips

- Images: Use `loading="lazy"` for below-fold images
- CSS: Use modular SCSS imports (tree-shaking)
- JS: Code splitting happens automatically with Vite
- Fonts: Use `font-display: swap` for better loading

## Next Steps

- Phase 2: Complete component styling
- Phase 3: Refactor legacy CSS to SCSS modules
- Phase 4: Remove unused libraries, optimize bundle

