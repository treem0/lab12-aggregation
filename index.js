const fs = require('fs').promises;
const mongoose = require('mongoose');
const csv = require('csvtojson');


mongoose.connect('mongodb://localhost:27017/film', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const schema = new mongoose.Schema({
  Year: Number,
  Title: String,
  Subject: String,
  Actor: String,
  Actress: String,
  Director: String,
  Popularity: Number
});

const Film = mongoose.model('Film', schema);

fs.readdir('./csv')
  .then(files => {
    return Promise.all(
      files.map(file => {
        return csv({
          delimiter: ';'
        })
          .fromFile(`./csv/${file}`);
      })
    );
  })
  .then(csvToJsonFiles => {
    const films = csvToJsonFiles;
    console.log(films);
    
    const mappedFilms = films.flat().map(film => ({
      Year: film.Year,
      Title: film.Title,
      Subject: film.Subject,
      Actor: film.Actor,
      Actress: film.Actress,
      Director: film.Director,
      Popularity: film.Popularity
    }));
    return Film.create(mappedFilms);
  })
  .then(() => console.log('done'));
