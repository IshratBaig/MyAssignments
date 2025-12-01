const test = require("node:test")

/*function launchBrowser(Browsername)
{
    if (Browsername === "chrome") 
    {
        console.log("Launching chrome Browser");
    } 
    else if (Browsername === "firefox") 
    {
        console.log("Launching Firefox Browser");
    }
    else
    { 
        console.log("No Browser Launched");
    }
}
launchBrowser("chrome");
launchBrowser("firefox");
*/

function runTests()
{
    switch(testType)
    {
        case "Automation":
        console.log("Running Automation Tests");
        break;

        case "Sanity":
        console.log("Running  Tests");
        break;
        case "Regression":
        console.log("Running Regression Tests");
        break;  
        default:
        console.log("Smoke Testing");
        break
    }
}
let testType = "Regression";
runTests();
