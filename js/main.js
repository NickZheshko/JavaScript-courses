let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

let personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

console.log(personalMovieDB.count);

let ans_1 = prompt('Один из последних просмотренных фильмов?',''),
    ans_2 = prompt('На сколько оцените его?',''),
    ans_3 = prompt('Один из последних просмотренных фильмов?',''),
    ans_4 = prompt('На сколько оцените его?','');

   personalMovieDB.movies[ans_1] = ans_2;
   personalMovieDB.movies[ans_3] = ans_4;

    console.log(personalMovieDB.movies);