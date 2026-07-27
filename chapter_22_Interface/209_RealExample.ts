interface BasePage {
    url: string;
    title: string;
}
interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;

}
interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}

let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);

console.log(" ------- ");


console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username field:", freeTrialPage.usernameSelector);
// interfaces are basically a set of rules, attributes, and behaviors which are incomplete in nature.
// Whenever an object is created or a class object is implemented,
// all the functions and behaviors have to be completed.
// All the variables that we have basically used, if you are using them in the object, have to be initialized 

