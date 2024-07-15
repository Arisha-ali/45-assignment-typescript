//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "areesha memon";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
var perName = "ali ";
console.log(perName.toLowerCase());
console.log(perName.toUpperCase());
console.log(perName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
