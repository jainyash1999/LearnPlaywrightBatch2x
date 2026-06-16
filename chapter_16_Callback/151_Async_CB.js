console.log("Test1:Started");
setTimeout(function () {
    console.log("Test 2: API response received");

}, 2000);

console.log("Test3:Moving to next test");

//output
// Test1:Started
// Test3:Moving to next test
// Test 2: API response received


// **Why does Test 3 print before Test 2?**