# Stories Page Updates

This document details the changes made to `news.html` to transform it into a professional NGO-level Stories Library.

## What Changed

### A) Toolbar (Under Hero)
**Location**: After hero section, before stories grid

**Components**:
1. **Category Chips**: 
   - الكل / الحملات / الأخبار / قبل وبعد
   - Horizontal scroll on mobile
   - Active state with blue background
   - Sticky toolbar on scroll

2. **Search Input**:
   - Client-side search (searches title, snippet, category)
   - Debounced (300ms delay)
   - Full width on mobile

3. **Sort Dropdown**:
   - الأحدث أولاً / الأقدم أولاً
   - Below search on mobile

**CSS Classes**:
- `.stories-toolbar` - Main toolbar container
- `.stories-categories` - Category chips container
- `.stories-category-chip` - Individual chip (add `.active` for active state)
- `.stories-search-wrapper` - Search container
- `.stories-sort-wrapper` - Sort container

### B) Story Cards (Normal)
**Structure for each card**:
```html
<div class="col-lg-4 col-md-6 col-sm-12 mb-4 filter-item [category]" 
     data-category="campaign|news|before-after"
     data-date="YYYY-MM-DD"
     data-title="Story Title"
     data-snippet="Story snippet text">
  <article class="stories-card stories-card-normal">
    <div class="stories-card-image">
      <img src="..." alt="..." loading="lazy">
      <span class="stories-card-badge stories-badge-[category]">Badge Text</span>
    </div>
    <div class="stories-card-content">
      <div class="stories-card-meta">
        <time class="stories-card-date" datetime="YYYY-MM-DD">
          <i class="fas fa-calendar"></i>
          Date Text
        </time>
        <span class="stories-card-location"> <!-- Optional -->
          <i class="fas fa-map-marker-alt"></i>
          Location
        </span>
      </div>
      <h3 class="stories-card-title">
        <a href="#story-id">Title (max 2 lines)</a>
      </h3>
      <p class="stories-card-snippet">Snippet (1-2 lines)</p>
      <div class="stories-card-footer">
        <a href="#story-id" class="stories-card-cta">اقرأ القصة</a>
        <button class="stories-card-share" aria-label="مشاركة القصة">...</button>
      </div>
    </div>
  </article>
</div>
```

**Required Data Attributes**:
- `data-category`: "campaign" | "news" | "before-after"
- `data-date`: ISO date format (YYYY-MM-DD)
- `data-title`: Full title (for search)
- `data-snippet`: Full snippet text (for search)

**Badge Classes**:
- `.stories-badge-campaign` - Red gradient (for campaigns)
- `.stories-badge-news` - Teal gradient (for news)
- `.stories-badge-before-after` - Pink gradient (for before/after)

### C) Before/After Cards (Special)
**Different structure**:
```html
<article class="stories-card stories-card-before-after">
  <div class="stories-card-image stories-ba-split">
    <div class="stories-ba-before">
      <img src="before-image.jpg" alt="قبل">
      <span class="stories-ba-label stories-ba-label-before">قبل</span>
    </div>
    <div class="stories-ba-after">
      <img src="after-image.jpg" alt="بعد">
      <span class="stories-ba-label stories-ba-label-after">بعد</span>
    </div>
    <span class="stories-card-badge stories-badge-before-after">قبل/بعد</span>
  </div>
  <div class="stories-card-content">
    <!-- Same as normal cards -->
    <!-- CTA text: "شاهد التحوّل" instead of "اقرأ القصة" -->
  </div>
</article>
```

**Note**: If only one image exists, use single image but keep the split structure (duplicate the same image or add a hint).

### D) Links
- Current: Placeholder links (`#story-id`)
- To update: Replace `#story-id` with actual story page URLs
- Comment added in HTML: `<!-- TODO: Replace with actual story URL -->`

### E) Polish
- Consistent padding: 32px mobile / 48px desktop
- Clear visual hierarchy with proper font sizes
- Focus-visible styles for all interactive elements
- Smooth transitions and hover effects

## Where to Edit Cards/Categories

### Adding a New Story Card:
1. **Find the `.stories-grid` container** (line ~328)
2. **Copy an existing card structure** (normal or before/after)
3. **Update required fields**:
   - `data-category`: Must match filter chip value
   - `data-date`: ISO format (YYYY-MM-DD)
   - `data-title`: Full title
   - `data-snippet`: Full snippet
   - Image `src` and `alt`
   - Badge text
   - All visible text content
   - Link `href` (replace `#story-id`)

### Adding a New Category:
1. **Add chip in `.stories-categories`** (line ~284):
   ```html
   <li><a href="#" class="stories-category-chip" data-filter="new-category" role="tab">New Category</a></li>
   ```
2. **Add badge CSS class** in `<style>` section:
   ```css
   .stories-badge-new-category {
     background: linear-gradient(135deg, #color1 0%, #color2 100%);
   }
   ```
3. **Use the category in cards**: Add `data-category="new-category"` and class `filter-item new-category`

## How Filter/Search/Sort Works

### Filter (Category Chips):
- Clicking a chip filters items by `data-category` attribute
- Uses CSS classes and `display: none/block`
- Active state managed via `.active` class
- **No server request** - pure client-side

### Search:
- Searches in `data-title`, `data-snippet`, and `data-category`
- Case-insensitive
- Debounced (300ms delay) for performance
- Works in combination with filter

### Sort:
- Sorts by `data-date` attribute
- Two options: newest first (default) or oldest first
- Converts ISO dates to Date objects for comparison
- Works with filtered and searched results

### Load More:
- Initially shows 9 items
- Clicking "تحميل المزيد" shows 6 more items
- Button hides when all filtered items are visible
- Uses `visibleCount` variable to track shown items

## JavaScript Functions

- `filterAndSort()`: Main function that:
  1. Applies category filter
  2. Applies search filter
  3. Sorts by date
  4. Shows/hides items
  5. Updates load more button

- Event listeners:
  - Category chips: Update `currentFilter` and call `filterAndSort()`
  - Search input: Debounced update of `currentSearch`
  - Sort select: Update `currentSort`
  - Load more: Increase `visibleCount` and re-filter

## Image Requirements

- **Aspect Ratio**: 16:9 (enforced via `padding-top: 56.25%`)
- **Size**: Use `object-fit: cover` for proper cropping
- **Loading**: All images use `loading="lazy"` for performance
- **Alt Text**: Required and descriptive

## Accessibility

- All interactive elements have `aria-label` or `aria-selected`
- Focus-visible styles for keyboard navigation
- Semantic HTML (`<article>`, `<time>`, proper heading hierarchy)
- RTL maintained on all breakpoints

## Responsive Breakpoints

- **Desktop (lg)**: 3 columns, full toolbar
- **Tablet (md)**: 2 columns, stacked toolbar
- **Mobile (sm/xs)**: 1 column, horizontal scroll chips, full-width search/sort

## Notes

- No changes to header, footer, or hero structure
- All styles scoped to `.stories-page` to avoid conflicts
- Vanilla JS only (no jQuery or external libraries)
- Compatible with existing Bootstrap grid system

