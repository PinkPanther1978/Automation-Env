import { test, expect } from '@playwright/test';

test('Verify search functionality on Playwright website', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('https://playwright.dev/');

  // 2. Click the Search button to open the modal overlay
  const searchButton = page.getByLabel('Search');
  await searchButton.click();

  // 3. Type "Trace Viewer" into the search input field
  const searchInput = page.getByPlaceholder('Search docs');
  await searchInput.fill('Trace Viewer');

  // 4. Click the top search result link inside the dropdown menu instead of pressing Enter
  // This uses a highly stable role-based locator recommended for CI/CD pipelines
  const firstResult = page.getByRole('link', { name: 'Trace Viewer Docs' }).first();
  await firstResult.click();

  // 5. Verify the browser successfully redirected to the Trace Viewer page path
  await expect(page).toHaveURL(/.*trace-viewer/);

  // 6. Capture the successful page screenshot safely
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
