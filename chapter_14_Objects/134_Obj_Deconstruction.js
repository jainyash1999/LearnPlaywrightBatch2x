const user = { name: 'john', age: 30, city: 'NYC' };
// Basic destructuring
// const { name, age } = user;
// console.log(name);
// console.log(age);

// Rename variables
const { name: userName, age: Age } = user;
console.log(userName);
console.log(Age);
// destructuring
const { age } = user;

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city);


