// @ts-check
const { test, expect } = require('@playwright/test');
test('testboxes', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');

    //await page.getByPlaceholder('Full Name').fill('Mandar Dinkar Deo')

    await page.locator('id=userName').fill('Mandar Dinkar Deo')
    await page.getByPlaceholder('name@example.com').fill('mandardeo@yahoo.com')
    await page.getByPlaceholder('Current Address').fill('D-103 Suvidha Angan society Narhe Pune-411041')
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Email:mandardeo@yahoo.com')).toBeVisible();

  });