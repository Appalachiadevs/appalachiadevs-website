import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use root-based asset paths so deep links like `/services` load JS/CSS correctly.
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: true
  }
});

