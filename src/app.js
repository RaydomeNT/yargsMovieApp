const yargs = require("yargs");
const Movie = require("./utils");

// if (yargsObj.title) {
//     console.log(`2 Marvel films I like are ${yargsObj.title1} & ${yargsObj.title2}, but I don't like ${yargsObj.title3}`);
// }

const app = (yargsObj) => {
    if (yargsObj.add) {
        const newMovie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.rating);
        newMovie.add();
    } else if (yargsObj.addMulti) {
        const movie1 = new Movie(yargsObj.title1, yargsObj.actor1, yargsObj.rating1);
        const movie2 = new Movie(yargsObj.title2, yargsObj.actor2, yargsObj.rating2);
        const movie3 = new Movie(yargsObj.title3, yargsObj.actor3, yargsObj.rating3);
        movie1.add();
        movie2.add();
        movie3.add();
    }
  };

app(yargs.argv)