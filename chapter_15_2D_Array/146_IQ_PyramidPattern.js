//   *

//  ***

// ***** 

function pyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        //for spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        //for stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
}
pyramidPattern(5);