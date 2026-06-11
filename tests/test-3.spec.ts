import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Node.js' });
  await page.getByRole('link', { name: 'Node.js' }).click();
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- text: Playwright`);
});