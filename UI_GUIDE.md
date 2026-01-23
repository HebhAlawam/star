# UI Design Guide

Complete guide to using the design system, tokens, and components.

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Components](#components)
5. [Layout Patterns](#layout-patterns)
6. [Accessibility Guidelines](#accessibility-guidelines)

---

## Design Tokens

All design values use CSS custom properties defined in `_tokens.scss`.

### Colors

```scss
// Primary
--color-primary: #0192dc
--color-primary-dark: #0077b3
--color-primary-light: #33a8e0

// Accent
--color-accent: #e7ae41
--color-accent-dark: #d4982a

// Text
--color-text: #343434
--color-text-light: #777777
--color-text-muted: #999999

// Backgrounds
--color-bg: #ffffff
--color-bg-light: #f8f9fa

// Usage
.my-element {
  color: var(--color-primary);
  background: var(--color-bg-light);
}
```

### Typography Scale

```scss
// Font Sizes
--font-size-xs: 0.75rem    // 12px
--font-size-sm: 0.875rem   // 14px
--font-size-base: 1rem     // 16px
--font-size-lg: 1.125rem   // 18px
--font-size-xl: 1.25rem    // 20px
--font-size-2xl: 1.5rem    // 24px
--font-size-3xl: 1.875rem  // 30px
--font-size-4xl: 2.25rem   // 36px
--font-size-5xl: 3rem      // 48px

// Usage
.my-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}
```

### Spacing (8px Grid)

```scss
--spacing-1: 4px   // 0.5x
--spacing-2: 8px   // 1x
--spacing-3: 12px  // 1.5x
--spacing-4: 16px  // 2x
--spacing-6: 24px  // 3x
--spacing-8: 32px  // 4x
--spacing-12: 48px // 6x
--spacing-16: 64px // 8x
--spacing-20: 80px // 10x

// Usage
.my-section {
  padding: var(--spacing-8) var(--spacing-4);
  margin-bottom: var(--spacing-6);
}
```

### Shadows

```scss
--shadow-sm: Subtle (cards)
--shadow-base: Default (buttons)
--shadow-md: Medium (hover states)
--shadow-lg: Large (modals)
--shadow-xl: Extra large (overlays)

// Usage
.my-card {
  box-shadow: var(--shadow-base);
  
  &:hover {
    box-shadow: var(--shadow-lg);
  }
}
```

### Border Radius

```scss
--radius-sm: 4px
--radius-base: 8px   // Default
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-full: 9999px // Pills
```

---

## Typography

### Headings

Always use semantic heading tags (`<h1>` through `<h6>`). The styles automatically apply:

```html
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Body Text

```html
<p class="text">Regular paragraph text</p>
<p class="text-lg">Larger body text</p>
<p class="text-sm">Smaller text (captions)</p>
```

### Text Utilities

```html
<!-- Colors -->
<p class="text-primary">Primary colored text</p>
<p class="text-muted">Muted text</p>

<!-- Alignment -->
<p class="text-center">Centered text</p>
<p class="text-right">Right aligned (RTL default)</p>

<!-- Weights -->
<p class="font-bold">Bold text</p>
<p class="font-semibold">Semibold text</p>
```

---

## Spacing System

Use spacing utilities for consistent spacing:

```html
<!-- Margin -->
<div class="mt-4 mb-6">Margin top 16px, bottom 24px</div>

<!-- Padding -->
<div class="p-6">Padding 24px all sides</div>
<div class="px-4 py-8">Padding horizontal 16px, vertical 32px</div>

<!-- Section spacing -->
<section class="section">80px vertical padding (desktop)</section>
```

**Spacing Scale:**
- `0` = 0px
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `20` = 80px

---

## Components

### Buttons

```html
<!-- Primary -->
<a href="#" class="theme-btn btn-style-one">Primary Button</a>

<!-- Secondary (Outline) -->
<a href="#" class="theme-btn btn-style-two">Secondary Button</a>

<!-- Accent -->
<a href="#" class="theme-btn btn-style-three">Accent Button</a>

<!-- Light -->
<a href="#" class="theme-btn btn-style-four">Light Button</a>

<!-- Warning -->
<a href="#" class="theme-btn btn-style-five">Warning Button</a>

<!-- Sizes -->
<a href="#" class="theme-btn btn-style-one btn-sm">Small</a>
<a href="#" class="theme-btn btn-style-one btn-lg">Large</a>
```

**Button States:**
- Hover: Darker color + lift effect
- Focus: Visible ring (accessibility)
- Disabled: 60% opacity, no pointer events

### Cards

#### Feature Cards
```html
<div class="featured-block col-lg-4">
  <div class="inner-box">
    <div class="content text-center d-flex flex-column h-100">
      <div class="icon-box mx-auto">
        <span class="icon flaticon-heart"></span>
      </div>
      <h3>Card Title</h3>
      <div class="text">Card description</div>
      <a href="#" class="theme-btn mt-auto">Action</a>
    </div>
  </div>
</div>
```

#### Gallery Cards
```html
<div class="gallery-item col-md-4">
  <div class="inner-box">
    <figure class="image-box">
      <img src="image.jpg" alt="Description" loading="lazy">
      <div class="overlay-box">
        <div class="overlay-inner">
          <div class="text">Title</div>
          <a href="#" class="link-btn">View</a>
        </div>
      </div>
    </figure>
  </div>
</div>
```

### Forms

```html
<form class="default-form">
  <div class="form-group">
    <label for="name">الاسم <span class="required">*</span></label>
    <input type="text" id="name" name="name" required>
    <span class="help-text">أدخل اسمك الكامل</span>
  </div>
  
  <div class="form-group has-error">
    <label for="email">البريد الإلكتروني</label>
    <input type="email" id="email" name="email">
    <span class="error-message">البريد غير صحيح</span>
  </div>
  
  <button type="submit" class="theme-btn btn-style-one">إرسال</button>
</form>
```

### Section Titles

```html
<div class="sec-title-two centered">
  <div class="title-icon">
    <img src="icon.png" alt="">
  </div>
  <h2>Section Title</h2>
  <div class="text">Section description text</div>
</div>
```

### Accordion/FAQ

```html
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse">
        <div class="card-title">
          <span><i class="fas fa-paw"></i></span>
          Question Text
        </div>
        <span><i class="fas fa-arrow-down"></i></span>
      </button>
    </div>
    <div class="accordion-collapse collapse">
      <div class="accordion-body">
        Answer text here
      </div>
    </div>
  </div>
</div>
```

---

## Layout Patterns

### Container

```html
<div class="auto-container">
  <!-- Content with max-width and padding -->
</div>
```

### Section Spacing

```html
<section class="section">
  <!-- 80px vertical padding on desktop, 48px on mobile -->
</section>

<section class="section-sm">
  <!-- 48px vertical padding -->
</section>
```

### Hero Section

```html
<section class="hero-plain">
  <div class="hero-plain__media">
    <img class="hero-plain__img" src="hero.jpg" alt="">
    <div class="hero-plain__overlay"></div>
  </div>
  <div class="hero-plain__content">
    <h1>Main Heading</h1>
    <p>Hero description</p>
    <div class="hero__cta">
      <a href="#" class="theme-btn btn-style-one">CTA 1</a>
      <a href="#" class="theme-btn btn-style-two">CTA 2</a>
    </div>
  </div>
</section>
```

---

## Accessibility Guidelines

### Required Elements

1. **Focus States**: All interactive elements must have visible focus indicators
   ```css
   &:focus {
     outline: var(--focus-ring-width) solid var(--focus-ring-color);
   }
   ```

2. **Touch Targets**: Minimum 44x44px for mobile
   ```css
   min-height: 44px;
   min-width: 44px;
   ```

3. **ARIA Labels**: Use for icon-only buttons
   ```html
   <button aria-label="Search">
     <i class="fas fa-search"></i>
   </button>
   ```

4. **Semantic HTML**: Use proper elements
   ```html
   <nav> for navigation
   <header> for header
   <main> for main content
   <footer> for footer
   ```

5. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI
   - Use design tokens for guaranteed contrast
   - Test with WebAIM Contrast Checker

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Escape key closes modals/dropdowns
- Enter/Space activates buttons

### Screen Readers

- Use semantic HTML
- Provide alt text for images
- Use ARIA labels where needed
- Ensure headings are in order (h1 → h2 → h3)

---

## RTL Guidelines

### Text Direction

Always set `dir="rtl"` on `<html>`:
```html
<html dir="rtl" lang="ar">
```

### Spacing

Use logical properties in CSS:
```scss
// Instead of:
margin-left: 10px;

// Use:
margin-inline-start: 10px;
```

### Icons

- Mirror arrow icons in RTL
- Use RTL-aware icon libraries
- Test icon alignment

### Layout

- Float: Use `float-right` in RTL (becomes left)
- Flexbox: Works automatically with `dir="rtl"`
- Grid: Works automatically

---

## Best Practices

1. **Use Design Tokens**: Always use CSS variables, never hardcode values
2. **Consistent Spacing**: Use 8px grid system
3. **Responsive**: Mobile-first approach
4. **Accessibility**: Test with keyboard and screen reader
5. **Performance**: Use `loading="lazy"` for images below fold
6. **Semantic HTML**: Use proper HTML elements
7. **RTL Testing**: Always test in RTL mode

---

## Component Checklist

When creating new components:

- [ ] Uses design tokens (colors, spacing, typography)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] RTL compatible
- [ ] Accessible (focus states, ARIA, keyboard nav)
- [ ] Hover/focus/active states defined
- [ ] Consistent with existing components
- [ ] Documented in this guide

---

## Quick Reference

### Common Patterns

**Section with Title:**
```html
<section class="section">
  <div class="auto-container">
    <div class="sec-title-two centered">
      <h2>Title</h2>
      <div class="text">Description</div>
    </div>
    <!-- Content -->
  </div>
</section>
```

**Card Grid:**
```html
<div class="row">
  <div class="col-lg-4 col-md-6">
    <div class="featured-block">
      <!-- Card content -->
    </div>
  </div>
</div>
```

**CTA Section:**
```html
<section class="subscribe-style-one">
  <div class="auto-container">
    <div class="row">
      <div class="col-md-6">
        <h2>Title</h2>
        <div class="text">Description</div>
      </div>
      <div class="col-md-6">
        <button class="theme-btn btn-style-one">Action</button>
      </div>
    </div>
  </div>
</section>
```

---

**Last Updated**: Phase 1-2 Complete  
**Version**: 1.0.0

