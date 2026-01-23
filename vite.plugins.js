/**
 * Vite Plugin to serve legacy CSS files without PostCSS processing
 * This allows plugins/ folder CSS files to be served as static assets
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function legacyCssPlugin() {
  return {
    name: 'legacy-css',
    configureServer(server) {
      // Intercept requests to plugins/*.css and serve them directly
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.match(/^\/plugins\/.*\.css$/)) {
          // Skip PostCSS processing for these files
          // Serve them as-is
          const filePath = resolve(process.cwd(), '.' + req.url);
          
          if (existsSync(filePath)) {
            try {
              const content = readFileSync(filePath, 'utf-8');
              res.setHeader('Content-Type', 'text/css; charset=utf-8');
              res.end(content);
              return;
            } catch (err) {
              console.error(`Error serving ${filePath}:`, err);
              // Continue to next middleware on error
            }
          }
        }
        next();
      });
    },
  };
}

