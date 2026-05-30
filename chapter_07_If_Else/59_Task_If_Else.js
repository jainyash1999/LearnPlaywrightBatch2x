
//Question 1 — HTTP Status Code Categorizer
let statusCode = 404;

if (statusCode >= 200 && statusCode < 300) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode < 500) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode < 600) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}


//Question 2 — Test Case Pass/Fail Verdict
let expected = "Login Successful";
let actual = "Login Successful";
if (expected === actual) {
    console.log("✅ Test Passed");
}
else {
    console.log(`❌ Test Failed — Expected:${expected}, Got:${actual}`);
}

//Question 3 — Bug Severity Classifier
let bugScore = 8;
if (bugScore >= 9 && bugScore <= 10) {
    console.log("Critical");
}
else if (bugScore >= 7 && bugScore <= 8) {
    console.log("High");
}
else if (bugScore >= 4 && bugScore <= 6) {
    console.log("Medium");
}
else if (bugScore >= 1 && bugScore <= 3) {
    console.log("Low");
}
else {
    console.log("Invalid Score");
}

//Question 4 — Build Health Reporter
let testPassPercentage = 98;
if (testPassPercentage === 100) {
    console.log("🟢Green Build");
}
else if (testPassPercentage >= 90 && testPassPercentage <= 99) {
    console.log("🟡Stable (investigate failures)");
}
else if (testPassPercentage >= 70 && testPassPercentage <= 89) {
    console.log("🟠Unstable");
}
else {
    console.log("🔴Broken Build (block deployment)");
}

//Question 5 — Login Lockout After Failed Attempts

let Attempts = 4;

if (Attempts < 0) {

    console.log("Invalid");

} else if (Attempts === 0) {

    console.log("Login successful");

} else if (Attempts >= 3) {

    console.log("🔒 Account Locked — Contact support");

} else {

    console.log(`${3 - Attempts} attempt(s) left before lockout`);

}
