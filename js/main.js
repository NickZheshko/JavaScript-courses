//esversion: 6
let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
     }
}

// start();

let personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

console.log(personalMovieDB.count);

   function rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
            let ans_1 = prompt('Один из последних просмотренных фильмов?',''),
                ans_2 = prompt('На сколько оцените его?','');
                  if (ans_1 != null && ans_2 != null && ans_1 !='' & ans_2 !='' && ans_1.length < 50 && ans_2.length < 50) {
                        console.log('done');
                        personalMovieDB.movies[ans_1] = ans_2;
                  } else {
                        console.log('error');
                        i--;      
                  }      
         }
   }

//    rememberMyFilms();

   function detectPersonalLevel() {
            if (personalMovieDB.count < 10 && personalMovieDB.count >=0) {
            console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
            console.log('Вы - киноман');
      } else {
            console.log('Произошла ошибка');
      }
   }

//    detectPersonalLevel();

   function showMyDB() {
         if (!personalMovieDB.privat) {
               console.log(personalMovieDB);
         }
   }

   // showMyDB();

   function writeYourGenres() {
         for (let i = 0; i < 3; i++) {
               personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + (i + 1), '');
         }
   }

   writeYourGenres();


   

   console.log(personalMovieDB);