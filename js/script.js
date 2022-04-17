"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content'),
      navItem = document.querySelectorAll('.nav_link'),
      wrapperInput = document.querySelector('.input'),
      autoFocus = document.querySelectorAll('.fname'),
      btn = document.querySelector('.btn'),
      inputWords = document.querySelector('.input__words');




// const wordEngDatabase = [
//     ['Where', 'Why', 'When', 'How', 'Who', 'What'],
//     ['Dance', 'Do', 'Cook', 'Sing', 'Play', 'Read'],
//     ['I', 'You', 'He', 'she', 'We', 'They'],
//     ['action', 'activity', 'age', 'air', 'animal', 'area', 'authority', 'bank', 'body', 'book'],
//     []
// ];


// const wordRuDatabase = [
//     ['Где', 'Почему', 'Когда', 'Как', 'Кто', 'Что'],
//     ['Танцевать', 'Делать', 'Готовить', 'Петь', 'Играть', 'Читать'],
//     ['я', 'ты', 'он', 'она', 'мы', 'они'],
//     ['действие', 'Мероприятия', 'возраст', 'воздух', 'животное', 'область', 'орган власти', 'банк', 'тело', 'книга'],
//     []
// ];

// Navigator item

function randomWord(i) {
    const randomIndex = Math.floor(Math.random() * i.length);
    const randomElement = i[randomIndex];                      // Возвращает рандомное слово из массива
    return randomElement;

}


async function getDataBase(i) {
   const request = await fetch('http://localhost:3000/requests')

.then(response => response.json())                                      // Получает из db.json базу слов 
.then(json => randomWord(json[i]))
.then(index => textNav.textContent = index);
}



nav.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('nav_link')) {
        navItem.forEach((item, i) => {

            if (target == item) {
                getDataBase(i);

                autoFocus.focus();
            }
        });
    }
});


// =========================


const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data,
    });

    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }
    return await response.json();
};



inputWords.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(inputWords);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

    sendData('http://localhost:3000/added', json);

    autoFocus.forEach((i => {
        i.value = '';
    } ) );
});

















