"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//first version//
// let alien_color = " green ";
// if (alien_color ===" green ") {
//     console.log("(version 1),alien color is green ,player earned 5 points.");
// }else if(alien_color==="yellow"){
//     console.log("(version 1),alien color is yellow ,player earned 10 points.");
// }else if(alien_color==="red"){
//     console.log("(version 1),alien color is red ,player earned 15 points.");;
// }
// //second version////
//  let alien_color="yellow";
//  if (alien_color==="green") {
//     console.log("(version 2)alien color is green,player earned 5 points. ");
//  }else if(alien_color==="yellow"){
// console.log("(version2)alien color is yellow,player earned 10 points.");
//  }else if(alien_color==="red"){
//     console.log("(alien color is red,plyer earned 15 points");
//  }
//// version 3//////
let alien_color = "red";
if (alien_color === "green") {
    console.log("(version 3)alien color is green,player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("(version 3)alien color is yellow,player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("(version 3)alien color is red, player  earned 15 points.");
}
