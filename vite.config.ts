import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          // Split pages into separate chunks to reduce initial bundle size
          home: ['./src/pages/Home.tsx'],
          elite: ['./src/pages/EliteProgram.tsx'],
          general: ['./src/pages/GeneralFitness.tsx'],
          workout: ['./src/pages/CustomWorkoutPlan.tsx'],
          diet: ['./src/pages/DietGuide.tsx'],
          blog: ['./src/pages/Blog.tsx', './src/pages/BlogPost.tsx'],
          legal: ['./src/pages/PrivacyPolicy.tsx', './src/pages/TermsOfService.tsx'],
          contact: ['./src/pages/Contact.tsx'],
          testimonials: ['./src/pages/Testimonials.tsx'],
          freeplan: ['./src/pages/FreePlan.tsx'],
          // UI components that are used across multiple pages
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') ?? [];
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
            extType = 'img';
          }
          // Optimize CSS file naming for better caching
          if (/css/i.test(extType ?? '')) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    target: 'esnext',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  server: {
    open: true,
    cors: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
  base: "/",
});