"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["ali", "areesha", "sumair", "zunairah", "admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some user");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`hello ${oneUser},would you like to see status report?`);
        }
        else {
            console.log(`hello ${oneUser},thank you for logging again!`);
        }
    });
}
