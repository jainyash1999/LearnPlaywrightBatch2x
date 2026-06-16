// // Basic Async and Await
//that any function which returns the promise, we have to use `await` in front of it. Any function which you think can basically work with any kind of promise, we will use `async` in front of it



async function getTestResult() {
    return "Pass";
}

getTestResult.then(function (res) {
    console.log(res);
});


import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator();

});