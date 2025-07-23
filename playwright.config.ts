import type { PlaywrightTestConfig } from "@playwright/test";
import { Status } from "allure-js-commons";
import * as os from "node:os";

const config: PlaywrightTestConfig = {
  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        name: "QA Automation - Playwright - DEMO",
        plugins: {
          awesome: {
            options: {
              singleFile: true,
              reportLanguage: "en",
            },
          },
        },
        resultsDir: "allure-results",
        detail: false,
        suiteTitle: true,
        links: {
          issue: {
            nameTemplate: "Issue #%s",
            urlTemplate: "https://issues.example.com/%s",
          },
          tms: {
            nameTemplate: "TMS #%s",
            urlTemplate: "https://tms.example.com/%s",
          },
          jira: {
            urlTemplate: (v) => `https://jira.example.com/browse/${v}`,
          },
        },
        categories: [
          {
            name: "foo",
            messageRegex: "bar",
            traceRegex: "baz",
            matchedStatuses: [Status.FAILED, Status.BROKEN],
          },
        ],
        environmentInfo: {
          // Environment information that will be attached to the report
          browser: process.env.BROWSER,
          browser_version: process.env.BROWSER_VERSION,
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  fullyParallel: true,
  use: {
    screenshot: "only-on-failure",
    video: "on-first-retry",
  },
};

export default config;
