let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = false;
y = null;
z = undefined;
// print x, y, and z
console.log(!{x}); // prints false
console.log(y); // prints null
console.log(z); // prints undefined


const a = "name";//a = false;
const b = [];//b = null;
const c = {};//c = undefined
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = "value";
// using DOT NOTATION, assign a PROPERTY to c
c.property = "value";
// using DOT NOTATION, assign a METHOD to c
c.method = function () {
    return "this is a method";
};
// using BRACKET NOTATION, call the method in c
c["method"]();
// print a, b, and c
console.log(a);
console.log(b);
console.log(c);