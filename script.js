
  /* eslint-env browser */
  // hide selected letter and appends the alphabet to a new div
  function Phrase(chosenWord, randomWord) {
    for (let i = 0; i < chosenWord.length; i += 1) {
      const div = document.createElement('div');
      // creates a div for each letter
      div.className = `letter${i}`;
      div.style.display = 'inline';
      div.style.borderBottom = 'solid 3px white';
      div.style.padding = '5px';
      div.style.margin = '5px';
      div.style.background = 'navy';
      randomWord.appendChild(div);
    }
  }

  function selectedLetter(clicked) {
    const letters = clicked.innerHTML;
    const found = chosenWord.indexOf(letters);
    // console.log("letters: ",letters, "clicked: ",clicked,"found: ", found);
    for (let i = 0; i < chosenWord.length; i += 1) {
      if (clicked[i] === chosenWord[found]) {
        clicked.style.visibility = 'hidden';
        const b = document.querySelector('#abc');
        clicked.style.visibility = 'visible';
        b.appendChild(clicked);
      } else {
        clicked.style.visibility = 'hidden';
      }
      if (found >= 0) {
        document.querySelector(`.letter${i}`).innerHTML = letters;
      }
    }
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

    // let's create a RE based on the chosen letter
    const re = new RegExp(char,'g'); 
    let found;

    // every time re.exec is run, 
    // the NEXT position of the found letter is returned
    while(found = re.exec(chosenWord)) {
      randomWordLetters[found.index].innerHTML = char;
    }


    return;
    
  }

  // onload open modal to start game
  function startGame() {
    // todo: move styles into css
    document.querySelector('#outsideModal').style.display = 'flex';
  }
document.querySelector('#closure').addEventListener('click',)


  /*    -------- START GAME -------     */

  // array of words
  const words = ['Transformers', 'tuesday', 'wednesday', 'thursday', 'friday'];
  // choose word randomly
  const random = Math.floor(Math.random() * words.length);
  const chosenWord = words[random].toUpperCase();

  
  // DOM ELEMENTS
  const letterButtonsContainer = document.querySelector('#clue');
  const randomWord = document.querySelector('#randomWord');
  const randomWordLetters = document.querySelectorAll('#randomWord>div');
  const allowedChars = /^[A-Z]$/;

  startGame();
  Phrase(chosenWord, randomWord);
  
  


  debugger;



  



  document.addEventListener('keypress', (evt) => {
    // key presses have keycodes
    const char = event.key.toUpperCase();

    tryLetter(evt, char);
  });

  letterButtonsContainer.addEventListener('click', (evt) => {
    // click events have button values
    debugger;


  });
