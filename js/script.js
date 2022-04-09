"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content');


const wordDatabase = {
    questionWords: ['Where', 'Why', 'When', 'How', 'Who', 'What' ],
    verbs: [],
    pronouns: []
};


// Navigator item

function questionButton() {
    const randomIndex = Math.floor(Math.random() * wordDatabase.questionWords.length); 
    const randomElement = wordDatabase.questionWords[randomIndex];
    return randomElement;

}

nav.addEventListener('click', () => { 
    textNav.textContent = `${questionButton()}`;  
          
});






































