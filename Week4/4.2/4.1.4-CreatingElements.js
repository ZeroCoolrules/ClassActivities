// create a new unordered list (ul) element
const ul = document.createElement('ul');
// remove the paragraph element in the nav-bar
document.querySelector("nav p").remove();
// add your new ul element to the nav-bar
document.querySelector('nav').appendChild(ul);
// create two new list item (li) elements, and add some text to them
const li1 = document.createElement('li');
li1.textContent = 'List item 1';

const li2 = document.createElement('li');
li2.textContent = 'List item 2';

const li3 = document.createElement('li');
li3.textContent = 'Hello';

// add the li elements to the ul in the nav-bar

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);