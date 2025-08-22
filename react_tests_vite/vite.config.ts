import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from "node:path";
import {SERVER_PORT} from "./dotenv.config.ts";

export default defineConfig({
  plugins: [react()],
  server: {
      port: SERVER_PORT
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    exclude: ["src/tests/e2e/components/*_e2e_test/*.spec.ts", "node_modules"],
    globals: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      models: path.resolve(__dirname, 'src/models'),
      api: path.resolve(__dirname, 'src/http/index.ts'),
      services: path.resolve(__dirname, 'src/service'),
      appRoutes: path.resolve(__dirname, 'src/routes'),
      states: path.resolve(__dirname, 'src/models/states'),
      my_reducers: path.resolve(__dirname, 'src/store/reducers'),
      my_selectors: path.resolve(__dirname, 'src/store/reducers/selectors'),

      test_constants: path.resolve(__dirname, 'src/tests/constants'),
      test_utils: path.resolve(__dirname, 'src/tests/utils'),

      env_constants: path.resolve(__dirname, 'dotenv.config.ts')
    },
  },
})
