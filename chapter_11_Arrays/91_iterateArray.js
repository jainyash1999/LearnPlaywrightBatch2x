let arr = ["start", "mid", "end"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
console.log("----");

// for...of (cleanest for values)
for (i of arr) {
    console.log(i);
}

console.log("----");

arr.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of arr.entries()) {
    console.log(i, test);
}