import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/locators');
  await page.getByRole('link', { name: 'VS Code' }).click();
  await page.getByRole('link', { name: 'Installation', exact: true }).click();
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Installation" [level=1]`);
  await page.getByRole('link', { name: 'Web server' }).click();
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Web server" [level=1]`);
});

