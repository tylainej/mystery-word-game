//create an array of words
const words = ['Transformers','tuesday','wednesday','thursday','friday'];
//choose word randomly
let random = Math.floor(Math.random() * words.length);
const chosenWord = words[random];

//hide selected letter and appends the alphabet to a new div
function selectedLetter(selected){
    for(let i = 0; i < chosenWord.length; i += 1){
        if(selected[i] === chosenWord.value){
            selected.style.visibility = 'hidden';     
        let b = document.querySelector('#abc');
            selected.style.visibility = 'visible';
            b.appendChild(selected);
        } 
    }   
}

//creates a div for each letter
function Phrase(){
    let randomWord = document.querySelector('#randomWord');
    for(let i = 0; i < chosenWord.length; i += 1){
        let div = document.createElement('div');
         div.className ='letter'+i;
        div.style.display = "inline";
        div.style.borderBottom = "solid 2px white";
        div.style.padding = "5px";
        div.style.margin = "5px";
        div.style.background = "navy";


        div.innerHTML = chosenWord[i];
        randomWord.appendChild(div);
    }
}
Phrase();
//create underscores for the phrase
function Underscores () {
    for(let i = 0; i < chosenWord.length; i += 1){
        if(chosenWord[i] === ' '){
            document.querySelector('#bottomUnderScore').innerHTML += '&nbsp';
//&nbsp creates consecutive spaces
        } else { 
            document.querySelector('#bottomUnderScore').innerHTML += ' _ ';
        };
    };
}
Underscores();
//get underscores to show in html
// let x = document.querySelector('#randomWord').innerHTML = underscores;




// get users' guess
//run through the alphabet and if the correct letter exists the replace and underscore with new letter
// function keypad(event){
//     // let alphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
    
//     // let letter = chosenWord.indexof(char);
//     //  for(let j = 0; j < chosenWord.length; j += 1){
//     //       if(j[keys] === chosenWord.value ){

// console.log(char);
//     //       }
//     //  }
    
// }
document.addEventListener('keypress', (evt)=>{
    let char = String.fromCharCode(event.keyCode);
        for(let i = 0; i < underscores.length; i += 1){
            if(chosenWord.indexOf(char) > -1){

        }
    }
});

//run for loop to go through the alphabet class
//check if guess is right
//if right push to right append to new div
//if wrong push to wrong empty div
