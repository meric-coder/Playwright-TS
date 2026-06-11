import { test, expect } from '@playwright/test';

test('apple com', async ({ page }) => {
await page.goto('https://www.apple.com/');
await page.getByLabel('Store', { exact: true }).click();
await page.getByLabel('Product', { exact: true }).getByRole('link', { name: 'iPhone' }).click();
await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Shop iPhone" [level=1]`);
});