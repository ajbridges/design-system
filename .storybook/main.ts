import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { mergeConfig } from "vite"

const root = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
  staticDirs: ["../showcase/public"],
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@/components/ui": path.resolve(root, "../registry/ui"),
          "@/lib": path.resolve(root, "../registry/lib"),
          "@/hooks": path.resolve(root, "../registry/hooks"),
        },
      },
    }),
}

export default config
