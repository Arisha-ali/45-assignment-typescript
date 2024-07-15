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
//inform that only two guest can invited dinner with me
console.log("unfortunately,the new dinner table wont arrive on time,so i can only invite two guests to dinner with me");
//using while loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry,".concat(removedGuest, "i cant invite you to dinner"));
}
//sending a invitation the last two guest 
console.log("invitation the last two guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",you are still invited to dinner")); });
// removing last guest the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
