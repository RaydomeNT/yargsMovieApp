const movieArr = [];

class Movie {
  constructor(title, actor = "Not specified", rating = "unrated") {
    this.title = title;
    this.actor = actor;
    this.rating = rating;
  }
  add() {
    movieArr.push(this);
    console.table(movieArr);
  }
}

module.exports = Movie;