let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go goa" : "No Goa";
console.log(rj_will_goa)


let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS


let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");



let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//  Nested Ternary

// Multiple Condition
let age = 26;
let is_yash_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_yash_goa);




let age_ankit = 45;
let is_ankit_s = age_ankit > 18 ? (age_ankit > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_ankit_s);


/// --------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// ---- 


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);

let a = 10;
let b = 20;
let c = a > b ? `Max of ${a} and ${b} is ${a}` : `Max of ${a} and ${b} is ${b}`;
console.log(c);

let e = 8, f = 3, g = 7;
let h = e > f ? (e > g ? `Max of ${e} ,${f} and ${g} is ${e}` : `Max of ${e},${f} and ${g} is ${g}`) : (f > g ? `Max of ${e} ,${f} and ${g} is ${f}` : `Max of ${e} ,${f} and ${g} is ${g}`);
console.log(h);