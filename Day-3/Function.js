//Task1: Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,<name>!" to the console.
function userProfile(name)
{
    console.log("Hello, " + name + "!");
}
userProfile("Ishrat");
userProfile("John");
userProfile("Alice");

//Task2: Create an arrow function named `double` that takes a number as a parameter and returns double its value
const double = (number) => number * 2;
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

//Task3:Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);

/* Task4:Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function. */

function getUserData(callback)
{
    setTimeout(() => {
    callback();
}, 3000);
}
getUserData(() => {
    console.log("Call Back Function");
});