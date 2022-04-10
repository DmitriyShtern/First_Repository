"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content'),
      navItem = document.querySelectorAll('.nav_link'),
      input = document.querySelector('.input');
      


const wordDatabase = [
    ['Where', 'Why', 'When', 'How', 'Who', 'What'],
    ['Dance', 'Do', 'Cook', 'Sing', 'Play', 'Read', 'Etc'],
    ['I', 'You', 'He', 'she', 'We', 'You', 'They'],
    ['action', 'activity', 'age', 'air', 'animal', 'area', 'authority', 'bank', 'body', 'book']
];


// Navigator item

function randomWord(i) {
    const randomIndex = Math.floor(Math.random() * i.length); 
    const randomElement = i[randomIndex];                       // Возвращает рандомное слово из вопросов
    return randomElement;

}


function showAutoFocus() {
    const autoFocus = document.querySelector('#fname');
    autoFocus.autofocus = true;
    return autoFocus.autofocus;
    // console.dir(autoFocus);
}


nav.addEventListener('click', (event) => { 
    const target = event.target;

    if(target && target.classList.contains('nav_link') ) {
        navItem.forEach((item, i) => {
           
            if (target == item) {
                textNav.textContent = randomWord(wordDatabase[i]);

                showAutoFocus();
            }
    });
    
}});
    
  
        			  
        			
        			
        			 
        			 
        			    
        			
        			
        			




































