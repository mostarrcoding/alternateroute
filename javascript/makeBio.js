/* Generate a new HTML webpage for each new author/artist name provided and
  display the link in the "Creator Biographies" section */
function makeBio(authorName, authorBio) {
  let doc = document.implementation.createHTMLDocument("[Alternate Route] Bio: " + authorName);
  let title = doc.createElement("h1");
  let p = doc.createElement("p");
  title.textContent = authorName;
  p.textContent = authorBio;
  try{
    doc.body.appendChild(title);
    doc.body.appendChild(p);
  }catch(e){
    console.log(e);
  }
}



/* Sort preexisting author/artist bio links on the homepage */
function replaceBioLinks(){
  var linksArraySorted = sortLinks(false);

  //console.log(sortLinks(false));
  var linksPar = document.getElementsByClassName("bios")[0];
  //console.log(linksPar);
  linksPar.innerText = "";
  //console.log(linksPar);

  for(const bioLink of linksArraySorted){
    //console.log(bioLink);
    var newLink = document.createElement("a");
    var linkText = document.createTextNode("");
    newLink.appendChild(linkText);
    newLink.innerText = bioLink.innerText;
    newLink.href = bioLink.href;
    newLink.class = "bio";
    //console.log(newLink);
    linksPar.appendChild(newLink);
    //linksPar += " ";
    var space = document.createTextNode(" ");
    linksPar.appendChild(space);
  }
  linksPar.class = "bios";
  //console.log(linksPar);
}

function sortLinks(sortDesc) {
    //var linksPar = document.getElementsByClassName("bios")[0];
    //console.log(linksPar);
    //var linksArray = [].slice.call(linksPar); //Doesn't work
    //console.log(linksArray);
    //linksArray = linksPar.innerHTML.split('\n\t\t\t');
    //linksArray = linksArray.slice(1);
    linksCollection = document.getElementsByClassName("bio");
    //console.log(linksCollection);
    //var linksSorted = linksArray.sort(compareText); //it is an HTMLCollection, not an array, so sort doesn't work
    var linksArray = [].slice.call(linksCollection);
    //console.log(linksArray);
    var linksSorted = linksArray.sort(compareText);
    //console.log(linksSorted);
    if (sortDesc){ linksSorted.reverse(); }
    //console.log(linksSorted);
    return linksSorted;
}

function compareText(a1, a2) {
  //console.log(a1);
  //console.log(a2);
  var t1 = a1.innerText;
  var t1_split = t1.split(" ");
  var t1_lastName = t1_split[t1_split.length-1];

  var t2 = a2.innerText;
  var t2_split = t2.split(" ");
  var t2_lastName = t2_split[t2_split.length-1];

  return t1_lastName > t2_lastName ? 1 : (t1_lastName < t2_lastName ? -1 : 0);
}

function getBioLinks(){
  document.getElementsByClassName("bio");

}
