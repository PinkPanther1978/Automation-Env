import { test, expect } from '@playwright/test';

test('Verify search functionality on Playwright website', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('https://playwright.dev/');

  // 2. Click the Search button to open the modal
  const searchButton = page.getByLabel('Search');
  await searchButton.click();

  // 3. Type "Trace Viewer" into the search input field
  const searchInput = page.getByPlaceholder('Search docs');
  await searchInput.fill('Trace Viewer');

  // 4. Safely wait for the page to navigate to the new URL after hitting Enter
  await Promise.all([
    page.waitForURL(/.*trace-viewer/),
    searchInput.press('Enter')
  ]);

  // 5. Let Playwright handle the screenshot safely
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
