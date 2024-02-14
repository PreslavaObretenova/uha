

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/creatingspaces/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Landingpage/Landingpage.html'),
        app: resolve(__dirname, 'index.html'),
        howto: resolve(__dirname, 'Howtouse/Howtouse.html'),
        info: resolve(__dirname, 'Information/Information.html'),
        aboutus: resolve(__dirname, 'About us/Aboutus.html'),
        
      },
    },
  },
});

