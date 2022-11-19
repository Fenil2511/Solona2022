var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");
console.log(
  cowsay.say({
    text: Quote.getQuote().text,
    e: "oO",
    T: "U ",
  })
);
