const { resolve } = require("path");
const { defineConfig } = require("vite");
import legacy from "@vitejs/plugin-legacy";

module.exports = defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        guestbook: resolve(__dirname, "guestbook.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11", "Firefox ESR"],
      polyfills: ["web.queue-microtask"],
    }),
  ],
});
