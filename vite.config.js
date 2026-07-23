import { defineConfig } from "vite";
import { resolve } from "path";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        blog: resolve(__dirname, "blog.html"),
        company: resolve(__dirname, "company.html"),
        contact: resolve(__dirname, "contact.html"),
        platform: resolve(__dirname, "platform.html"),
        pricing: resolve(__dirname, "pricing.html"),
        research: resolve(__dirname, "research.html"),
        solutions: resolve(__dirname, "solutions.html"),
      },
    },
  },
});