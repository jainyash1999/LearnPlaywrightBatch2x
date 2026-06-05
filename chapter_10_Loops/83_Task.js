let side_1 = 10;
let side_2 = 12;
let side_3 = 10;
if ((side_1 === side_2) && (side_2 === side_3)) {
    console.log("This is a equilateral triangle");
}
else if ((side_1 === side_2) || (side_2 === side_3) || (side_1 === side_3)) {
    console.log("This is a isoceles triangle");
}
else {
    console.log("This is a scalene triangle");
}


for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz.");

    }
    else if (i % 3 === 0) {
        console.log("Fizz");

    }
    else if (i % 5 === 0) {
        console.log("Buzz.");

    }
    else {
        console.log(i);

    }

}