//create an array of words
const words = ['monday','tuesday','wednesday','thursday','friday'];
//choose word randomly
let random = Math.floor(Math.random() * words.length);
let chosenWord = words[random];
let underscores = [];
//create underscores based on length of word
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

let x = document.querySelector('input').innerHTML = underscores;

// get users' guess
document.addEventListener('keypress', (evt) =>{
    let newKeys = event.keycode;
    let newWord = String.fromCharCode(newKeys);

})
//check if guess is right
//if right push to right append to new div
//if wrong push to wrong empty div collection
