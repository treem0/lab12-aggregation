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
