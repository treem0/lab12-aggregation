//Sorts by how many films per year in descending order
[
  {
    '$group': {
      '_id': '$Year', 
      'filmsPerYear': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'filmsPerYear': -1
    }
  }
];

//Sort films by the subject and how many films per subject there are in descending order
[
  {
    '$group': {
      '_id': '$Subject', 
      'filmsPerSubject': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'filmsPerSubject': -1
    }
  }
];

//Sort films by the director and how many films they have directed in decsending order
[
  {
    '$group': {
      '_id': '$Director', 
      'moviesDirected': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'moviesDirected': -1
    }
  }
];

//Sort by actors in how many films
[
  {
    '$group': {
      '_id': '$Actor', 
      'actorInMovies': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'actorInMovies': -1
    }
  }
];

//Sort by John Wayne in Comedy Movies
[
  {
    '$match': {
      'Actor': 'Wayne, John', 
      'Subject': 'Comedy'
    }
  }
];
