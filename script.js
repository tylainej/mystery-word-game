//create an array of words
const words = ['monday','tuesday','wednesday','thursday','friday'];
//choose word randomly
let random = Math.floor(Math.random() * words.length);
let chosenWord = words[random];
let underscores = [];
//create divs based on length of word

// let newEl = document.querySelector('#underScore');
// let newDiv = document.createElement('div');
// newDiv.className = "guessInput";
// newEl.appendChild(newDiv);

// create new p element to append to new div class guessInput
// let newPel = document.createElement('p');
// newPel.className = "newPel";
// newDiv.appendChild(newPel);
// loop the letters of chosenWord into the newly created div

function Underscores () {
    for(let i = 0; i < chosenWord.length; i += 1){
        
        underscores.push('_');
    }
        return underscores;
}
console.log(Underscores());

function Alphabet(){
    let y = document.querySelector('#clue');
    document.style.display = 'none';
    y.addEventListener('keypress', Alphabet);

}
// when you had underscore you used this to push them to the html 
  let x = document.querySelector('#underScore').innerHtml = underscores;

// get users' guess
document.addEventListener('keypress', (evt) =>{
    let newKeys = event.keycode;
    let newWord = String.fromCharCode(newKeys);

})
//check if guess is right
//if right push to right append to new div
//if wrong push to wrong empty div collection
