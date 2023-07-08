// print the outer HTML of the navigation bar
let outNav = console.log(document.querySelector("nav").outerHTML);
console.log(outNav);
// print the inner HTML of the navigation bar
let innerNav = console.log(document.querySelector("nav").innerHTML);
console.log(innerNav);
// print the text content of the #class-schedule-list element
let textContext = console.log(document.querySelector("#class-schedule-list").textContent);
console.log(textContext);
// select the classList for the first class-week, then add the class "week-1"
let classList = document.querySelector(".class-week:first-child").classList.add("week-1");
console.log(classList);
// select the img element and add a src attribute
let imgEle = document.querySelector('img').setAttribute('src', 'image.png');
console.log(imgEle);
// change the font color of the h1 element
let newColor = document.querySelector('h1').style.color = 'red';
console.log(newColor);