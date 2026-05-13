//example of null
// Real-life example: A user profile before and after data is fetched
let userProfile = null; // Initially, we have no user data (e.g., before an API call)
let userAuth;//undefined
console.log("User Profile before fetching:", userProfile); // Output: null

// Simulating fetching data from a database or API
userProfile = {
    id: 101,
    username: "tester_pro",
    email: "test@example.com"
};

console.log("User Profile after fetching:", userProfile);

// Resetting the value (e.g., when the user logs out)
userProfile = null;
console.log("User Profile after logout:", userProfile); // Output: null
