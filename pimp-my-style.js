import { styles } from './pimp-my-style.data.js';

let currentClasses = []; 
let counter = 0; 

export function pimp() {
  const button = document.querySelector('button.button');

  if (counter < styles.length) {
    button.classList.add(styles[counter]);
    currentClasses.push(styles[counter]); 
    counter++;
  } else {
    counter--;
    const classToRemove = currentClasses.pop();
    button.classList.remove(classToRemove); 

    if (counter === 0) {
      button.classList.toggle('unpimp');
    }
  }

  if (counter === styles.length) {
    button.classList.toggle('unpimp');
  }
}