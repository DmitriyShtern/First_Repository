"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content'),
      navItem = document.querySelectorAll('.nav_link');


const wordDatabase = [
    ['Where', 'Why', 'When', 'How', 'Who', 'What'],
    ['dance', 'do', 'cook', 'sing', 'play', 'read', 'etc'],
    []
];


// Navigator item

function randomWord(i) {
    const randomIndex = Math.floor(Math.random() * i.length); 
    const randomElement = i[randomIndex];                       // Возвращает рандомное слово из вопросов
    return randomElement;

}


const keys = Object.keys( wordDatabase );    // Получаю массив из названия ключей объекта wordDatabase


nav.addEventListener('click', (event) => { 
    const target = event.target;
    if(target && target.classList.contains('nav_link') ) {
        navItem.forEach((item, i) => {
           
            if (target == item) {
                textNav.textContent = randomWord(wordDatabase[i]);
            }
    });
    
}});
    
   




































