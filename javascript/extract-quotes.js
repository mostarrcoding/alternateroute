/*let quotes = document.getElementsByClassName("quoteText");*/

function getQuotes(){
    quotes = gr.getElementsByClassName("quoteText");
    for (i in quotes){
        console.log(quotes[i].innerText);
    }
    console.log(quotes);
}

gr = $.get("../quotes/goodreads.html", getQuotes);



