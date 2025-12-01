import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';


test(`Test to create a Lead`, async ({ browserName })=>{
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
    await page1.click('text=Create Lead')   
    await page1.fill('#createLeadForm_companyName','Amazon')  
    await page1.fill('#createLeadForm_firstName','Ishrat')  
    await page1.fill('#createLeadForm_lastName','Baig')
    await page1.fill('#createLeadForm_personalTitle','Miss')
    await page1.fill('#createLeadForm_generalProfTitle','Senior Quality Analyst Engineer')
    await page1.fill('#createLeadForm_annualRevenue','5000000') 
    await page1.fill('#createLeadForm_departmentName','Automation Testing  Department')
    await page1.fill('#createLeadForm_primaryPhoneNumber','9898989898')
        await page1.click('.smallSubmit')

        // Verify created lead details: company, first name, last name
        const companyLocator = page1.locator('#viewLead_companyName_sp');
        if (await companyLocator.count() > 0) {
            await expect(companyLocator).toContainText('Amazon');
        } else {
            await expect(page1.locator(`text=Amazon`)).toBeVisible();
        }

        const firstLocator = page1.locator('#viewLead_firstName_sp');
        if (await firstLocator.count() > 0) {
            await expect(firstLocator).toContainText('Ishrat');
        } else {
            await expect(page1.locator(`text=Ishrat`)).toBeVisible();
        }

        const lastLocator = page1.locator('#viewLead_lastName_sp');
        if (await lastLocator.count() > 0) {
            await expect(lastLocator).toContainText('Baig');
        } else {
            await expect(page1.locator(`text=Baig`)).toBeVisible();
        }

        // Verify status if present
        const statusLocator = page1.locator('#viewLead_statusId_sp');
        if (await statusLocator.count() > 0) {
            await expect(statusLocator).toBeVisible();
            const statusText = await statusLocator.textContent();
            console.log('Status:', statusText?.trim());
        } else {
            console.log('Status element not found; skipping status verification.');
        }

        await browser1.close();
})

