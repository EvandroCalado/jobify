/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      reporters: ["default", "html"],
      environment: "jsdom",
      setupFiles: ["./.test/setup.ts"],
      exclude: ["**/types/**"],
      include: [
        "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "src/**/{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      ],
      coverage: {
        enabled: true,
        exclude: [
          "src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
          "src/types",
          "src/utils",
          "src/styles",
          "src/pages",
          "src/contexts",
          "src/hooks",
          "src/App.*",
          "src/main.*",
          "src/vite-env.d.*",
          "src/components/index.*",
          "src/components/**/index.*",
          ".storybook",
          "html",
          ".eslintrc.*",
          ".prettierrc.*",
        ],
      },
    },
  })
);
