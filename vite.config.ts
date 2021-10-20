import { resolve } from "path";

import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src")
    }
  },
  define: {
    "process.env.VITE_APP_TESTS": process.env.VITE_APP_TESTS
  }
});
