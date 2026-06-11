import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/locators');
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Locators');
  await page.getByRole('link', { name: 'Filtering Locators Locators' }).click();
  await expect(page.locator('#filtering-locators')).toMatchAriaSnapshot(`
    - heading "Filtering LocatorsDirect link to Filtering Locators" [level=2]:
      - text: ""
      - link "Direct link to Filtering Locators":
        - /url: "#filtering-locators"
        - text: "#"
    `);
});