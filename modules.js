// Import data from another file

// const data = require('./people');
// console.log(data.people, data.ages);

// Object destructuring
const {people, ages} = require('./people');
console.log(people, ages);

// os Object
const os = require('os');
console.log(os.platform(), os.homedir());