//esversion: 6
let personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
      start () {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
      
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
            }
      },
      rememberMyFilms: function() {
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
      },
      detectPersonalLevel: function() {
            if (personalMovieDB.count < 10 && personalMovieDB.count >=0) {
                  console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
                  console.log('Вы классический зритель');
            } else if (personalMovieDB.count > 30) {
                  console.log('Вы - киноман');
            } else {
                  console.log('Произошла ошибка');
            }
      },

      showMyDB: function() {
            if (!personalMovieDB.privat) {
                  console.log(personalMovieDB);
            }
      },
      writeYourGenres: function() {
            for (let i = 0; i < 3; i++) {
                  personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + (i + 1), '');
                  if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                        i--;
                  }
            }
      personalMovieDB.genres.forEach((item, i)=> {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
      });
      },
      toogleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                  personalMovieDB.privat = false;
            } else {
                  personalMovieDB.privat = true;
            }
      }
};
      personalMovieDB.start();
      console.log(personalMovieDB.count);
      personalMovieDB.rememberMyFilms();
      personalMovieDB.detectPersonalLevel();
      personalMovieDB.showMyDB();
      personalMovieDB.writeYourGenres();
      personalMovieDB.toogleVisibleMyDB();


