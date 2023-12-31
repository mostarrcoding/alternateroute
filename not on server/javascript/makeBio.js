/* Use makeBio() and iterate over each author in jsonDocName to make bio HTML
  pages for all authors */
function makeAllBios(jsonData){
  var authors = jsonData["authors"];
  //console.log(authors);
  for (var i in authors){
    var author = authors[i];
    var name = author["name"];
    var bio = author["bio"];
    //console.log(name);
    //console.log(bio);
    makeBio(name, bio);
  }
}

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

var authors = {
  "authors":[
    {"name": "Fadilah Ali", "bio": "Fadilah Ali is a Nigerian writer living in Edo State. She is currently studying for her MSc in Food Microbiology. Her works have appeared in Briefly Write Magazine, and Overtly Lit. Find her on Twitter @/partyjollofism where she is either tweeting a new word she made up, or sharing her Strong Food Opinions."},
    {"name": "Tom Ball", "bio": "Tom Ball has published novels, novellas, short stories and flash in \"Green Wall,\" \"Down in the Dirt magazine,\" \"Defenestrationism.net,\" \"Exterminating Angel.com,\" \"Conceit Magazine\" and its imprints, \"Gargoyle Magazine,\" \"SpillwordsPress.com,\" \"PBW magazine,\" \"Fleas on the Dog Online,\" \"Sparrow's Trumpet,\" \"TRSFR/Sip Cup,\" \"Poetry Pacific,\" \"postcardshorts.ca,\" \"The Local Train Magazine,\" \"Lone Star Magazine,\" and others. Tom is currently a senior editor at \"FLEAS ON THE DOG\" (fleasonthedog.com)"},
    {"name": "Zaynab Bobi", "bio": "Zaynab Bobi, Frontier I, is a Nigerian poet, digital artist, and photographer from Bobi. She is a member of Hilltop Creative Art Abuja branch, Poetry Club Udus, Frontier Collective, and a Medical Laboratory Science student of Usmanu Danfodiyo University Sokoto. Her artworks and photographs are published and forthcoming in Blue Marble Review, Barren Magazine, Isele Magazine, Type House Literary Magazine, Night Coffee Lit, Wrongdoing Magazine, Rulerless Lit, Harbour Review, B'K Magazine, Olney Magazine, All My Relations, Salamander Ink, Anti-Heroin Chi, Acropolis Journal, and more. She tweets @ZainabBobi."},
    {"name": "Roy Christopher", "bio": "Roy Christopher marshals the middle between Mathers and McLuhan. He’s an aging BMX and skateboarding zine kid. That’s where he learned to turn events and interviews into pages with staples. He has since written about music, media, and culture for everything from books and blogs to national magazines and academic journals. He holds a Ph.D. in Communication Studies from the University of Texas at Austin. As a child, he solved the Rubik’s Cube competitively. He currently lives in Savannah, Georgia."},
    {"name": "CJ Delous", "bio": "CJ Delous"},
    {"name": "Sean Ennis", "bio": "Sean Ennis is the author of CHASE US: Stories and his recent flash fiction has appeared in Pithead Chapel, Bending Genres, X-R-A-Y and New World Writing. More of his work can be found at seanennis.net"},
    {"name": "Ozzýka Farah", "bio": "Ozzýka Farah is a poet, editor, and content writer from Sacramento, California. His work has recently been published or is forthcoming in CausewayLit, Penumbra Literary and Art Journal, Dots Publications, and Big A Little a anthology. He currently lives between Melbourne, Australia and London, United Kingdom. Instagram and Twitter: @ozzynapoleon"},
    {"name": "Tracey Foster", "bio": "Tracey Foster started off in a long career as an Art and Design teacher but wanted to refocus her creative energies into writing poetry and prose. After helping others find inspiration in the world around us, she took an MA course in Creative Writing at Leicester University and has not looked back. She finds inspiration in the past and the events that shape us. Previous work has been published by CommaPress, Ayaskala, Bus Poetry Magazine and The Arts Council and writes regularly for the Everyone’s Reviewing website."},
    {"name": "John Grey", "bio": "John Grey is an Australian poet, US resident, recently published in Sheepshead Review, Stand, Poetry Salzburg Review and Hollins Critic. Latest books, \"Leaves On Pages\" \"Memory Outside The Head\" and \"Guest Of Myself\" are available through Amazon. Work upcoming in Ellipsis, Blueline and International Poetry Review."},
    {"name": "Rev Joe Haward", "bio": "Rev Joe Haward is an author, poet, and heretic. Born into an Indian family, Joe was adopted with his identical twin brother and grew up transracial in the UK. Alongside two published nonfiction books, he works as a freelance journalist challenging political, societal, and religious corruption, with articles regularly featured in the national news site, Byline Times. His work can be found in various publications, where he writes horror, noir, and transgressive fiction. His poetry has also been nominated for the Pushcart Prize. His debut novel, Burning the Folded Page (Cinnabar Moth Publishing) will be released in 2023. He is also working on his first poetry collection, a novella, and two further novels. Find him on Twitter @RevJoeHaward."},
    {"name": "David Hay", "bio": "David Hay is an English Teacher in the Northwest of England. He has written poetry and prose since the age of 18 when he discovered Virginia Woolf's The Waves and the poetry of John Keats. These and other artists encouraged him to seek his own poetic voice. He has currently been accepted for publication in Dreich, Abridged, Acumen, The Honest Ulsterman, The Dawntreader, Versification, The Babel Tower Notice Board, The Stone of Madness Press, Ink, Sweat and Tears, The Fortnightly Review, The Lake, Selcouth Station, GreenInk Poetry, Dodging the Rain, Seventh Quarry and Expat-Press. His debut publication is the Brexit-inspired prose- poem Doctor Lazarus published by Alien Buddha Press 2021."},
    {"name": "Ceinwen E Cariad Haydon", "bio": "Ceinwen E Cariad Haydon (MA, Creative Writing, Newcastle University, 2017) lives near Newcastle upon Tyne, UK and writes short stories and poetry. She is widely published in online magazines and in print anthologies. Her first chapbook is 'Cerddi Bach' [Little Poems], Hedgehog Press, July 2019. She is a Pushcart Prize and Forward Prize nominee. She is developing practice as a participatory arts facilitator and believes everyone’s voice counts."},
    {"name": "Enna Horn", "bio": "Enna Horn is an author, pianist, and polyglot who can be found haunting the woods of midwestern America. If they don't have their hand to the pen, then they're more than likely outside with their hand to the plough. If necessary, they can be summoned on their Twitter or Instagram @inkhallowed , or unearthed at their Tumblr @earthbloods ."},
    {"name": "Mark Jackley", "bio": "Mark Jackley lives in Purcellville, Virginia, in the foothills of the Blue Ridge Mountains. His poems have appeared in Cagibi, Talking River, Natural Bridge, and other journals. This summer, Main Street Rag Press will publish his book of poems Many Suns Will Rise."},
    {"name": "Zeke Jarvis", "bio": "Zeke Jarvis is a Professor of English at Eureka College. His work has appeared in Moon City Review, Posit, and KNOCK, among other places. His books include, So Anyway..., In A Family Way, The Three of Them, and Antisocial Norms. His website is zekedotjarvis.wordpress.com"},
    {"name": "Hec Lampert-Bates", "bio": "Hec Lampert-Bates is an emerging writer from Pittsburgh, Pennsylvania. He is interested in surrealism and literary fiction. His story \"Rex Najus\" is to be published in CafeLit in March 2022."},
    {"name": "Paul H. Lewellan", "bio": "Paul H. Lewellan lives and gardens in Davenport, Iowa, with his wife Pamela, his Shi Tzu Mannie, and their ginger tabby Sunny. He has recently published fiction in Miniskirt Magazine, Plateful of Pandemic, Talon Review, DASH Literary Journal, and CERASUS. Although he doesn't believe life begins at 70, it does get more interesting after then. @Paul_Lewellan (he/his/him)"},
    {"name": "Mario Loprete", "bio": "My name is Mario Loprete. I'm an italian artist. I wish show you my artistic project . Painting for my is the first love. An important, pure love. Creating a painting, starting from the spasmodic research of a concept with which I want to send a message to transmit my message, it’s the base of my painting. The sculpture is my lover, my artistic betrayal to the painting. That voluptous and sensual lover that gives me different emotions, that touches prohibited cords… In this year, I worked exclusivly at my concrete sculptures . For my Concrete Sculptures I use my personal clothing. Throughout some artistical process, in which I use plaster, resin and cement, I transform them in artworks to hang. My memory, my DNA, my memories remain concreted inside, transforming the person that looks at the artworks a type of post-modern archeologist that studies my work as they were urban artefacts. I like to think that those who look at my sculptures created in 2020 will be able to perceive the anguish, the vulnerability, the fear that each of us has felt in front of a planetary problem that was covid 19 ... under a layer of cement there are my clothes with which I lived this nefarious period. clothes that survived covid 19, very similar to what survived after the 2,000-year-old catastrophic eruption of Pompeii, capable of recounting man's inability to face the tragedy of broken lives and destroyed economies. In the last 2 years about 250 international magazines wrote about my work turning on the spotlight on my art project , attracting the attention of important galleries and collectors. I believe much in this project and I hope that I can exhibit in important art spaces other those already in program: -from 4th september at North Carolina University of Charlotte -from 1st october at Bibliotheke of Venlo in Netherlands -from 5 may 2023 at AVAPAI COLLEGE PRESCOTT ART GALLERY of Prescott Arizona U.S.A. -in september 2022 at Falkirk Cultural Center - SAN RAFAEL - U.S.A. -in September 2023 at DOMINICAN UNIVERSITY OF CALIFORNIA in SAN RAFAEL - U.S.A."},
    {"name": "DS Maolalai", "bio": "DS Maolalai has been nominated nine times for Best of the Net and seven times for the Pushcart Prize. He has released two collections, \"Love is Breaking Plates in the Garden\" (Encircle Press, 2016) and \"Sad Havoc Among the Birds\" (Turas Press, 2019). His third collection, \"Noble Rot\" is scheduled for release in April 2022."},
    {"name": "Sadie Maskery", "bio": "Sadie Maskery lives in Scotland by the sea. Her first chapbook, Push, is published by Erbacce Press (erbacce-press.co.uk/sadie-maskery)."},
    {"name": "Peter Mladinic", "bio": "Peter Mladinic's fourth book of poems, Knives on a Table is available from Better Than Starbucks Publications. An animal rights advocate, he lives in Hobbs, New Mexico."},
    {"name": "Sheila E. Murphy", "bio": "Sheila E. Murphy is the recipient of the Gertrude Stein Award for her book Letters to Unfinished J. (Green Integer Press, 2003). Her most recent book is Golden Milk (Luna Bisonte Prods, 2020). Reporting Live from You Know Where won the Hay(na)Ku Poetry Book Prize Competition (Meritage Press (U.S.A.) and xPress(ed) (Finland), 2018). Also in 2018, Broken Sleep Books brought out the book As If To Tempt the Diatonic Marvel from the Ivory."},
    {"name": "Zach Murphy", "bio": "Zach Murphy is a Hawaii-born writer with a background in cinema. His stories appear in Reed Magazine, The Coachella Review, Maudlin House, Still Point Arts Quarterly, B O D Y, Ruminate, Wilderness House Literary Review, Flash: The International Short-Short Story Magazine, and more. His debut chapbook Tiny Universes (Selcouth Station Press, 2021) is available in paperback and e-book. He lives with his wonderful wife Kelly in St. Paul, Minnesota."},
    {"name": "Ben Nardolilli", "bio": "Ben Nardolilli currently lives in New York City. His work has appeared in Perigee Magazine, Red Fez, Danse Macabre, The 22 Magazine, Quail Bell Magazine, Elimae, The Northampton Review, Local Train Magazine, The Minetta Review, and Yes Poetry. He blogs at mirrorsponge.blogspot.com and is trying to publish his novels."},
    {"name": "Robert Okaji", "bio": "Robert Okaji is a half-Japanese Texan living in Indiana. The author of multiple chapbooks, his work has appeared or is forthcoming in Book of Matches, The Night Heron Barks, Threepenny Review, Vox Populi and elsewhere."},
    {"name": "Gene J. Parola", "bio": "Gene J. Parola is a cultural historian retired to Hawai'i to delve into Hawaiian Native family history.\"Married in\" to a Chinese-Hawiian ohana, his ten years of research resulted in the award-winning, Lehua, Ka'o a Ka Wahine. He has two mysteries and three collectlons of short stories as well."},
    {"name": "Bernard Pearson", "bio": "Bearnard Pearson's work appears in many publications, including; Aesthetica Magazine , The Edinburgh Review, Crossways, The Gentian, Nymphs The Poetry Village, Beneath The Fever, The Beach Hut Little stone In 2017 a selection of his poetry 'In Free Fall' was published by Leaf by Leaf Press. In 2019 he won second prize in The Aurora Prize for Writing, Twitter @BernardPearso19"},
    {"name": "Kenneth Pobo", "bio": "Kenneth Pobo is the author of twenty-one chapbooks and nine full-length collections. Recent books include Bend of Quiet (Blue Light Press), Loplop in a Red City (Circling Rivers), and Lilac And Sawdust (Meadowlark Press). His work has appeared in North Dakota Quarterly, Nimrod, Mudfish, Hawaii Review, and elsewhere."},
    {"name": "Damien Posterino", "bio": "Damien Posterino (he/him) is a Melbourne-born poet in London. His poetry explores themes of characters, commentary, and capturing moments in time. He has been published in recent editions of Fiery Scribe Review, Neuro Logical, Analogies & Allegories Literary Magazine, Abergavenny Small Press, BOMBFIRE, Jupiter Review, Fairy Piece Magazine, Poetic Sun Journal, Green Ink Poetry, Zero Readers, Melbourne Culture Corner & Discretionary Love. More are due to be published until January 2022. You can find him on Twitter at twitter.com/damienposterino"},
    {"name": "Fabrice B. Poussin", "bio": "Fabrice Poussin teaches French and English at Shorter University. Author of novels and poetry, his work has appeared in Kestrel, Symposium, The Chimes, and many other magazines. His photography has been published in The Front Porch Review, the San Pedro River Review as well as other publications."},
    {"name": "Carson Pytell", "bio": "Carson Pytell is a Pushcart Prize and Best of the Net nominated writer living outside Albany, New York, whose work has appeared widely in such venues as Adirondack Review, Sheila-Na-Gig and The Heartland Review. He serves as Assistant Editor of Coastal Shelf and his fifth and sixth chapbooks; Tomorrow Everyday, Yesterday Too (Anxiety Press, 2022), and A Little Smaller Than the Final Quark (Bullshit Lit, 2022), are forthcoming."},
    {"name": "M Patrick Riggin", "bio": "M Patrick Riggin is a Pittsburgh born writer, artist and musician. mpatrickriggin.com"},
    {"name": "Krista Sanford", "bio": "Krista Sanford graduated from Ball State University with her BA in Creative Writing and Literature. She is currently the HR and Media Manager for a marketing firm in Indianapolis, IN, where she is able to split her time between working and submitting her writing. In her free time, she loves to read and hang out with her dog and kitten. You can find her on Instagram at @k.leesan and at her website, www.kleesan.com."},
    {"name": "Gerard Sarnat", "bio": "Gerard Sarnat won San Francisco Poetry's 2020 Contest, the Poetry in the Arts First Place Award plus the Dorfman Prize, and has been nominated for handfuls of 2021 and previous Pushcarts plus Best of the Net Awards. Gerry is widely published including in 2022 Arts & Cultural Council of Bucks County Celebration, 2022 Rio Grande Valley International Poetry Festival Anthology, The Deronda Review, Jewish Writing Project, Hong Kong Review, Tokyo Poetry Journal, Buddhist Poetry Review, Gargoyle, Main Street Rag, New Delta Review, Arkansas Review, Hamilton-Stone Review, Northampton Review, New Haven Poetry Institute, Texas Review, Vonnegut Journal, Brooklyn Review, San Francisco Magazine, Monterey Poetry Review, The Los Angeles Review, and The New York Times as well as by Harvard, Stanford, Dartmouth, Penn, Columbia, North Dakota, McMaster and University of Chicago presses. He's authored the collections Homeless Chronicles, Disputes, 17s, Melting the Ice King. Gerry is a Harvard-trained physician who's built and staffed clinics for the marginalized as well as a Stanford professor and healthcare CEO. Currently he is devoting energy/ resources to deal with climate justice, and serves on Climate Action Now's board. Gerry's been married since 1969 with three kids plus six grandsons, and is looking forward to potential future granddaughters. gerardsarnat.com"},
    {"name": "Edward Michael Supranowicz", "bio": "Edward Michael Supranowicz is the grandson of Irish and Russian/Ukrainian immigrants. He grew up on a small farm in Appalachia. He has a grad background in painting and printmaking. Some of his artwork has recently or will soon appear in Fish Food, Streetlight, Another Chicago Magazine, The Door Is a Jar, The Phoenix, and The Harvard Advocate. Edward is also a published poet."},
  ]
}
