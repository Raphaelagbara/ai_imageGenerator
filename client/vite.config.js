import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  servers: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
