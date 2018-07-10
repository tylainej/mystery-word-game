
/* eslint-env browser */
// hide selected letter and appends the alphabet to a new div
function Phrase(chosenWord, randomWord) {
  const divArray = chosenWord.split('').map((letter, i) => {
    const div = document.createElement('div');
    // creates a div for each letter
    div.className = `letter${i}`;
    // append to the dom
    randomWord.appendChild(div);
    return div;
  });
  return divArray;

}


/**
 * @func tryLetter
 * @param {string} char
 * @desc checks to see if the character is in a valid range
 * loop over the test word to update the screen
 */
function tryLetter(evt, char) {

  // only allow letter presses A-Z
  if (!allowedChars.test(char)) {
    evt.preventDefault();
    return;
  }

  // let's create a Regular Expression based on the chosen letter
  const re1 = new RegExp(char, 'g');
  const re2 = new RegExp(char, 'g');

  let found = re1.test(chosenWord);
  if (found) {
    // move the letter button
    evt.srcElement.style.visibility = 'hidden';
  } else {
    evt.srcElement.style.visibility = 'hidden';
    const b = document.querySelector('#abc');
    evt.srcElement.style.visibility = 'visible';
    b.appendChild(evt.srcElement);
  }

  // every time re.exec is run, 
  // the NEXT position of the found letter is returned
  while (found = re2.exec(chosenWord)) {
    randomWordLetters[found.index].innerHTML = char;
  }
  return;
}

// onload open modal to start game
function startGame(outsideModal) {
  // todo: move styles into css
  outsideModal.style.display = 'flex';
}


/*    -------- START GAME -------     */

// array of words
const words = ['Transformers', 'tuesday', 'wednesday', 'thursday', 'friday', 'monday', 'general', 'assembly'];
// choose word randomly
const random = Math.floor(Math.random() * words.length);
const chosenWord = words[random].toUpperCase();


// DOM ELEMENTS
const letterButtonsContainer = document.querySelector('#clue');
const randomWord = document.querySelector('#randomWord');

const closeButton = document.querySelector('#closure');
const outsideModal = document.querySelector('#outsideModal');
//closing event listener for onload modal

const allowedChars = /^[A-Z]$/;

startGame(outsideModal);


// todo: make this less dependant on the Phrase function
const randomWordLetters = Phrase(chosenWord, randomWord);






// EVENT LISTENERS!!

closeButton.addEventListener('click', (evt) => {
  outsideModal.style.display = 'none';
});

document.addEventListener('keypress', (evt) => {
  // key presses have keycodes
  const char = evt.key.toUpperCase();

  tryLetter(evt, char);
});

letterButtonsContainer.addEventListener('click', (evt) => {
  // click events have button values
  if (evt.srcElement.className !== 'alphabet') {
    return;
  }
  const char = evt.target.value.toUpperCase();

  tryLetter(evt, char);

});

