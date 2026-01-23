import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import { legacyCssPlugin } from './vite.plugins.js';

export default defineConfig({
  // Base public path when served in production
  base: '/',
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    cors: true,
    fs: {
      // Allow serving files from project root (for plugins folder)
      allow: ['..'],
    },
    // Serve plugins folder as static assets (bypass PostCSS processing)
    middlewareMode: false,
    // Suppress source map warnings for legacy/vendor files
    sourcemapIgnoreList: (sourcePath) => {
      return sourcePath.includes('bootstrap') || sourcePath.includes('node_modules');
    },
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console for now
      },
    },
    rollupOptions: {
      input: {
        // Main entry points
        app: resolve(__dirname, 'resources/js/app.js'),
      },
      output: {
        // Manual chunking for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('bootstrap')) {
              return 'vendor-bootstrap';
            }
            if (id.includes('jquery')) {
              return 'vendor-jquery';
            }
            return 'vendor';
          }
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|svg|gif|webp|ico)$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Copy public assets
    copyPublicDir: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },

  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources'),
      '@js': resolve(__dirname, 'resources/js'),
      '@scss': resolve(__dirname, 'resources/scss'),
      '@images': resolve(__dirname, 'resources/images'),
    },
  },

  // CSS configuration
  css: {
    // Disable source map loading for CSS (fixes missing .map file warnings)
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/_tokens.scss";`,
        // Silence deprecation warnings
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            '> 1%',
            'last 2 versions',
            'not dead',
            'not IE 11',
          ],
        }),
      ],
    },
  },

  // Plugins
  plugins: [
    // Serve legacy CSS files without PostCSS processing
    legacyCssPlugin(),
    // Legacy browser support (IE11, older browsers)
    legacy({
      targets: ['> 1%', 'last 2 versions', 'not dead'],
      modernPolyfills: true,
      renderLegacyChunks: false, // Only generate legacy chunks if needed
    }),
  ],

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'bootstrap',
      '@fortawesome/fontawesome-free',
      '@popperjs/core',
      'jquery',
    ],
  },
  
  // Public directory for static assets
  publicDir: 'public',
});
