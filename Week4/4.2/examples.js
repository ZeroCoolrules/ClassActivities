// // const arr = ["Jan", "Feb", "Apr", "Mar", "May", "Sept", "Oct", "Nov", "Dec"];

// // console.log(arr.slice(6, arr.length));
// // // ["Oct", "Nov", "Dec"]

// // console.log(arr.slice(-3));
// // // ["Oct", "Nov", "Dec"]

// // console.log(arr.slice(6));
// // // ["Oct", "Nov", "Dec"]

// // console.log(arr.slice(0, 1));
// // // ["Jan"]

// // const april = arr.splice(2, 1);
// // console.log(april);
// // // ["Apr"]

// // console.log(arr);
// // // ["Jan", "Feb", "Mar", "May", "Sept", "Oct", "Nov", "Dec"]

// // arr.splice(3, 0, april[0]); //  What is happening with April here?
// // arr.splice(5, 0, "Jun", "Jul", "Aug");
// // console.log(arr);
// // // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]


// const arrOne = [1, 2, 3];
// const arrTwo = ["a", "b", "c"];

// const arrThree = arrOne.concat(arrTwo);
// console.log(arrOne);
// // [1, 2, 3]

// console.log(arrThree);
// // [1, 2, 3, "a", "b", "c"]

// console.log(arrTwo.join(" & "));
// // "a & b & c"

// console.log(arrTwo);
// // ["a", "b", "c"]


  // Definition:
  arr.includes(valueToFind[, fromIndex])

  // Example:
  const arr = [1, 2, 3, 4, 5, 6];
  arr.includes(2); // output: true
  arr.includes(7); // output: false

  console.log([1, 2, 3].includes(2)); //  output: true
  console.log([1, 2, 3].includes(4)); //  output: false
