// Higher-Order Functions
// A function that takes a function as argument or returns a function.
function testRun(testName, testFn) {
    console.log(testName);
    let testStatus = testFn();
    console.log(testStatus);

}
function testPass() {
    return "Pass";
}
function testFail() {
    return "Fail";
}

testRun("Login Test", testPass);
testRun("Login Test", testFail);
