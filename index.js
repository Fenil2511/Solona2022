const a = 10;
const b = 11;

function square(x) {
  return x * x;
}

var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
console.log(cowsay.say({
    text : Quote.getQuote().text,
    e : "oO",
    T : "U "
}));



