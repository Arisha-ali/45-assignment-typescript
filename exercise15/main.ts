let guestList = ["areesha","sumair","zunaira","ali"];

let dontCome = guestList[0];

console.log(dontCome, "i am not coming");

guestList.splice (0,1 , "anaya");

guestList.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));