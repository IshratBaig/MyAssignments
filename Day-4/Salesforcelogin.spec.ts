import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';


test(`Test to create Account in salesforce`, async ({ browserName })=>{
    // Run only on Chrome (chromium with chrome channel)
    test.skip(browserName !== 'chromium', 'Running only on Chrome browser');
    
    const browser1 = await chromium.launch({channel:"chrome",headless:false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage(); 
    await page1.goto(`https://login.salesforce.com/`)
    await page1.getByLabel('Username').fill('learntogrow123542@agentforce.com');
    await page1.getByLabel('Password').fill('Test@123');
    await page1.locator('#Login').click();
    await page1.waitForTimeout(600000);
    
    // Add any assertions or further steps here as needed
    
    await browser1.close();
});
