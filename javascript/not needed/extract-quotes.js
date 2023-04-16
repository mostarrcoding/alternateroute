let quotes = new Array()
function getQuotes(){
    quotes_raw = document.getElementsByClassName("quoteText");
    for (i in quotes_raw){
        quote = quotes_raw[i].innerText
        /*console.log(quote);*/
        quotes.push(quote);
    }
    return quotes;
}
quotes = getQuotes();
/*console.log(quotes);*/