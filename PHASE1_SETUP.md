# Phase 1: Setup & Audit - Implementation Guide

## ✅ Completed Tasks

### 1. Dependency Audit
- ✅ Created `DEPENDENCY_AUDIT.md` with full library analysis
- ✅ Identified used vs unused libraries
- ✅ Estimated bundle size reduction (50%+)

### 2. Folder Structure
- ✅ Created `FOLDER_STRUCTURE.md` with Laravel-compatible structure
- ✅ Defined migration path for Phase 5

### 3. Package Management
- ✅ Created `package.json` with:
  - Core dependencies (Bootstrap 5, Font Awesome)
  - Dev dependencies (Vite, ESLint, Prettier, Sass)
  - Optional dependencies (for Phase 3-4 replacements)

### 4. Build System
- ✅ Created `vite.config.js` with:
  - Asset optimization
  - CSS preprocessing (SCSS)
  - Legacy browser support
  - Proper chunking strategy
  - Path aliases for clean imports

### 5. Code Quality
- ✅ Created `.eslintrc.js` with Prettier integration
- ✅ Created `.prettierrc` with consistent formatting rules
- ✅ Created `.gitignore` for the project

## 📋 Next Steps (To Complete Phase 1)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Folder Structure
```bash
mkdir -p resources/js/modules
mkdir -p resources/js/vendor
mkdir -p resources/scss/{base,layout,components,pages,themes,utilities}
mkdir -p resources/images
mkdir -p legacy
```

### Step 3: Move Legacy Files
```bash
# Backup old files
mv css legacy/
mv js legacy/
mv plugins legacy/
```

### Step 4: Create Entry Points

**resources/js/app.js** (main entry)
```javascript
// Main entry point - imports all modules
import './bootstrap';
// Import modules (Phase 3)
```

**resources/scss/app.scss** (main SCSS entry)
```scss
// Main SCSS entry - imports all modules
@import 'base/reset';
@import 'base/typography';
@import 'base/rtl';
// ... other imports
```

### Step 5: Update HTML Files
- Replace all `<link>` and `<script>` tags with Vite entry point
- Add Vite dev server script for development
- Test with `npm run dev`

## 🎯 Acceptance Criteria Checklist

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts Vite dev server
- [ ] Website loads with same visual appearance
- [ ] RTL support still works perfectly
- [ ] All interactive features work (menus, sliders, etc.)
- [ ] No console errors
- [ ] Build output (`npm run build`) generates optimized assets

## 📊 Current vs Target

| Metric | Current | Target (Phase 1) |
|--------|---------|------------------|
| Build System | None | ✅ Vite |
| Package Manager | None | ✅ npm |
| Module System | Global scripts | ✅ ES Modules |
| CSS Organization | 1 file (15K lines) | ✅ Modular SCSS (Phase 2) |
| Code Quality | None | ✅ ESLint + Prettier |
| Bundle Size | N/A | Baseline established |

## 🔍 Verification Commands

```bash
# Check dependencies
npm list --depth=0

# Run linter
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- **jQuery**: Still included as dependency (will be removed in Phase 3)
- **Revolution Slider**: Needs audit - may be completely removed
- **Font Awesome**: Moved from CDN to npm package
- **Bootstrap**: Upgraded from v4 to v5 (need to verify compatibility)

## ⚠️ Known Issues / TODOs

1. [ ] Verify Bootstrap 5 compatibility with existing styles
2. [ ] Check if Revolution Slider is actually used on any page
3. [ ] Test RTL with Vite dev server
4. [ ] Verify all plugins load correctly in new structure

