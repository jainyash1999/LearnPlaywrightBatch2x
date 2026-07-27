class F1 {
    money() {
        console.log("1Cr");
    }
}
class F2 {
    money() {
        console.log("1.5Cr");
    }
}

// class C extends A, B { }  // ❌ SyntaxError

// class Son extends F1, F2 {

// }

// JavaScript does not support native multiple inheritance.
// An object can only have a single prototype link,
// meaning a class can only extend one parent class at a time.
// However, you can achieve the exact same behavior using
// alternative design patterns like Mixins or Object Composition