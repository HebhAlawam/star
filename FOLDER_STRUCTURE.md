# Proposed Folder Structure

## Target Structure (Laravel-Compatible)

```
star/
├── package.json
├── vite.config.js
├── .eslintrc.js
├── .prettierrc
├── .gitignore
│
├── resources/                    # Laravel-compatible (src/ during dev)
│   ├── js/
│   │   ├── app.js               # Main entry point
│   │   ├── bootstrap.js         # Bootstrap initialization
│   │   ├── modules/             # ES6 modules
│   │   │   ├── navigation.js
│   │   │   ├── gallery.js
│   │   │   ├── counter.js
│   │   │   ├── scroll-to-top.js
│   │   │   └── accordion.js
│   │   └── vendor/              # Wrapped vendor plugins (temp)
│   │       ├── owl-carousel.js
│   │       ├── isotope.js
│   │       ├── fancybox.js
│   │       └── wow.js
│   │
│   ├── scss/                    # Modular SCSS
│   │   ├── app.scss             # Main entry - imports all
│   │   ├── _variables.scss      # CSS variables, colors, fonts
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _rtl.scss        # RTL base styles
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _navigation.scss
│   │   │   └── _grid.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _carousel.scss
│   │   │   ├── _gallery.scss
│   │   │   ├── _modal.scss
│   │   │   └── _accordion.scss
│   │   ├── pages/
│   │   │   ├── _home.scss
│   │   │   ├── _about.scss
│   │   │   ├── _contact.scss
│   │   │   └── _gallery.scss
│   │   ├── themes/
│   │   │   └── _blue-theme.scss
│   │   └── utilities/
│   │       ├── _responsive.scss
│   │       └── _helpers.scss
│   │
│   └── images/                  # Source images (will be copied to public)
│       ├── background/
│       ├── gallery/
│       ├── icons/
│       └── ...
│
├── public/                      # Build output (Laravel public/)
│   ├── index.html               # Dev entry point (temporary)
│   ├── about.html
│   ├── contact.html
│   ├── ...
│   ├── assets/                  # Vite output
│   │   ├── app-[hash].js
│   │   ├── app-[hash].css
│   │   └── images/
│   └── images/                  # Static images (copied)
│
├── node_modules/                # npm packages
│
├── legacy/                      # Old files (backup, will be removed)
│   ├── css/
│   ├── js/
│   └── plugins/
│
└── docs/
    ├── MIGRATION.md
    ├── DEPENDENCY_AUDIT.md
    └── LARAVEL_INTEGRATION.md

```

## Laravel Integration Target (Phase 5)

```
laravel-project/
├── resources/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── app.blade.php
│   │   ├── partials/
│   │   │   ├── header.blade.php
│   │   │   └── footer.blade.php
│   │   └── pages/
│   │       ├── home.blade.php
│   │       ├── about.blade.php
│   │       └── ...
│   ├── js/                      # From star/resources/js
│   └── scss/                    # From star/resources/scss
│
└── public/
    └── assets/                  # Vite build output
```

## Migration Path

1. **Phase 1-3**: Work in `resources/` folder
2. **Phase 4**: Clean up, remove `legacy/`
3. **Phase 5**: Prepare Blade partials structure
4. **Final**: Copy `resources/` → Laravel `resources/`, `public/` → Laravel `public/`

