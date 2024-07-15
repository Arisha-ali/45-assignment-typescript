var guestList = ["areesha", "sumair", "zunaira", "ali"];
var dontCome = guestList[0];
console.log(dontCome, "i am not coming");
guestList.splice(0, 1, "anaya");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });
