import { test } from '@playwright/test';
import { chromium, webkit } from 'playwright';


test(`Test to launch a browser and get page title`, async ({ browserName })=>{
	// Skip Firefox - only run on Edge (chromium) and WebKit
	test.skip(browserName === 'firefox', 'Running only on Edge and WebKit');


//browser
//context
//page


const browser1 = await chromium.launch({channel:"msedge",headless:false});
// Step1 launchinf the browser and await key word make's sure that the browser has successfully invoked
//Promise 3 stages :
/* 1. Pending
2. Resolved
3. Rejected */


const context1 = await browser1.newContext({ ignoreHTTPSErrors: true });//Stage 2 creating am isolated environment named as context
const page1 = await context1.newPage(); //Stage 3 creating a page instance to load a URL


await page1.goto(`https://www.redbus.in/`, { waitUntil: 'domcontentloaded' })


const browser2 = await webkit.launch();
const context2 = await browser2.newContext({ ignoreHTTPSErrors: true });//Stage 2 creating am isolated environment named as context
const page2 = await context2.newPage(); //Stage 3 creating a page instance to load a URL

await page2.goto(`https://www.flipkart.com/`, { waitUntil: 'domcontentloaded' });


const url = page1.url()
console.log(url);
const title1= await page1.title();
console.log(title1);

const url2 = page2.url()
console.log(url2);
const title2= await page2.title();
console.log(title2);

await browser1.close();
await browser2.close();



})


