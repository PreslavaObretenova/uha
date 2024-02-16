

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/creatingspaces/",
  build: {
    rollupOptions: {
      input: {
        lp: resolve(__dirname, 'Landingpage/Landingpage.html'),
        app: resolve(__dirname, 'Webapp/Webapp.html'),
        howto: resolve(__dirname, 'Howtouse/Howtouse.html'),
        info: resolve(__dirname, 'Information/Information.html'),
      },
    },
  },
});

