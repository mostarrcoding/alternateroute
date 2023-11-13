/* Let the developer/curious know the script is running */
console.log("random-quote.js is running");

/* Testing */
/*
let list = [1, 2, 3];
let selectedQuote = return_random_element(list);
console.log(selectedQuote);
*/

/* Declare Functions */
function return_random_element(authorquotations){
    let randomElement = authorquotations[Math.floor(Math.random() * authorquotations.length)];
    return randomElement;
}


function debug_selectdisplay_quote(array, index){
  return array[index];
}


/*
*var par = document.getElementsByClassName("spacer")[0];
*fetch("./quotes.JSON").then(res => res.json()).then(authorquotations => return_random_element(authorquotations)).then(data => par.innerHTML(data));
*/

/* The Quotes (an array) */
const authorquotations = [
    "I love deadlines. I love the whooshing noise they make as they go by.<br />― Douglas Adams, The Salmon of Doubt",
    "There is no greater agony than bearing an untold story inside you.<br />― Maya Angelou, I Know Why the Caged Bird Sings",
    "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.<br />― J.D. Salinger, The Catcher in the Rye",
    "If there's a book that you want to read, but it hasn't been written yet, then you must write it.<br />― Toni Morrison",
    "There is nothing to writing. All you do is sit down at a typewriter and bleed.<br />― Ernest Hemingway",
    "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.<br />    ― Madeleine L'Engle",
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.<br />― Stephen King",
    "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.<br />    ― Virginia Woolf, A Room of One's Own",
    "We write to taste life twice, in the moment and in retrospect.<br />― Anais Nin",
    "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.<br />    ― Mark Twain",
    "One day I will find the right words, and they will be simple.<br />― Jack Kerouac, The Dharma Bums",
    "We live and breathe words. .... It was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them. Reading your words, what you wrote, how you were lonely sometimes and afraid, but always brave; the way you saw the world, its colors and textures and sounds, I felt--I felt the way you thought, hoped, felt, dreamt. I felt I was dreaming and thinking and feeling with you. I dreamed what you dreamed, wanted what you wanted--and then I realized that truly I just wanted you.<br />― Cassandra Clare, Clockwork Prince",
    "Fantasy is hardly an escape from reality. It's a way of understanding it.<br />― Lloyd Alexander",
    "And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.<br />― Sylvia Plath, The Unabridged Journals of Sylvia Plath",
    "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it.<br />Then write. If it's good, you'll find out. If it's not, throw it out of the window.<br />― William Faulkner",
    "Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only Beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.<br />― Oscar Wilde, The Picture of Dorian Gray",
    "You never have to change anything you got up in the middle of the night to write.<br />― Saul Bellow",
    "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.<br />― Robert Frost",
    "You must stay drunk on writing so reality cannot destroy you.<br />― Ray Bradbury, Zen in the Art of Writing",
    "The difference between the almost right word and the right word is really a large matter. ’tis the difference between the lightning bug and the lightning.<br />    ― Mark Twain, The Wit and Wisdom of Mark Twain",
    "Fiction is the truth inside the lie.<br />― Stephen King",
    "Don't tell me the moon is shining; show me the glint of light on broken glass.<br />― Anton Chekhov",
    "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them -- words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out. But it's more than that, isn't it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you've said at all, or why you thought it was so important that you almost cried while you were saying it. That's the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.<br />― Stephen King",
    "The road to hell is paved with adverbs.<br />― Stephen King, On Writing: A Memoir of the Craft",
    "Words can be like X-rays if you use them properly – they’ll go through anything. You read and you’re pierced.<br />    ― Aldous Huxley, Brave New World",
    "The scariest moment is always just before you start.<br />― Stephen King, On Writing: A Memoir of the Craft",
    "There is no real ending. It’s just the place where you stop the story.<br />― Frank Herbert",
    "Writing is a socially acceptable form of schizophrenia.<br />― E.L. Doctorow",
    "Start writing, no matter what. The water does not flow until the faucet is turned on.<br />― Louis L'Amour",
    "After nourishment, shelter and companionship, stories are the thing we need most in the world.<br />― Philip Pullman",
	"Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity.<br />         — William Wordsworth",
	"A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.<br />         — Robert Frost",
	"Poetry is not an expression of the party line. It’s that time of night, lying in bed, thinking what you really think, making the private world public, that’s what the poet does.<br />         — Allen Ginsberg",
	"Poetry is emotion put into measure. The emotion must come by nature, but the measure can be acquired by art.<br />         — Thomas Hardy",
	"Poetry should surprise by a fine excess and not by singularity     —it should strike the reader as a wording of his own highest thoughts, and appear almost a remembrance.<br />         — John Keats",
	"Poetry lifts the veil from the hidden beauty of the world, and makes familiar objects be as if they were not familiar.<br />         — Percy Bysshe Shelley ",
	"A poet can survive everything but a misprint.<br />         — Oscar Wilde ",
	"I wish our clever young poets would remember my homely definitions of prose and poetry; that is prose; words in their best order; – poetry; the best words in the best order.<br />         —Samuel Taylor Coleridge ",
	"Use no superfluous word, no adjective, which does not reveal something. Don’t use such an expression as ‘dim land of peace’. It dulls the image. It mixes an abstraction with the concrete. It comes from the writer’s not realising that the natural object is always the adequate symbol. Go in fear of abstractions.<br />         — Ezra Pound ",
	"Poetry is what in a poem makes you laugh, cry, prickle, be silent, makes your toe nails twinkle, makes you want to do this or that or nothing, makes you know that you are alone in the unknown world, that your bliss and suffering is forever shared and forever all your own. <br />         —Dylan Thomas ",
	"If I read a book [and] it makes my whole body so cold no fire can ever warm me, I know that is poetry. If I feel physically as if the top of my head were taken off, I know that is poetry. These are the only ways I know it. Is there any other way.<br />         — Emily Dickinson",
	"One of my secret instructions to myself as a poet is: ‘Whatever you do, don’t be boring.’<br />         — Anne Sexton",
	"Poets are shameless with their experiences: they exploit them.<br />         —Friedrich Nietzsche ",
	"Poetry is a deal of joy and pain and wonder, with a dash of the dictionary.  <br />         — Khalil Gibran",
	"A poet is, before anything else, a person who is passionately in love with language.<br />         — W.H. Auden ",
	"Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality. But, of course, only those who have personality and emotions know what it means to want to escape from these things.<br />         — T.S. Eliot ",
	"Poetry is not only dream and vision; it is the skeleton architecture of our lives. It lays the foundations for a future of change, a bridge across our fears of what has never been before.<br />         — Audre Lorde ",
	"Poetry is language at its most distilled and most powerful.<br />         — Rita Dove",
	"Poetry is thoughts that breathe, and words that burn.<br />         — Thomas Gray",
    "He wear no shoe shine<br />He got toe jam football<br />He got monkey finger<br />He shoot Coca-Cola<br />He say I know you, you know me<br />One thing I can tell you is you got to be free<br />Come together, right now, over me<br />     — Come Together by The Beatles",
    "She's got a competition clutch with the four on the floor<br />And she purrs like a kitten 'til the lake pipes roar<br />And if that ain't enough to make you flip your lid<br />There's one more thing, I got the pink slip, daddy<br />     — Little Deuce Coupe by The Beach Boys",
    "Keeps me crying, baby, for you<br />Keep on, keep on crying, baby, for you<br />So won't you hurry<br />Come on boy, see about me (come see about me)<br />See about your baby (come see about me)<br />You know I'm so lonely (come see about me)<br />I love you only (come see about me)<br />See about your baby (come see about me)<br />Hurry, hurry (come see about me)<br />     — Come See About Me by The Supremes",
    "All these places had their moments<br />With lovers and friends, I still can recall<br />Some are dead and some are living<br />In my life, I've loved them all<br />     — In My Life by The Beatles",
    "Every limbo boy and girl<br />All around the limbo world<br />Gonna do the limbo rock<br />All around the limbo clock<br />Jack be limbo, Jack be quick<br />Jack go under limbo stick<br />All around the limbo clock<br />Hey, let's do the limbo rock (woah-oh)<br />      — Limbo Rock by Chubby Checker",
    "Creepy Persian Bearded-man Snatcher: Do you use OILS!?!?!!!<br />Manny: <em>(startled and worried)</em> No!<br />Creepy Persian Bearded-man Snatcher: You should.<br />     — Black Books",
    "Bandages have advantages, too<br />     —Bandages by Hot Hot Heat",
    "I awake to find no peace of mind<br />I said, &ldquo;How do you live as a fugitive down here&rdquo;<br />&ldquo;Where I cannot see so clear?&rdquo;<br />I said, &ldquo;What do I know?&rdquo;<br />&ldquo;Show me the right way to go&rdquo;<br /><br />And the spies came out of the water<br />But you're feeling so bad 'cause you know<br />That the spies hide out in every corner<br />But you can't touch them, no<br />'Cause they're all spies<br /><br />They're all spies<br /><br />I awake to see that no one is free<br />We're all fugitives, look at the way we live down here<br />I cannot sleep from fear, no<br />I said, &ldquo;Which way do I turn?&rdquo;<br />Oh, I forget everything I learn<br /><br />And the spies came out of the water<br />And you're feeling so bad 'cause you know<br />That the spies hide out in every corner<br />But you can't touch them, no<br />'Cause they're all spies<br /><br />They're all spies<br /><br />And if we don't hide here<br />They're gonna find us<br />And if we don't hide now<br />They're gonna catch us where we sleep<br />Ah, and if we don't hide here<br />They're gonna find us<br /><br />And the spies came out of the water<br />But you're feeling so good 'cause you know<br />That those spies hide out in every corner<br />They can't touch you, no<br />'Cause they're just spies<br /><br />They're just spies<br />They're just spies<br />They're just spies<br />They're just spies<br /><br />         — Spies by Coldplay",
    "You don't really need to find out<br />What's going on<br />You don't really want to know<br />Just how far it's gone<br />Just leave well enough alone<br />Eat your dirty laundry<br />     —Dirty Laundry  by Don Henley",
    "You must see with eyes unclouded by hate. See the good in that which is evil, and the evil in that which is good. Pledge yourself to neither side, but vow instead to preserve the balance that exists between the two.<br />    ― Hayao Miyazaki",
    "I will push my nail into her neck and make a lovely necklace out of her green bones<br />     —Weeds and Wild Flowers by Alice Oswald",
    "I. An Agnostic<br />(<i>of his religious friend</i>)<br /><br />He often gazes on the air<br />And sees quite plain what is not there<br />Peopling the wholesome void with horrid shapes<br />Which he manoeuvres in religious japes.<br />And yet he is more gracious than I,<br />He has such a gracious personality.<br /><br />II. A Religious Man<br />(<i>of his agnostic friend</i>)<br /><br />He says that religious thought and all our nerviness<br />Is because of the great shock it was for all of us<br />Long, long ago when animal turned human being<br />Which is more than enough to account for everything...<br />And yet he is more gracious than I,<br />He has such a gracious personality.<br /><br />     —Stevie Smith, Selected Poems",
	"We can't change the country. Let us change the subject.     —Stephen, of Ulysses (by James Joyce)",
]


/* Debug Mode */
/*
let selectedQuote = debug_selectdisplay_quote(authorquotations, authorquotations.length - 1 );
let text = document.getElementById("quotes").innerHTML; 
document.getElementById("quotes").innerHTML = text.replace("", selectedQuote);
*/

/* Normal Operation */
let text = document.getElementById("quotes").innerHTML; 
document.getElementById("quotes").innerHTML = text.replace("", return_random_element(authorquotations));
