import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ViteUserConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}']
  }
} satisfies ViteUserConfig)
