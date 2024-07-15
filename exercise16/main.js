// creating a guest list aaray
var guestList = ["areesha", "sumair", "zunaira", "ali"];
//making a variable for those guest who cant come
var dontCome = guestList[0];
//printing the name of guest who can not come 
console.log(dontCome, "I AM NOT COMING");
//add or rempve values from guestlist array
guestList.splice(0, 1, "anaya");
//message printing for bigger table
console.log("good news! we have found a bigger table for dinner");
//add a new guest at starting index of array
guestList.unshift("ayat");
//add a new guest at ending index of array
guestList.push("areeba");
//get a middle index of our guestlist array
var middleIndex = (guestList.length / 2);
//add a new guest to middle index of array
guestList.splice(middleIndex, 0, "salman");
//print a msg of updatelist
console.log("updated list of our guests");
//send invitation one by one
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me?")); });
