class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APIPage();
test.setup();

//APITest: open browser

// This JavaScript code demonstrates Method Overriding, a key concept in Object-Oriented Programming.

// Here's a breakdown:

// BaseTest Class (Parent Class): Defines a method setup() that logs "Base: open browser".
// APIPage Class (Child Class): extends BaseTest, inheriting its properties and methods. It also defines its own setup() method, which logs "APITest: open browser".
// This is method overriding – the child class provides a specific implementation for a method already defined in its parent.
// Execution:
// `let test = new APIPage();