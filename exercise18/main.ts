//making array of countries and printing msg orignal order
let countriesToVisit:string[]=["china","dubai","brazill","argentina"];

console.log("orignal order:",countriesToVisit);

//print the array in alphabetical order: without modifying acctual array list
console.log("alphabetical order:",[...countriesToVisit].sort());

//show that the array is still inits orignal order
console.log("still in orignal order:",countriesToVisit);

//print the array in reversed order without modifying the accutal array list
console.log("reverse order:",[...countriesToVisit].reverse());

//show that the array is still inits orignal order
console.log("still in orignal order:",countriesToVisit);

//we have changed the orignal array order now
console.log("orignal order reversed",countriesToVisit.reverse());

//print the array to show its back to its orignal order
console.log("back to orignal order:",countriesToVisit.reverse());

//print the array to show its order has been changed in alphabetical order
console.log("sorted in alphabetical order:",countriesToVisit.sort());

//we have changed the  again orignal array order now
console.log("orignal again reversed",countriesToVisit.reverse());

//
