const yargs = require("yargs");
const Movie = require("./utils");

console.table(yargs.argv);

if (yargs.argv.title) {
    console.log(`2 Marvel films I like are ${yargs.argv.title[0]} & ${yargs.argv.title[1]}, but I don't like ${yargs.argv.title[2]}`);
}