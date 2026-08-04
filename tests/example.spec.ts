import { test, expect } from '@playwright/test';

test('Verify search functionality on Playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev');

  const searchButton = page.getByLabel('Search');
  await searchButton.click();

  const searchInput = page.getByPlaceholder('Search docs');
  await searchInput.fill('Trace Viewer');

  // We intentionally expect a completely wrong URL path here to trigger a failure
  await expect(page).toHaveURL(/.*this-is-a-forced-failure/);

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
