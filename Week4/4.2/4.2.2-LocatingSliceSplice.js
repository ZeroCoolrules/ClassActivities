const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.slice(0).indexOf("a"));
console.log(arr.slice(0).indexOf("b"));
console.log(arr.slice(0).indexOf("c"));
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");
// find the last index of "a", "b", and "c"
console.log(arr.slice(0).lastIndexOf("a"));
console.log(arr.slice(0).lastIndexOf("b"));
console.log(arr.slice(0).lastIndexOf("c"));
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c")
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
    arr.splice(arr.lastIndexOf("a"), 1);
  }
  
  console.log(arr);



//   function removeDuplicates(array, duplicatedValue){
//         let firstIndex = array.indexOF(duplicatedValue);
//         let lastIndex = array.lastIndexOf(duplicatedValue)
//         while(firstIndex !== lastIndex){
//             array.splice(lastIndex, 1);
//             lastIndex = array.lastIndexOf(duplicatedValue)

//         }
//         return array;
//   }

//   removeDuplicates(arr,  "a")