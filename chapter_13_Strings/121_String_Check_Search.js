// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging"));//true
console.log(url.includes("production"));//false

//startwith & endswith
console.log(url.startsWith("https:"));//true
console.log(url.startsWith("http://"));//false
console.log(url.endsWith("true"));//true

//indexof & lastindexof
console.log(url.indexOf("a"));//index of a when it first appears in url //10
console.log(url.lastIndexOf("a"));//index of a when it appeared last in url //24

console.log(url.indexOf("nothere"));//if not present in string returns -1
console.log(url.indexOf("x"));//-1

//search
console.log(url.search(/login/));//returns the starting index of the regex or substring searched for
console.log(url.search(/vwo/));//16

/* /regex/ - Regular EXPRESSION - These are nothing but a pattern that you can find within
  the strings automatically. */






