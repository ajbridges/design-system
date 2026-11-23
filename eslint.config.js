import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"

export default tseslint.config({
  files: ["registry/**/*.{ts,tsx}", "showcase/**/*.{ts,tsx}", "stories/**/*.{ts,tsx}"],
  extends: [tseslint.configs.base],
  plugins: { "react-hooks": reactHooks },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  rules: {
    "react-hooks/set-state-in-effect": "error",
    "react-hooks/rules-of-hooks": "error",
  },
})
