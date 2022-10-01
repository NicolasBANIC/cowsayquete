const info= require("./information");
const cowsay = require("cowsay")
console.log(cowsay.say({
    text: `Hi, my name is ${info.name} and I'm form ${info.campus}`
}));