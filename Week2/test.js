

// if(condition){
//     console.log("the condition is true")
// }else{
//     console.log("the condition is false")
// }

// let age = 10;

// if(age >= 25){
//     console.log("Renting a car is more affordable")
// }else if(age < 25){
//     console.log("Renting a car is less expensive")
// }if(age < 25 && age >= 18){
//     console.log("Renting a car is very expensive")
// }if(age < 18){
//     console.log("You cannot legally rent a car")
// }


// const errand = "Going to Movies";

// switch(errand){
//     case "Going to Dentist": {
//         const message = "I hate going to dentist";
//         console.log(message);
//         break;
//     }
//     case "Going Shopping":;{
//         const message = "I love to shop";
//         console.log(message);
//         break;
//     }
//     case "Going to Movies": {
//         const message = "I love chick flicks";
//         console.log(message);
//         break;
//     }
// }

// // create a variable outside of the while loop
// // inside the while loop, we keep track of it and re-assign it until the condition becomes false
// let x = 1;
// // while x is less than or equal to 10,
// while(x <= 10){
//     //print x
//     console.log(x); x++; //without this infinite loop will happen
// }
  // increment by one and re-assign x
  // if we forgot this step, x <= 10 always evaluates to true and we create an infinite loop


// // set i equal to 1
// // while i is less than or equal to 10, run the code inside the scope
// // after running the code, increase i by 1 and try the loop again
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }




// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 100;
// 2) create a variable to represent the current total
let currentTotal;
// 3) write a while loop that sums the numbers from 1 to 100
while(i <= 100){
    currentTotal += i;
    i++
}
for(let i = 1; i <= 100; i++){
    console.log(currentTotal);
}

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100