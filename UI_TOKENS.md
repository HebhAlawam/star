# UI Design Tokens & Component Guidelines

## Design Tokens

All design tokens are defined in `resources/scss/_tokens.scss` and use CSS custom properties.

### Colors

#### Primary Palette
- `--color-primary`: `#0192dc` (Main brand blue)
- `--color-primary-dark`: `#0077b3` (Hover states)
- `--color-primary-light`: `#33a8e0` (Light variant)

#### Accent Palette
- `--color-accent`: `#e7ae41` (Gold/yellow accent)
- `--color-accent-dark`: `#d4982a`
- `--color-accent-light`: `#edc05f`

#### Neutral Palette
- `--color-white`: `#ffffff`
- `--color-off-white`: `#f8f9fa`
- `--color-light-gray`: `#d1d1d1`
- `--color-gray`: `#777777`
- `--color-dark-gray`: `#343434`
- `--color-black`: `#000000`

#### Text Colors
- `--color-text`: `#343434` (Body text)
- `--color-text-light`: `#777777` (Secondary text)
- `--color-text-muted`: `#999999` (Muted text)

### Typography

#### Font Families
- `--font-family-heading`: Changa, Almarai, system fallbacks
- `--font-family-body`: Almarai, system fallbacks
- `--font-family-latin`: Inter, Montserrat, system fallbacks

#### Font Sizes (Responsive Scale)
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)

#### Font Weights
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

#### Line Heights
- `--line-height-tight`: 1.25 (Headings)
- `--line-height-normal`: 1.5 (Body, lists)
- `--line-height-relaxed`: 1.75 (Body paragraphs)
- `--line-height-loose`: 2 (Quotes)

### Spacing (8px Grid System)

All spacing uses an 8px base unit:

- `--spacing-1`: 4px (0.5x)
- `--spacing-2`: 8px (1x)
- `--spacing-3`: 12px (1.5x)
- `--spacing-4`: 16px (2x)
- `--spacing-6`: 24px (3x)
- `--spacing-8`: 32px (4x)
- `--spacing-12`: 48px (6x)
- `--spacing-16`: 64px (8x)
- `--spacing-20`: 80px (10x)
- `--spacing-24`: 96px (12x)

#### Section Spacing
- `--section-padding-y`: 80px (Desktop)
- `--section-padding-y-sm`: 48px (Mobile/Tablet)

### Border Radius

- `--radius-sm`: 4px
- `--radius-base`: 8px (Default)
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 24px
- `--radius-full`: 9999px (Pills)

### Shadows

- `--shadow-sm`: Subtle shadow (cards)
- `--shadow-base`: Default shadow (buttons)
- `--shadow-md`: Medium shadow (hover states)
- `--shadow-lg`: Large shadow (modals)
- `--shadow-xl`: Extra large shadow (overlays)

### Transitions

- `--transition-fast`: 150ms (Hover states)
- `--transition-base`: 250ms (Default)
- `--transition-slow`: 350ms (Complex animations)

### Focus States (Accessibility)

- `--focus-ring-width`: 3px
- `--focus-ring-offset`: 2px
- `--focus-ring-color`: Primary color
- All interactive elements must have visible focus states

## Component Guidelines

### Buttons

**Base Styles:**
- Minimum height: 44px (accessibility)
- Padding: `var(--spacing-3) var(--spacing-6)`
- Border radius: `var(--radius-base)`
- Font weight: `var(--font-weight-semibold)`

**Variants:**
- `btn-style-one`: Primary (filled blue)
- `btn-style-two`: Secondary (outlined blue)
- `btn-style-three`: Accent (filled gold)
- `btn-style-four`: Light (white background)
- `btn-style-five`: Warning (yellow)

**States:**
- Hover: Darker color + subtle lift (`translateY(-1px)`)
- Active: Reset position + shadow reduction
- Focus: Visible ring using `--focus-ring`
- Disabled: 60% opacity, no pointer events

### Typography Hierarchy

**Headings:**
- H1: `font-size-5xl`, bold, `line-height-tight`
- H2: `font-size-4xl`, bold, `line-height-tight`
- H3: `font-size-3xl`, semibold, `line-height-normal`
- H4-H6: Decreasing sizes, semibold

**Body:**
- Default: `font-size-base`, normal weight, `line-height-relaxed`
- Small: `font-size-sm` for captions/secondary text

### Cards

**Spacing:**
- Padding: `var(--spacing-6)`
- Margin bottom: `var(--spacing-6)`
- Border radius: `var(--radius-md)`
- Box shadow: `var(--shadow-base)`

**Content:**
- Equal heights for grid items
- Consistent spacing between elements
- Clear visual hierarchy

### Forms

**Inputs:**
- Height: `44px` minimum (accessibility)
- Padding: `var(--spacing-3) var(--spacing-4)`
- Border: 1px solid `--color-border`
- Border radius: `var(--radius-base)`
- Focus: Visible ring using `--focus-ring`

**Labels:**
- Font weight: `var(--font-weight-medium)`
- Margin bottom: `var(--spacing-2)`
- Clear association with inputs

### Navigation

**Header:**
- Sticky/fixed positioning
- Consistent padding: `var(--spacing-4)`
- Clear active states
- Mobile: Hamburger menu with smooth transitions

**Links:**
- Hover: Color change + underline (if appropriate)
- Active: Different color/weight
- Focus: Visible outline

### Sections

**Spacing:**
- Vertical padding: `var(--section-padding-y)` on desktop
- Vertical padding: `var(--section-padding-y-sm)` on mobile
- Consistent margins between sections

## RTL Guidelines

All components must support RTL:

1. **Text Direction:** Set `dir="rtl"` on `<html>`
2. **Layout:** Use logical properties where possible
3. **Icons:** Mirror arrow icons (left ↔ right)
4. **Spacing:** Use `margin-inline-start/end` instead of left/right
5. **Borders:** Use `border-inline-start/end`

## Accessibility Requirements

1. **Keyboard Navigation:**
   - All interactive elements focusable
   - Visible focus indicators
   - Logical tab order

2. **Color Contrast:**
   - Text: Minimum 4.5:1 for normal text
   - Text: Minimum 3:1 for large text (18px+)
   - UI components: Minimum 3:1

3. **Touch Targets:**
   - Minimum 44x44px for mobile
   - Adequate spacing between targets

4. **ARIA Labels:**
   - Icon-only buttons must have `aria-label`
   - Form inputs must have associated labels
   - Landmarks: `header`, `nav`, `main`, `footer`

5. **Semantic HTML:**
   - Use proper heading hierarchy (h1 → h2 → h3)
   - Use semantic elements (`<nav>`, `<section>`, `<article>`)
   - Alt text for images

## Responsive Breakpoints

- **Mobile:** < 576px
- **Tablet:** 576px - 991px
- **Desktop:** 992px - 1199px
- **Large Desktop:** >= 1200px

Use mobile-first approach in media queries.

