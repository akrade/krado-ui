import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'KradoUI',
      formats: ['es'],
      fileName: (format) => `krado-ui.js`
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        // Preserve CSS as separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'krado-ui.css';
          }
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false,
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  },
  css: {
    postcss: {
      plugins: []
    }
  }
});
