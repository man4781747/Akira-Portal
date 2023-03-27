import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';

var MainHtmlPath = "index.html"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        // a: "./" + MainHtmlPath,
        indexPath: "index.html",
      },
      
      output: {
        assetFileNames: (assetInfo) => {
          // let extType = assetInfo.name.split('.').at(1);
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `static/[name]/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'static/[name]/js/[name]-[hash].js',
        entryFileNames: 'static/[name]/js/[name]-[hash].js',
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8998
  }
})
