import {defineConfig} from "playwright/test";
import {devices} from "@playwright/test";
import {DEV_PATH} from "env_constants";

console.log("Config has written");

export default defineConfig({
    testDir: 'src/tests/e2e/components',
    outputDir: 'src/tests/e2e/test-results',
    timeout: 30_000,
    use: {
        baseURL: DEV_PATH,
        // headless: true,
        // viewport: {
        //     width: 1920,
        //     height: 980
        // }
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices["Desktop Chrome"]}
        }
    ]
})