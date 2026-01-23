# Quick Start Guide

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build
# Output in dist/ directory
```

## Development Workflow

1. **Edit files** in `resources/` directory
2. **Save** - Vite automatically reloads (HMR)
3. **Preview** changes in browser
4. **Build** when ready: `npm run build`

## Project Structure

```
resources/
├── js/
│   ├── app.js              # Main entry
│   └── bootstrap.js        # jQuery bridge
├── scss/
│   ├── app.scss            # Main SCSS entry
│   ├── _tokens.scss        # Design tokens
│   ├── base/               # Reset, typography, RTL
│   ├── components/         # Buttons, cards, forms, etc.
│   ├── layout/             # Header, hero, footer
│   └── utilities/          # Spacing, helpers
└── images/                 # Source images
```

## Key Files

- **Design Tokens**: `resources/scss/_tokens.scss`
- **Components**: `resources/scss/components/`
- **Layout**: `resources/scss/layout/`
- **Documentation**: `UI_GUIDE.md`, `UI_IMPROVEMENTS_LOG.md`

## Testing Checklist

- [ ] `npm run dev` works
- [ ] Website loads correctly
- [ ] RTL works perfectly
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] All interactive features work

