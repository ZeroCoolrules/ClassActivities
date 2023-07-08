const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let numsPop = nums.pop();
console.log(numsPop);
// remove each of the first two items with shift(), saving each item to a variable
let numsShift = nums.shift();
console.log(numsShift);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let numsUnshift = nums.unshift();
console.log(numsUnshift);
let numsPush =  nums.push();
console.log.apply(numsPush);