# Migration Guide: Legacy to Modern Frontend

This guide explains what changed and how to integrate the new build system.

## What Changed

### Phase 1: Build & Tooling ✅
- Added npm package management
- Integrated Vite build system
- Added ESLint + Prettier
- Created modular folder structure (`resources/`)

### Phase 2: UI Professional Polish ✅
- Created design token system (CSS variables)
- Improved typography hierarchy
- Normalized spacing (8px grid)
- Enhanced button components
- Improved accessibility

## File Structure Changes

### Before
```
star/
├── css/
│   └── style.css (15,000+ lines)
├── js/
│   └── script.js
├── plugins/
└── *.html
```

### After
```
star/
├── resources/
│   ├── js/
│   │   ├── app.js (entry point)
│   │   └── bootstrap.js
│   └── scss/
│       ├── app.scss (entry point)
│       ├── _tokens.scss
│       ├── base/
│       ├── components/
│       └── utilities/
├── public/ (static assets)
├── dist/ (build output)
├── legacy/ (old files backup)
└── *.html
```

## HTML Integration

### Development Mode

Your HTML files need to include the Vite entry point:

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="utf-8">
    <title>Your Page</title>
    <!-- Vite will inject CSS here -->
</head>
<body>
    <!-- Your content -->
    
    <!-- Vite dev script -->
    <script type="module" src="/resources/js/app.js"></script>
</body>
</html>
```

### Production Mode

After `npm run build`, Vite generates hashed filenames. Update HTML to:

```html
<link rel="stylesheet" href="/assets/css/app-[hash].css">
<script type="module" src="/assets/js/app-[hash].js"></script>
```

**Or** use a build tool/plugin to automatically inject these.

## Legacy Files

Old files are backed up in `legacy/` folder:
- `legacy/css/` - Old CSS files
- `legacy/js/` - Old JS files  
- `legacy/plugins/` - Old plugins

These will be gradually migrated in Phase 3.

## Design Tokens

All design values now use CSS custom properties:

### Before
```css
.button {
  background: #0192dc;
  padding: 15px 30px;
  font-size: 16px;
}
```

### After
```css
.button {
  background: var(--color-primary);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
}
```

See `UI_TOKENS.md` for full token reference.

## Spacing System

All spacing now uses 8px grid:

- `--spacing-1`: 4px
- `--spacing-2`: 8px
- `--spacing-4`: 16px
- `--spacing-6`: 24px
- `--spacing-8`: 32px
- etc.

## Component Updates

### Buttons

Buttons now have consistent:
- Minimum height: 44px (accessibility)
- Hover states with subtle lift
- Focus rings for keyboard navigation
- Smooth transitions

All existing button classes still work:
- `.theme-btn.btn-style-one`
- `.theme-btn.btn-style-two`
- etc.

## RTL Support

RTL is maintained and improved:
- Set `dir="rtl"` on `<html>` tag
- All components respect RTL
- Spacing uses logical properties

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions
- No IE11 support (removed for performance)

## Next Steps

1. **Test the build**: `npm run dev` and verify everything works
2. **Review changes**: Check UI improvements match expectations
3. **Phase 3**: CSS refactor (migrate legacy CSS to modules)
4. **Phase 4**: Performance cleanup (remove unused libraries)

## Troubleshooting

### Styles not loading
- Ensure `app.scss` is imported in `app.js`
- Check Vite dev server is running
- Clear cache: `rm -rf node_modules/.vite dist`

### RTL not working
- Verify `dir="rtl"` on `<html>` tag
- Check `resources/scss/base/_rtl.scss` is imported

### Build errors
- Run `npm install` again
- Check Node.js version (>= 18.0.0)
- Review error messages in terminal

## Support

See documentation:
- `FRONTEND_SETUP.md` - Setup instructions
- `UI_TOKENS.md` - Design system
- `CHANGELOG.md` - Detailed changes

