import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';


test(`Test to Edit a Lead`, async ({ browserName })=>{
    // Run only on Chrome (chromium with chrome channel)
    test.skip(browserName !== 'chromium', 'Running only on Chrome browser');
    
    const browser1 = await chromium.launch({channel:"chrome",headless:false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage(); 
    await page1.goto(`http://leaftaps.com/opentaps/control/main`)
    await page1.fill('#username','demosalesmanager')    
    await page1.fill('#password','crmsfa')
    await page1.click('.decorativeSubmit')
    await page1.click('text=CRM/SFA')
    await page1.click('text=Leads')
    await page1.locator("//a[text()='Find Leads']").click();
    await page1.locator(`(//input[@name='firstName'])[3]`).fill('Ishrat');
    await page1.locator(`//button[text()='Find Leads']`).click();   
    await page1.waitForTimeout(3000); // 3000 ms = 3 seconds
    await page1.locator(`(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]`).click();
    await page1.waitForTimeout(3000); 
    await page1.click('text=Edit');
    await page1.waitForTimeout(3000);
    await page1.locator(`//input[@id="updateLeadForm_companyName"]`).fill('Amazon_Updated');
    await page1.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill('8000000');
    await page1.locator(`(//input[@id="updateLeadForm_departmentName"])`).fill('Quality Assurance Department Updated');
    await page1.locator(`#updateLeadForm_description`).fill('Updating description field');
    await page1.locator(`(//input[@name="submitButton"])[1]`).click();
    await page1.waitForTimeout(5000);
    const title1= await page1.title();
    console.log(title1);
});
