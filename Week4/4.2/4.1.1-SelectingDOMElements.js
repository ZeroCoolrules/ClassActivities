// select all unordered list (ul) elements
console.log(document.querySelectorAll("ul"));
// select all elements with the class "class-week"
console.log("Class Week  ", document.querySelectorAll(".class-week"))
// select all elements with the class "nav-bar"
let navBar = document.getElementsByClassName("nav-bar");
console.log("navBar", navBar);
// select the element with the id "dog-picture" and save it to a variable
let dogPictureGetId = document.getElementById("dog-picture");
console.log("dogPictureGetId", dogPictureGetId);