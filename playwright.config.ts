import path from "path";
import { PlaywrightTestConfig, devices } from "@playwright/test";

const PORT = process.env.PORT ?? 3000;
const baseURL = `http://localhost:${PORT}`;

// See https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 1,
  outputDir: "test-results/",
  reporter: "html",

  // The server has to be started before the tests are run - this is done automatically via the webServer option
  // See https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    // Set baseURL to allow for relative navigation in tests
    // See https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,

    // Failed tests are retried with tracing
    // See https://playwright.dev/docs/trace-viewer
    trace: "on-first-retry",

    // See https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },

    headless: false,
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // Uncomment to run tests against mobile viewports
    // {
    //   name: "Mobile Chrome",
    //   use: {
    //     ...devices["Pixel 5"],
    //   },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: devices["iPhone 12"],
    // },
  ],
};
export default config;
