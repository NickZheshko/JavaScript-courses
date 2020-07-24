'use strict';

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let adv = document.querySelectorAll('.promo__adv img'),
    genre = document.getElementsByClassName('promo__genre')[0],
    bg = document.getElementsByClassName('promo__bg')[0],
    listOfFilms = document.querySelectorAll('.promo__interactive-item');


    console.log(adv);
    console.log(listOfFilms);

    adv.forEach(item => {
        item.remove();
    });

    movieDB.movies.sort();

    listOfFilms.forEach(function(item, i) {
        item.innerHTML = `${i+1}. ` + movieDB.movies[i];
        console.log(item);
        i++;
    });


    console.log(listOfFilms);


    genre.textContent = 'Драма';
    bg.style.backgroundImage = 'url(img/bg.jpg)';

