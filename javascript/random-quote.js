/* Let the developer/curious know the script is running */
console.log("random-quote.js is running");

/* Testing */
/*
let list = [1, 2, 3];
let selectedQuote = returnrandomelement(list);
console.log(selectedQuote);
*/

/* Declare Functions */
function returnrandomelement(array){
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
function debug_selectdisplay_quote(array, index){
  return array[index];
}

var par = document.getElementsByClassName("spacer")[0];
fetch("./quotes.JSON").then(res => res.json()).then(authorquotations => returnrandomelement(authorquotations)).then(data => par.innerHTML(data));

/* The Quotes (an array) */


/* Debug */
/*let selectedQuote = debug_selectdisplay_quote(authorquotations, authorquotations.length - 1 );*/

/* Run the functions */
