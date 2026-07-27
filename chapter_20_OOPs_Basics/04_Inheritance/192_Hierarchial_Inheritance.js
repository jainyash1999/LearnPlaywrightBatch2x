// One Parent, Multiple Children
// BasePage -> LoginPage, DashboardPage, CartPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }
}

class LoginPage extends BasePage {
    constructor() {
        super("Login Page");
    }

    login(username, password) {
        console.log(`[LOGIN] Logging in with ${username} and ${password}`);
    }
}

class DashboardPage extends BasePage {
    constructor() {
        super("Dashboard Page");
    }

    displayWidgets() {
        console.log("[DASHBOARD] Displaying widgets");
    }
}

class CartPage extends BasePage {
    constructor() {
        super("Cart Page");
    }

    viewCart() {
        console.log("[CART] Viewing cart items");
    }
}

let loginPage = new LoginPage();
loginPage.open();
loginPage.login("user123", "pass123");

let dashboardPage = new DashboardPage();
dashboardPage.open();
dashboardPage.displayWidgets();

let cartPage = new CartPage();
cartPage.open();
cartPage.viewCart();

// [OPEN] Login Page
// [LOGIN] Logging in with user123 and pass123
// [OPEN] Dashboard Page
// [DASHBOARD] Displaying widgets
// [OPEN] Cart Page
// [CART] Viewing cart items

