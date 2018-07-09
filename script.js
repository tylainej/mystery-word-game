//onload open modal to start game
function startGame(){
 document.querySelector('#outsideModal').style.display = 'flex';

};
//closing event listener for onload modal
document.querySelector('#closure').addEventListener('click', (evt)=>{
    document.querySelector('#outsideModal').style.display = 'none';

});




//array of words
const words = ['Transformers','tuesday','wednesday','thursday','friday'];
//choose word randomly
let random = Math.floor(Math.random() * words.length);
const chosenWord = words[random].toUpperCase();
const randomWord = document.querySelector('#randomWord');


//hide selected letter and appends the alphabet to a new div
function Phrase(){
    for(let i = 0; i < chosenWord.length; i += 1){
        let div = document.createElement('div');
        //creates a div for each letter
         div.className = 'letter' + i;
            div.style.display = "inline";
                div.style.borderBottom = "solid 3px white";
                    div.style.padding = "5px";
                        div.style.margin = "5px";
                            div.style.background = "navy";
                                randomWord.appendChild(div);
    }
}
Phrase();

function selectedLetter(clicked){
    let letters = clicked.innerHTML;
    let found = chosenWord.indexOf(letters);
    // console.log("letters: ",letters, "clicked: ",clicked,"found: ", found);
    for(let i = 0; i < chosenWord.length; i += 1){
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

let el = document.querySelectorAll('div > button');
//gets the div clue and the classes of alphabet

                for(let button of el){
        //loops through the nodelist of the alphabet class
                   if( char === el.value){
        //compares the letter pressed to the value of the alphabet divs
                    el.style.visibility = 'hidden';     
                    let b = document.querySelector('#abc');
                        el.style.visibility = 'visible';
                        b.appendChild(el);
                   }
                }
            }  
    }
});


