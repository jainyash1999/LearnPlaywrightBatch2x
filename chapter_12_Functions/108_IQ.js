function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
//runTest("Login", "pass", 320);//no output as not assigned 
const r = runTest("Login", "pass", 320);//need to assign to get return value
console.log(r);