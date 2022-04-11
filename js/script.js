"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content'),
      navItem = document.querySelectorAll('.nav_link'),
      wrapperInput = document.querySelector('.input');
      
      
      


const wordEngDatabase = [
    ['Where', 'Why', 'When', 'How', 'Who', 'What'],
    ['Dance', 'Do', 'Cook', 'Sing', 'Play', 'Read'],
    ['I', 'You', 'He', 'she', 'We', 'They'],
    ['action', 'activity', 'age', 'air', 'animal', 'area', 'authority', 'bank', 'body', 'book']
];


const wordRuDatabase = [
    ['Где', 'Почему', 'Когда', 'Как', 'Кто', 'Что'],
    ['Танцевать', 'Делать', 'Готовить', 'Петь', 'Играть', 'Читать'],
    ['я', 'ты', 'он', 'она', 'мы', 'они'],
    ['действие', 'Мероприятия', 'возраст', 'воздух', 'животное', 'область', 'орган власти', 'банк', 'тело', 'книга']
];

// Navigator item

function randomWord(i) {
    const randomIndex = Math.floor(Math.random() * i.length); 
    const randomElement = i[randomIndex];                       // Возвращает рандомное слово из вопросов
    return randomElement;

}


function showAutoFocus() {
    const autoFocus = document.querySelector('#fname');
    autoFocus.defaultChecked = true;
    console.dir(autoFocus);
    return autoFocus.autofocus;
}


nav.addEventListener('click', (event) => { 
    const target = event.target;

    if(target && target.classList.contains('nav_link') ) {
        navItem.forEach((item, i) => {
           
            if (target == item) {
                textNav.textContent = randomWord(wordEngDatabase[i]);

                // showAutoFocus();

            }
    });
    
}});
    


     // Сделать что бы при нажатии на кнопку глагол появлялся автофокус на поле ввода   			  
        			
        			
        			 
        			 
        			    
        			
        			
        			




































