// @ts-check
// inventory-sort.spec.js
const { test, expect, chromium } = require('@playwright/test');

test('Sort Inventory by Price (Low to High)', async ({ page}) => {
  // 1. Open the Inventory Page: Navigate to SauceDemo Inventory Page.
 
  const browser = await chromium.launch({ headless: false }); // Set headless to false to see the browser
 // const Page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/v1/inventory.html');
  await page.waitForTimeout(1000);

  // 2. Locate the Sorting Dropdown: Identify and interact with the dropdown.
  const sortDropdown = page.locator('.product_sort_container');
  await sortDropdown.click();
  await page.waitForTimeout(1000);


  // 3. Select "Price (Low to High)" option
  await page.selectOption('.product_sort_container', 'lohi');
  await page.waitForTimeout(1000);

  // 4. Verify Sorting Order Results by adding assertions.
  // Extract product prices
  const productPrices = await page.locator('.inventory_item_price').allTextContents();
  const prices = productPrices.map(price => parseFloat(price.replace('$', '')));

  // Assert that prices are sorted in ascending order
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }

  // Assert that the first item has the lowest price
  expect(prices[0]).toBe(Math.min(...prices));

  // Assert that the last item has the highest price
  expect(prices[prices.length - 1]).toBe(Math.max(...prices));

  console.log("Prices in Ascending Order: " + prices);
  await page.waitForTimeout(2000);

    // Close the browser
  await browser.close();

});
