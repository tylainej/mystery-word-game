//create an array of words
const words = ['Transformers','tuesday','wednesday','thursday','friday'];
//choose word randomly
let random = Math.floor(Math.random() * words.length);
const chosenWord = words[random].toUpperCase();



//creates a div for each letter
const randomWord = document.querySelector('#randomWord');

function Phrase(){
    for(let i = 0; i < chosenWord.length; i += 1){
        let div = document.createElement('div');
         div.className = 'letter' + i;
        div.style.display = "inline";
        div.style.borderBottom = "solid 3px white";
        div.style.padding = "5px";
        div.style.margin = "5px";
        div.style.background = "navy";
        // div.style.height = "30vh";
        // div.style.width = "80vh";


        //div.innerHTML = chosenWord[i];
        randomWord.appendChild(div);
    }
}
Phrase();
//hide selected letter and appends the alphabet to a new div
function selectedLetter(clicked){
    let letters = clicked.innerHTML;
    let found = chosenWord.indexOf(letters);
    let i;
    for( i = 0; i < chosenWord.length; i += 1){
        if(clicked[i] === chosenWord[found]){
            clicked.style.visibility = 'hidden';     
        let b = document.querySelector('#abc');
            clicked.style.visibility = 'visible';
            b.appendChild(clicked);
        } else { clicked.style.visibility = 'hidden';
            }
            if(found >= 0){
         document.querySelector('.letter' + i).innerHTML = letters;
    }
           
        }
}
    
//create underscores for the phrase
// function Underscores () {
//     for(let i = 0; i < chosenWord.length; i += 1){
//         if(chosenWord[i] === ' '){
//             document.querySelector('#bottomUnderScore').innerHTML += '&nbsp';
// //&nbsp creates consecutive spaces
//         } else { 
//             document.querySelector('#bottomUnderScore').innerHTML += ' _ ';
//         };
//     };
// }
// Underscores();
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

//let d = document.querySelector('#randomWord');
document.addEventListener('keypress', (evt)=>{
    let char = String.fromCharCode(event.keyCode).toUpperCase();
   //converts the character that was pressed to a letter
    let found = chosenWord.indexOf(char);
    //gets the index position of that character 
        for( let i = 0; i < chosenWord.length; i += 1){
    //loops through the chosenword to find the position of the characters
            if(found[i] === char[chosenWord] && found >= 0){
    //start at 0 to find the index of the character pressedif it is definitely present place in html 
                document.querySelector('.letter' + i).innerHTML = char;
let a = document.querySelector('.alphabet');
                for(let j = 0; j < a.length; j += 1){
                   if( char[j] === a.value){
                    document.querySelectorAll('.alphabet').style.visibility = 'hidden';     
                    let b = document.querySelector('#abc');
                        a.style.visibility = 'visible';
                        b.appendChild(a);
                   }
                }
            }  
    }
});

//check if guess is right
//if right push to right append to new div
//if wrong push to wrong empty div
