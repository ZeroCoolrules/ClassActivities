// param1 & param2 are parameters
function myFunction(param1, param2) {
    // printing each parameter
    console.log(param1);
    console.log(param2);
  }
  // 1 & 2 are arguments passed into the function
  myFunction(1, 2);
  // prints:
  // 1
  // 2


// Named Parameters
// write a function that takes two named parameters:
// function myParameters(myParam1, myParam2) {
// // print each named parameter,
//         console.log(myParam1, myParam2);
//         return myParam1 + myParam2
// }

// // then return the parameters added together
//     myParameters(5, 4);
// // invoke the function and pass in two numbers
//     console.log(myParameters(4,9))
// // invoke the function and pass in more than two numbers
//     let sumOfMoreThanTwo = myParameters(5, 4, 9, 99);
//     console.log(sumOfMoreThanTwo);
// // invoke the function and pass in only one number
//     let oneNum = myParameters(10);
//     console.log(oneNum);
// change the function to set default values for the parameters
// function myParameters(myParam1, myParam2 = 4) {
//     // print each named parameter,
//             console.log(myParam1, myParam2);
//             return myParam1 + myParam2
//     }
//     let oneNum = myParameters(10);
//     console.log(oneNum);
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myParameters(myParam1, ...myParam2) {
    // print each named parameter,
            console.log(myParam1, myParam2);
            return myParam1 + myParam2
    }
    let totalNum = myParameters(8, 3, 4, 5, 9, 2);
// again, invoke the function and pass in more than two numbers
    console.log(totalNum);