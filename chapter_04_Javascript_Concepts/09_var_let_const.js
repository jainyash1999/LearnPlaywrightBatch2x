var v = 10;
let l = 3;
const c = 3.14;

var browser = "chrome";
var browser = "edge";//redeclaration allowed
browser = "safari";//reassignment allowed

var testCases = ["login", "signup", "logout"];


for (var i = 0; i < testCases.length; i++) {
    console.log("Running Test", testCases[i]);
}
console.log("loop counter leaked outside:", i);
