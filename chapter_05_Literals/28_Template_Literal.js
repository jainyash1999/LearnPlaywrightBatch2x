let firstname = "Yash";
let fullname = `Hi ${firstname} Jain`;
console.log(fullname);

// examples where template literal concept is used
let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.workday.com/users/${userId}`;
console.log(apiUrl);
// Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const testStatus = "FAILED";
const duration = 2.3;
console.log(`[${testStatus}] ${testName} completed in ${duration}s`);

//screenshots
const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


//api payload
const username = "yash";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;

console.log(payload);