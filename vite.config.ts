import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }: { mode: string }) => {
  // 환경별 base 경로 설정
  const base = mode === 'production' ? "/upnexx/" : "/"
  
  return {
    plugins: [react()],
    base,
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
  }
})