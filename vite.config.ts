import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: "/test_ai/", // 이 부분을 수정합니다.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    host: true,
    port: 5173
  }
})
