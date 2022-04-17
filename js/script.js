"use strict";

const nav = document.querySelector('.nav'),
      title = document.querySelector('.intro_title'),
      textNav = document.querySelector('.text_content'),
      navItem = document.querySelectorAll('.nav_link'),
      wrapperInput = document.querySelector('.input'),
      autoFocus = document.querySelector('#fname'),
      btn = document.querySelector('.btn');




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
    const randomElement = i[randomIndex]; // Возвращает рандомное слово из вопросов
    return randomElement;

}

// function getDataBase(i) {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'db.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             textNav.textContent = randomWord(data.requests[i]);
//         }
//     });
// }

async function getDataBase(i) {
   const request = await fetch('http://localhost:3000/requests')

//    const data = JSON.parse(request.response);
//    textNav.textContent = randomWord(data.requests[i]);

.then(response => response.json())
.then(json => randomWord(json[i]))
.then(json => textNav.textContent = json);


// return await response;
// console.log(json);
// console.log(request.json());
// return await request.json();
}
// getDataBase();
// console.log(getDataBase());

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














