"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
////////////////////step1//////////////////////
/// creating a variable
let apple = "apple";
// test for equality
console.log("apple is equal to apple?");
console.log(apple == "apple"); //true
//test for inequality
let orange = "banana";
console.log("orange is equal to banana?");
console.log(orange !== "banana"); //false
///////////step2///////////////////
/////lower case function/////////////
//equal
let upperCaseApple = "APPLE";
//equal to
console.log("\n  is apple equal to apple after converting to lowercase? \n ");
console.log(upperCaseApple.toLowerCase() == "apple"); //true
//in equal
console.log(" \n is apple is not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple"); //false
///////////////step 3/////////////////////////////////
//////////////////NUMERICAL TESTS////////////////////////////
let ten = 10;
let twenty = 20;
//EQUAL TO
console.log("\n ten is equal to twenty?");
console.log(ten == twenty); //false
//NOT EQUAL TO
console.log("\n ten is not equal to twenty?");
console.log(twenty != ten); //true
//////////////GREATER THAN 
console.log("\n ten is greater than to zero?");
console.log(10 > 0); //true
console.log("\n twenty is greater than ten?");
console.log(20 > 10);
//LESS THAN
console.log("\n ten is less than twenty?");
console.log(10 < 20); //true
console.log("\n twenty is less than ten?");
console.log(20 < 10); //false
//////////////GREATER THAN OR EQUAL TO//////////////;
console.log("\n ten is greater than or equal to 5?");
console.log(ten >= 5); //true
/////////////LESS THAN OR EQUAL TO///////////
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10); ///false
///////////////TESTS USING "AND" & "OR " OPERATORS///////////////////////
console.log("/n twenty is is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); //true
////////////USING || (OR)
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 === 20); //true
console.log("\n twenty is greater than 50 0r 20 is not equal to 20");
console.log(20 > 50 || 20 != 20); //false
//////////////////STEP 4 ARRAY ///////////////////
let fruits = ["apple", "banana", "orange"];
///test weather an item is include in array
console.log("\n is orange include in my fruit array");
console.log(fruits.includes("orange"));
//not include
console.log("\n  is orange is not include in my fuits array");
console.log(fruits.includes("!orange"));
