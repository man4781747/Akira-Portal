import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import path from 'path'
import fs from 'fs'
var MainHtmlPath = "index.html"

// 自定义插件，用于打印目录下的文件路径
function printFilesPlugin() {
  return {
    name: 'print-files-plugin',
    buildStart() {
      const dirPath = path.resolve(__dirname, 'src/assets')
      printFiles(dirPath)
    }
  }
}

// 递归打印目录下的文件路径
function printFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Could not list the directory: ${err}`)
      process.exit(1)
    }

    files.forEach((file, index) => {
      const filePath = path.join(dirPath, file)

      fs.stat(filePath, (error, stat) => {
        if (error) {
          console.error(`Error stating file: ${error}`)
          return
        }

        if (stat.isFile()) {
          console.log(`File: ${filePath}`)
        } else if (stat.isDirectory()) {
          console.log(`Directory: ${filePath}`)
          printFiles(filePath)
        }
      })
    })
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), printFilesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        // a: "./" + MainHtmlPath,
        indexPath: "index.html",
      },
      
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
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
