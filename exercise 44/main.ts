// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items:string[]){
console.log("\n making a sandwich with following items: \n");

    items.forEach(singleItems => console.log(singleItems))
    console.log("\n now enjoy sandwich \n");
    
    
}
makeSandwich("Bread","Butter")
makeSandwich("Chicken","Cheese","Egg")
makeSandwich("Bread", "Egg","Chicken", "Mayones","Ketchup","Tomato")

