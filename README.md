# Playwright Inventory Sorting Test

This project contains a Playwright test script that automates the process of sorting the inventory on the SauceDemo website by price (low to high) and verifies the sorting order.

## Prerequisites

* Node.js and npm (Node Package Manager) installed.
* Playwright installed (see Installation instructions below).
* Git (optional, but recommended for version control).

## Installation

1.  **Clone the repository (if you have cloned it):**
    ```bash
    git clone <your-repository-url>
    cd playwright-inventory-test
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    npx playwright install chromium
    ```

## Running the Test

To run the test, execute the following command:

```bash
npx playwright test inventory-sort.spec.js
