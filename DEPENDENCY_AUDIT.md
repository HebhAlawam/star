# Dependency Audit Report

## Current JavaScript Libraries

### ✅ **ACTIVELY USED** (Keep)

| Library | Purpose | Usage | Modern Alternative |
|---------|---------|-------|-------------------|
| **jQuery** | Core DOM manipulation | Used extensively in `script.js` | Remove gradually, use vanilla JS |
| **Bootstrap 5** | UI Framework | Navigation, grid, components | ✅ Keep (upgrade from v4) |
| **Owl Carousel 2** | Image carousel | `owlCarousel()` called | Replace with Swiper.js (RTL support) |
| **Isotope** | Masonry gallery layout | `.isotope()` for gallery filter | Keep (still maintained) or use CSS Grid |
| **Fancybox** | Lightbox for images | `.fancybox()` | Replace with PhotoSwipe or keep v3 |
| **WOW.js** | Scroll animations | `$('.wow').length` | Keep or replace with Intersection Observer |
| **Appear.js** | Scroll trigger for counters | Used with counters | Replace with Intersection Observer |
| **jQuery Countdown** | Countdown timer | `.countdown()` | Replace with modern library |
| **jQuery UI** | Selectmenu widget | `.selectmenu()` | Replace with native select or custom |

### ⚠️ **PARTIALLY USED / MAYBE**

| Library | Status | Action |
|---------|--------|--------|
| **Revolution Slider** | Loaded but may not be active | Audit each page - remove if unused |
| **mixItUp** | Commented in code | Check if needed - likely remove |
| **jQuery Flexslider** | Commented out | Remove if not used |
| **Anime.js** | Loaded | Check usage - may remove |
| **Vivus.js** | Loaded | Check usage - may remove |
| **jQuery Easing** | Dependency | May be needed by other plugins |
| **Mousewheel** | Used with Owl | Keep if Owl stays, remove if replacing |

### ❌ **NOT USED / DEAD CODE** (Remove)

- `respond.js` (IE8 support - obsolete)
- `html5shiv` (IE8 support - obsolete)
- `float.js` (likely unused)
- `map-script.js` (if no map on pages)
- `anime.min.js` (not called)
- `vivus.min.js` (not called)

## Current CSS Files

### ✅ **ACTIVELY USED**

| File | Size | Purpose | Action |
|------|------|---------|--------|
| `bootstrap.min.css` | ~150KB | Core framework | ✅ Keep (upgrade to v5) |
| `style.css` | ~15,000 lines | Main styles | ⚠️ Split into modules |
| `responsive.css` | ~? | Media queries | Merge into modular SCSS |
| `color-themes/blue-theme.css` | ~? | Theme colors | Convert to SCSS variables |
| `color-switcher-design.css` | ~? | Color switcher UI | May remove if unused |
| `flaticon.css` | ~? | Icon fonts | Keep |
| `animate.css` | ~? | Animation classes | Keep if WOW.js uses it |
| `owl.css` | ~? | Carousel styles | Keep if Owl stays |
| `jquery-ui.css` | ~? | UI widget styles | Keep if jQuery UI stays |
| `jquery.fancybox.min.css` | ~? | Lightbox styles | Keep if Fancybox stays |
| `hover.css` | ~? | Hover effects | Check usage - may remove |
| `c_hover.css` | ~? | Hover effects | Check usage - may remove |
| `float.css` | ~? | Float animations | Check usage - may remove |
| `flexslider.css` | ~? | Slider (unused?) | Remove if Flexslider removed |
| `imagehover.css` | ~? | Image hover effects | Check usage |

### ⚠️ **REVOLUTION SLIDER** (Check Usage)

- `plugins/revolution/css/settings.css`
- `plugins/revolution/css/layers.css`
- `plugins/revolution/css/navigation.css`
- **Action**: Audit each HTML page - if no slider is active, remove entire plugin

### ❌ **CDN Loaded**

- Font Awesome 6 (CDN) → Move to npm package for better control

## External CDN Dependencies

1. **Font Awesome 6.5.2** (CDN) → Move to `@fortawesome/fontawesome-free`
2. **Google Fonts** (Almarai, Changa) → Keep CDN or self-host

## Summary Statistics

- **Total JS Files**: ~20 files
- **Used JS Libraries**: ~8-10
- **Unused/Dead JS**: ~5-7
- **Total CSS Files**: ~15+ files
- **Main CSS Size**: ~15,000 lines (needs modularization)
- **Plugins Directory**: Revolution Slider (~1300+ files) - needs audit

## Recommended Actions for Phase 1

1. ✅ **Keep**: jQuery (temporary), Bootstrap 5, Isotope, WOW.js, Appear.js
2. ⚠️ **Replace**: Owl Carousel → Swiper.js, Fancybox → PhotoSwipe (optional)
3. ❌ **Remove**: Revolution Slider (if unused), mixItUp (if unused), dead code files
4. 📦 **Move to npm**: Font Awesome, Bootstrap, all plugins

## Estimated Size Reduction

- **Before**: ~500KB+ minified JS, ~500KB+ CSS
- **After Phase 4**: ~250KB minified JS, ~150KB CSS (with tree-shaking)
- **Savings**: ~50% bundle size reduction

