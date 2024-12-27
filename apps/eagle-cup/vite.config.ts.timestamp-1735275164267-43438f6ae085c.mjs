// vite.config.ts
import react from "file:///Users/adarshgoswami/Documents/frontend-apps/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path2 from "path";
import { defineConfig } from "file:///Users/adarshgoswami/Documents/frontend-apps/node_modules/vite/dist/node/index.js";

// src/plugins/resolvedPathPlugin.js
import path from "path";
function logResolvedPathsPlugin() {
  return {
    name: "log-resolved-paths",
    resolveId(source, importer) {
      if (importer) {
        const resolvedPath = path.resolve(path.dirname(importer), source);
        console.log(`Resolving: ${source}`);
        console.log(`Importer: ${importer}`);
        console.log(`Resolved Path: ${resolvedPath}
`);
      } else {
        console.log(`Resolving: ${source}`);
        console.log(`No importer available
`);
      }
      return null;
    },
    buildEnd(error) {
      if (error) {
        console.error("Build failed:", error);
      } else {
        console.log("Build completed successfully.");
      }
    }
  };
}

// vite.config.ts
import { VitePWA } from "file:///Users/adarshgoswami/Documents/frontend-apps/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/Users/adarshgoswami/Documents/frontend-apps/apps/eagle-cup";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    logResolvedPathsPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Your App Name",
        short_name: "AppName",
        description: "A brief description of your app",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff"
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "network-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60
                // 24 hours
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@components": path2.resolve(__vite_injected_original_dirname, "src/components"),
      "@pages": path2.resolve(__vite_injected_original_dirname, "src/pages"),
      "@assets": path2.resolve(__vite_injected_original_dirname, "src/assets"),
      "@store": path2.resolve(__vite_injected_original_dirname, "src/store"),
      "@apis": path2.resolve(__vite_injected_original_dirname, "src/apis"),
      "@atoms": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/atoms"),
      "@molecules": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/molecules"),
      "@organisms": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/organisms"),
      "@templates": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/templates"),
      "@shared/api": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/api"),
      "@shared/utils": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/utils"),
      "@shared/types": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/types"),
      "@shared/constants": path2.resolve(__vite_injected_original_dirname, "../../packages/shared/constants")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3BsdWdpbnMvcmVzb2x2ZWRQYXRoUGx1Z2luLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FkYXJzaGdvc3dhbWkvRG9jdW1lbnRzL2Zyb250ZW5kLWFwcHMvYXBwcy9lYWdsZS1jdXBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hZGFyc2hnb3N3YW1pL0RvY3VtZW50cy9mcm9udGVuZC1hcHBzL2FwcHMvZWFnbGUtY3VwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hZGFyc2hnb3N3YW1pL0RvY3VtZW50cy9mcm9udGVuZC1hcHBzL2FwcHMvZWFnbGUtY3VwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgbG9nUmVzb2x2ZWRQYXRoc1BsdWdpbiBmcm9tICcuL3NyYy9wbHVnaW5zL3Jlc29sdmVkUGF0aFBsdWdpbic7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGxvZ1Jlc29sdmVkUGF0aHNQbHVnaW4oKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1lvdXIgQXBwIE5hbWUnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnQXBwTmFtZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBicmllZiBkZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCcsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaWNvbi0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydF91cmw6ICcuJyxcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZidcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogL15odHRwcz8uKi8sXG4gICAgICAgICAgICBoYW5kbGVyOiAnTmV0d29ya0ZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnbmV0d29yay1jYWNoZScsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMDAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogMjQgKiA2MCAqIDYwLCAvLyAyNCBob3Vyc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpLFxuICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMnKSxcbiAgICAgICdAYXNzZXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMnKSxcbiAgICAgICdAc3RvcmUnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3N0b3JlJyksXG4gICAgICAnQGFwaXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2FwaXMnKSxcblxuXG4gICAgICBcIkBhdG9tc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvc2hhcmVkL2F0b21zJyksXG4gICAgICBcIkBtb2xlY3VsZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9tb2xlY3VsZXMnKSxcbiAgICAgIFwiQG9yZ2FuaXNtc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvc2hhcmVkL29yZ2FuaXNtcycpLFxuICAgICAgXCJAdGVtcGxhdGVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlcy9zaGFyZWQvdGVtcGxhdGVzJyksXG4gICAgICBcIkBzaGFyZWQvYXBpXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlcy9zaGFyZWQvYXBpJyksXG4gICAgICBcIkBzaGFyZWQvdXRpbHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3NoYXJlZC91dGlscycpLFxuICAgICAgXCJAc2hhcmVkL3R5cGVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlcy9zaGFyZWQvdHlwZXMnKSxcbiAgICAgIFwiQHNoYXJlZC9jb25zdGFudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9jb25zdGFudHMnKSxcbiAgICB9LFxuICB9LFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FkYXJzaGdvc3dhbWkvRG9jdW1lbnRzL2Zyb250ZW5kLWFwcHMvYXBwcy9lYWdsZS1jdXAvc3JjL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hZGFyc2hnb3N3YW1pL0RvY3VtZW50cy9mcm9udGVuZC1hcHBzL2FwcHMvZWFnbGUtY3VwL3NyYy9wbHVnaW5zL3Jlc29sdmVkUGF0aFBsdWdpbi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWRhcnNoZ29zd2FtaS9Eb2N1bWVudHMvZnJvbnRlbmQtYXBwcy9hcHBzL2VhZ2xlLWN1cC9zcmMvcGx1Z2lucy9yZXNvbHZlZFBhdGhQbHVnaW4uanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nUmVzb2x2ZWRQYXRoc1BsdWdpbigpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbG9nLXJlc29sdmVkLXBhdGhzJyxcbiAgICByZXNvbHZlSWQoc291cmNlLCBpbXBvcnRlcikge1xuICAgICAgaWYgKGltcG9ydGVyKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoaW1wb3J0ZXIpLCBzb3VyY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVzb2x2aW5nOiAke3NvdXJjZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEltcG9ydGVyOiAke2ltcG9ydGVyfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVzb2x2ZWQgUGF0aDogJHtyZXNvbHZlZFBhdGh9XFxuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVzb2x2aW5nOiAke3NvdXJjZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vIGltcG9ydGVyIGF2YWlsYWJsZVxcbmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7IC8vIFJldHVybmluZyBudWxsIHRvIGxldCBWaXRlIGhhbmRsZSB0aGUgYWN0dWFsIHJlc29sdXRpb25cbiAgICB9LFxuICAgIGJ1aWxkRW5kKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQnVpbGQgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCdWlsZCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLE9BQU8sV0FBVztBQUNyWCxPQUFPQSxXQUFVO0FBQ2pCLFNBQVMsb0JBQW9COzs7QUNGd1gsT0FBTyxVQUFVO0FBRXZaLFNBQVIseUJBQTBDO0FBQy9DLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFVBQVUsUUFBUSxVQUFVO0FBQzFCLFVBQUksVUFBVTtBQUNaLGNBQU0sZUFBZSxLQUFLLFFBQVEsS0FBSyxRQUFRLFFBQVEsR0FBRyxNQUFNO0FBQ2hFLGdCQUFRLElBQUksY0FBYyxNQUFNLEVBQUU7QUFDbEMsZ0JBQVEsSUFBSSxhQUFhLFFBQVEsRUFBRTtBQUNuQyxnQkFBUSxJQUFJLGtCQUFrQixZQUFZO0FBQUEsQ0FBSTtBQUFBLE1BQ2hELE9BQU87QUFDTCxnQkFBUSxJQUFJLGNBQWMsTUFBTSxFQUFFO0FBQ2xDLGdCQUFRLElBQUk7QUFBQSxDQUF5QjtBQUFBLE1BQ3ZDO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFNBQVMsT0FBTztBQUNkLFVBQUksT0FBTztBQUNULGdCQUFRLE1BQU0saUJBQWlCLEtBQUs7QUFBQSxNQUN0QyxPQUFPO0FBQ0wsZ0JBQVEsSUFBSSwrQkFBK0I7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRHJCQSxTQUFTLGVBQWU7QUFKeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sdUJBQXVCO0FBQUEsSUFDdkIsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsUUFDQSxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSztBQUFBO0FBQUEsY0FDM0I7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZUMsTUFBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3ZELFVBQVVBLE1BQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsV0FBV0EsTUFBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUMvQyxVQUFVQSxNQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDLFNBQVNBLE1BQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFHM0MsVUFBVUEsTUFBSyxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLE1BQy9ELGNBQWNBLE1BQUssUUFBUSxrQ0FBVyxpQ0FBaUM7QUFBQSxNQUN2RSxjQUFjQSxNQUFLLFFBQVEsa0NBQVcsaUNBQWlDO0FBQUEsTUFDdkUsY0FBY0EsTUFBSyxRQUFRLGtDQUFXLGlDQUFpQztBQUFBLE1BQ3ZFLGVBQWVBLE1BQUssUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxNQUNsRSxpQkFBaUJBLE1BQUssUUFBUSxrQ0FBVyw2QkFBNkI7QUFBQSxNQUN0RSxpQkFBaUJBLE1BQUssUUFBUSxrQ0FBVyw2QkFBNkI7QUFBQSxNQUN0RSxxQkFBcUJBLE1BQUssUUFBUSxrQ0FBVyxpQ0FBaUM7QUFBQSxJQUNoRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInBhdGgiXQp9Cg==
