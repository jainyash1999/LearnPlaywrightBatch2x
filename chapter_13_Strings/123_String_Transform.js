let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));//replaces the first FAIL only
console.log(msg.replaceAll("FAIL", "PASS"));//replaces whereever FAIL appears with PASS
console.log(msg.replace(/FAIL/g, "PASS"));//replaces wherever the FAIL appears with PASS 

// Concatenation
console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));
console.log(`${"Hello"} ${"World"}`);

let url = "https://app.vwo.con?app=yash";
console.log(url.replace(/app/g, "qa"));

let r = "pass,fail,skip".split(",");
console.log(r);//[ 'pass', 'fail', 'skip' ]
let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);






