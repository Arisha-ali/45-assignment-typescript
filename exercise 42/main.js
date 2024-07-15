"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `the great ${name}`);
}
let magicians_names = ["ali", "aliyan", "ayan"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
