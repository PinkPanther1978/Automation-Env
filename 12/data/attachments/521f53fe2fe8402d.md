# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Verify search functionality on Playwright website
- Location: tests/example.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*this-is-a-forced-failure/
Received string:  "https://playwright.dev/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × locator resolved to <html lang="en" dir="ltr" data-theme="light" data-has-hydrated="true" data-theme-choice="system" class="plugin-pages plugin-id-default" data-rh="lang,dir,class,data-has-hydrated">…</html>
       - unexpected value "https://playwright.dev/"

```

```yaml
- button "Search" [expanded]:
  - banner:
    - text: Search
    - searchbox "Search": Trace Viewer
    - button "Clear the query"
    - button "Cancel":
      - img
  - text: Getting Started
  - listbox "Search":
    - option "Trace viewer" [selected]:
      - link "Trace viewer":
        - /url: /docs/trace-viewer-intro
        - img
        - mark: Trace
        - mark: viewer
        - img
    - option "Introduction Trace viewer":
      - link "Introduction Trace viewer":
        - /url: /docs/trace-viewer-intro#introduction
        - img
        - img
        - text: Introduction
        - mark: Trace
        - mark: viewer
    - option "Recording a Trace Trace viewer":
      - link "Recording a Trace Trace viewer":
        - /url: /docs/trace-viewer-intro#recording-a-trace
        - img
        - img
        - text: Recording a
        - mark: Trace
        - mark: Trace
        - mark: viewer
    - option "Opening the HTML report Trace viewer":
      - link "Opening the HTML report Trace viewer":
        - /url: /docs/trace-viewer-intro#opening-the-html-report
        - img
        - img
        - text: Opening the HTML report
        - mark: Trace
        - mark: viewer
    - option "Opening the trace Trace viewer":
      - link "Opening the trace Trace viewer":
        - /url: /docs/trace-viewer-intro#opening-the-trace
        - img
        - img
        - text: Opening the
        - mark: trace
        - mark: Trace
        - mark: viewer
  - text: Guides
  - listbox "Search":
    - option "Trace viewer":
      - link "Trace viewer":
        - /url: /docs/trace-viewer
        - img
        - mark: Trace
        - mark: viewer
    - option "Opening Trace Viewer Trace viewer":
      - link "Opening Trace Viewer Trace viewer":
        - /url: /docs/trace-viewer#opening-trace-viewer
        - img
        - img
        - text: Opening
        - mark: Trace
        - mark: Viewer
        - mark: Trace
        - mark: viewer
    - option "Trace Viewer features Trace viewer":
      - link "Trace Viewer features Trace viewer":
        - /url: /docs/trace-viewer#trace-viewer-features
        - img
        - img
        - mark: Trace
        - mark: Viewer
        - text: features
        - mark: Trace
        - mark: viewer
    - option "Introduction Trace viewer":
      - link "Introduction Trace viewer":
        - /url: /docs/trace-viewer#introduction
        - img
        - img
        - text: Introduction
        - mark: Trace
        - mark: viewer
    - option "Trace Viewer Debugging Tests":
      - link "Trace Viewer Debugging Tests":
        - /url: /docs/debug#trace-viewer
        - img
        - mark: Trace
        - mark: Viewer
        - text: Debugging Tests
  - text: Docs
  - listbox "Search":
    - option "UI Mode and Trace Viewer Improvements Release notes":
      - link "UI Mode and Trace Viewer Improvements Release notes":
        - /url: /docs/release-notes#ui-mode-and-trace-viewer-improvements
        - img
        - text: UI Mode and
        - mark: Trace
        - mark: Viewer
        - text: Improvements Release notes
    - option "Trace Viewer and HTML Reporter Updates Release notes":
      - link "Trace Viewer and HTML Reporter Updates Release notes":
        - /url: /docs/release-notes#trace-viewer-and-html-reporter-updates
        - img
        - mark: Trace
        - mark: Viewer
        - text: and HTML Reporter Updates Release notes
    - option "UI Mode / Trace Viewer Updates Release notes":
      - link "UI Mode / Trace Viewer Updates Release notes":
        - /url: /docs/release-notes#ui-mode--trace-viewer-updates
        - img
        - text: UI Mode /
        - mark: Trace
        - mark: Viewer
        - text: Updates Release notes
    - option "Trace Viewer Update Release notes":
      - link "Trace Viewer Update Release notes":
        - /url: /docs/release-notes#trace-viewer-update
        - img
        - mark: Trace
        - mark: Viewer
        - text: Update Release notes
    - option "🎭 Playwright Trace Viewer Release notes":
      - link "🎭 Playwright Trace Viewer Release notes":
        - /url: /docs/release-notes#-playwright-trace-viewer
        - img
        - text: 🎭 Playwright
        - mark: Trace
        - mark: Viewer
        - text: Release notes
  - text: Playwright Test
  - listbox "Search":
    - option "Trace Viewer Command line":
      - link "Trace Viewer Command line":
        - /url: /docs/test-cli#trace-viewer
        - img
        - mark: Trace
        - mark: Viewer
        - text: Command line
  - link "See all 72 results":
    - /url: /search?q=Trace%20Viewer
  - contentinfo:
    - link "Powered by Algolia":
      - /url: https://www.algolia.com/ref/docsearch/?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch
      - text: Powered by
      - img "Algolia"
    - list:
      - listitem:
        - img "Arrow down"
        - img "Arrow up"
        - text: Navigate
      - listitem:
        - img "Enter key"
        - text: Select
      - listitem: ESC Close
- region "Skip to main content":
  - link "Skip to main content":
    - /url: "#__docusaurus_skipToContent_fallback"
- navigation "Main":
  - link "Playwright logo Playwright":
    - /url: /
    - img "Playwright logo"
    - text: Playwright
  - link "Docs":
    - /url: /docs/intro
  - link "MCP":
    - /url: /mcp/introduction
  - link "CLI":
    - /url: /agent-cli/introduction
  - link "API":
    - /url: /docs/api/class-playwright
  - button "Node.js"
  - link "GitHub repository":
    - /url: https://github.com/microsoft/playwright
  - link "Discord server":
    - /url: https://aka.ms/playwright/discord
  - button "Switch between dark and light mode (currently system mode)"
  - button "Search (Control+k)": Search Ctrl K
- banner:
  - heading "Playwright enables reliable web automation for testing, scripting, and AI agents." [level=1]
  - paragraph:
    - text: One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for
    - link "TypeScript":
      - /url: https://playwright.dev/docs/intro
    - text: ","
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - link "Get started":
    - /url: /docs/intro
  - link "Star microsoft/playwright on GitHub":
    - /url: https://github.com/microsoft/playwright
    - text: Star
  - link "93k+ stargazers on GitHub":
    - /url: https://github.com/microsoft/playwright/stargazers
    - text: 93k+
- main:
  - heading "Playwright Test" [level=3]
  - paragraph: Full-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.
  - code: npm init playwright@latest
  - link "Testing documentation":
    - /url: /docs/intro
  - heading "Playwright CLI" [level=3]
  - paragraph: Token-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.
  - code: npm i -g @playwright/cli@latest
  - link "CLI documentation":
    - /url: /docs/getting-started-cli
  - heading "Playwright MCP" [level=3]
  - paragraph: Model Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.
  - code: npx @playwright/mcp@latest
  - link "MCP documentation":
    - /url: /docs/getting-started-mcp
  - heading "Built for testing" [level=2]
  - heading "Auto-wait and web-first assertions" [level=4]
  - paragraph: Playwright waits for elements to be actionable before performing actions. Assertions automatically retry until conditions are met. No artificial timeouts, no flaky tests.
  - heading "Test isolation" [level=4]
  - paragraph: Each test gets a fresh browser context — equivalent to a brand new browser profile. Full isolation with near-zero overhead. Save authentication state once and reuse it across tests.
  - heading "Resilient locators" [level=4]
  - paragraph:
    - text: "Find elements with selectors that mirror how users see the page:"
    - code: getByRole
    - text: ","
    - code: getByLabel
    - text: ","
    - code: getByPlaceholder
    - text: ","
    - code: getByTestId
    - text: . No brittle CSS paths.
  - heading "Parallelism and sharding" [level=4]
  - paragraph: Tests run in parallel by default across all configured browsers. Shard across multiple machines for faster CI. Full cross-browser coverage on every commit.
  - heading "Built for AI agents" [level=2]
  - heading "Accessibility snapshots, not screenshots" [level=4]
  - paragraph: Agents interact with pages through structured accessibility trees — element roles, names, and refs. Deterministic and unambiguous, no vision models required.
  - heading "MCP server" [level=4]
  - paragraph:
    - text: Drop-in
    - link "Model Context Protocol":
      - /url: https://modelcontextprotocol.io
    - text: server for VS Code, Cursor, Claude Desktop, Windsurf, and any MCP client. Full browser control through standard tool calls.
  - heading "CLI for coding agents" [level=4]
  - paragraph: Token-efficient command-line interface with installable skills. Purpose-built for Claude Code, GitHub Copilot, and similar coding agents that need to balance browser automation with large codebases.
  - heading "Session monitoring" [level=4]
  - paragraph: Visual dashboard with live screencast previews of all running browser sessions. Click any session to zoom in and take control.
  - heading "Powerful tooling" [level=2]
  - heading "Test generator" [level=4]:
    - link "Test generator":
      - /url: docs/codegen
  - paragraph: Record your actions in the browser and Playwright writes the test code. Generate assertions from the recording toolbar. Pick locators by clicking on elements.
  - heading "Trace Viewer" [level=4]:
    - link "Trace Viewer":
      - /url: docs/trace-viewer-intro
  - paragraph: Full timeline of test execution with DOM snapshots, network requests, console logs, and screenshots at every step. Investigate failures without re-running.
  - heading "VS Code extension" [level=4]:
    - link "VS Code extension":
      - /url: docs/getting-started-vscode
  - paragraph: Run, debug, and generate tests directly in the editor. Set breakpoints, live-inspect locators in the browser, and view full execution traces in the sidebar.
  - img "Chromium, Firefox, WebKit"
  - paragraph:
    - text: Any browser. Any platform. Chromium, Firefox, and WebKit on Linux, macOS, and Windows. Headless and headed. Also available for
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - heading "Chosen by companies and open source projects" [level=2]
  - list:
    - listitem:
      - link "VS Code":
        - /url: https://code.visualstudio.com
        - img "VS Code"
    - listitem:
      - link "Bing":
        - /url: https://bing.com
        - img "Bing"
    - listitem:
      - link "Outlook":
        - /url: https://outlook.com
        - img "Outlook"
    - listitem:
      - link "Disney+ Hotstar":
        - /url: https://www.hotstar.com/
        - img "Disney+ Hotstar"
    - listitem:
      - link "Material UI":
        - /url: https://github.com/mui-org/material-ui
        - img "Material UI"
    - listitem:
      - link "ING":
        - /url: https://github.com/ing-bank/lion
        - img "ING"
    - listitem:
      - link "Adobe":
        - /url: https://github.com/adobe/spectrum-web-components
        - img "Adobe"
    - listitem:
      - link "React Navigation":
        - /url: https://github.com/react-navigation/react-navigation
        - img "React Navigation"
    - listitem:
      - link "Accessibility Insights":
        - /url: https://accessibilityinsights.io/
        - img "Accessibility Insights"
- contentinfo:
  - text: Learn
  - list:
    - listitem:
      - link "Getting started":
        - /url: /docs/intro
    - listitem:
      - link "Playwright Training(opens in new tab)":
        - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
        - text: Playwright Training
        - img "(opens in new tab)"
    - listitem:
      - link "Learn Videos":
        - /url: /community/learn-videos
    - listitem:
      - link "Feature Videos":
        - /url: /community/feature-videos
  - text: Community
  - list:
    - listitem:
      - link "Stack Overflow(opens in new tab)":
        - /url: https://stackoverflow.com/questions/tagged/playwright
        - text: Stack Overflow
        - img "(opens in new tab)"
    - listitem:
      - link "Discord(opens in new tab)":
        - /url: https://aka.ms/playwright/discord
        - text: Discord
        - img "(opens in new tab)"
    - listitem:
      - link "X(opens in new tab)":
        - /url: https://x.com/playwrightweb
        - text: X
        - img "(opens in new tab)"
    - listitem:
      - link "LinkedIn(opens in new tab)":
        - /url: https://www.linkedin.com/company/playwrightweb
        - text: LinkedIn
        - img "(opens in new tab)"
  - text: More
  - list:
    - listitem:
      - link "GitHub(opens in new tab)":
        - /url: https://github.com/microsoft/playwright
        - text: GitHub
        - img "(opens in new tab)"
    - listitem:
      - link "YouTube(opens in new tab)":
        - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
        - text: YouTube
        - img "(opens in new tab)"
    - listitem:
      - link "Blog(opens in new tab)":
        - /url: https://dev.to/playwright
        - text: Blog
        - img "(opens in new tab)"
    - listitem:
      - link "Ambassadors":
        - /url: /community/ambassadors
    - listitem:
      - link "Microsoft Privacy Statement(opens in new tab)":
        - /url: https://go.microsoft.com/fwlink/?LinkId=521839
        - text: Microsoft Privacy Statement
        - img "(opens in new tab)"
  - text: Copyright © 2026 Microsoft
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify search functionality on Playwright website', async ({ page }) => {
  4  |   await page.goto('https://playwright.dev');
  5  | 
  6  |   const searchButton = page.getByLabel('Search');
  7  |   await searchButton.click();
  8  | 
  9  |   const searchInput = page.getByPlaceholder('Search docs');
  10 |   await searchInput.fill('Trace Viewer');
  11 | 
  12 |   // We intentionally expect a completely wrong URL path here to trigger a failure
> 13 |   await expect(page).toHaveURL(/.*this-is-a-forced-failure/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  14 | 
  15 |   await page.screenshot({ path: 'screenshot.png', fullPage: true });
  16 | });
  17 | 
```