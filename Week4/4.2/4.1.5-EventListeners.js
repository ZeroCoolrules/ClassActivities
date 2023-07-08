// add an event listener to the dog picture that listens for a "click" and gives an alert
const dogPicture = document.querySelector('#dog-picture');
dogPicture.addEventListener('click', () => {
  alert('You clicked the dog picture!');
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const classSchedule = document.querySelector('#class-schedule');
classSchedule.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = 'yellow';
  }
});

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener('keydown', (event) => {
  console.log(event.key);
});
