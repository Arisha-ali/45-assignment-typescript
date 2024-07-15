var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making array of countries and printing msg orignal order
var countriesToVisit = ["china", "dubai", "brazill", "argentina"];
console.log("orignal order:", countriesToVisit);
//print the array in alphabetical order: without modifying acctual array list
console.log("alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still inits orignal order
console.log("still in orignal order:", countriesToVisit);
//print the array in reversed order without modifying the accutal array list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still inits orignal order
console.log("still in orignal order:", countriesToVisit);
//we have changed the orignal array order now
console.log("orignal order reversed", countriesToVisit.reverse());
//print the array to show its back to its orignal order
console.log("back to orignal order:", countriesToVisit.reverse());
//print the array to show its order has been changed in alphabetical order
console.log("sorted in alphabetical order:", countriesToVisit.sort());
//we have changed the  again orignal array order now
console.log("orignal again reversed", countriesToVisit.reverse());
//
