import { test, expect } from '@playwright/test';
import { Helper } from '../../pages/Helper'


test('Verify helper methods', async ({ page }) => {

  const objHelper = new Helper(page)
 
  await objHelper.navigatetoPage('https://demoqa.com/text-box');
  const ramdomstring =await objHelper.getRamdomString(5)
  console.log("Generated random string is ",ramdomstring)
  await page.waitForTimeout(5000)

});