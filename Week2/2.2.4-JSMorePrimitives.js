// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let a = 5;
let b = "five";
let c = null;
let d = true;
let e = undefined;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(a, b, c, d, e);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
console.log(`How can I beat you  ${a}  on the dot  ${b} .`);
console.log(`"Hello ${a}," I said, "how's the weather?"`);
// reassign the value of the variable that references "null"
c = "ten";
// print the value and its type
console.log(typeof c, c);
// print a variable that causes a ReferenceError
console.log(e);
// alter the previous line to no longer cause a ReferenceError
e = null;