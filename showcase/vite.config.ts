import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: path.resolve(root, "../registry/ui") },
      { find: "@/lib", replacement: path.resolve(root, "../registry/lib") },
      { find: "@/hooks", replacement: path.resolve(root, "../registry/hooks") },
    ],
  },
  server: { host: "0.0.0.0", port: 4173 },
  preview: { host: "0.0.0.0", port: 4173 },
})
