array = ["quote1", "quote2", "quote3", "quote4", "quote5", "quote6"];
var par = document.getElementsByClassName("spacer")[0];

let finalRandomElement;
for(i=0; i<10; i++){
    let randomElement = array[Math.floor(Math.random() * array.length)];
    console.log(randomElement);
    if (i == 9){
        finalRandomElement = randomElement;
    }
}
par.innerHTML = finalRandomElement;
