console.log("random-quote.js is running");
/*
let list = [1, 2, 3];

let selectedQuote = returnrandomelement(list);
console.log(selectedQuote);
*/
function returnrandomelement(array){
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}


let authorquotations = [
    "I love deadlines. I love the whooshing noise they make as they go by.\n― Douglas Adams, The Salmon of Doubt",
    "There is no greater agony than bearing an untold story inside you.\n― Maya Angelou, I Know Why the Caged Bird Sings",
    "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.\n― J.D. Salinger, The Catcher in the Rye",
    "If there's a book that you want to read, but it hasn't been written yet, then you must write it.\n― Toni Morrison",
    "There is nothing to writing. All you do is sit down at a typewriter and bleed.\n― Ernest Hemingway",
    "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.\n― Madeleine L'Engle",
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.\n― Stephen King",
    "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.\n― Virginia Woolf, A Room of One's Own",
    "We write to taste life twice, in the moment and in retrospect.\n― Anais Nin",
    "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.\n― Mark Twain",
    "One day I will find the right words, and they will be simple.\n― Jack Kerouac, The Dharma Bums",
    "We live and breathe words. .... It was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them. Reading your words, what you wrote, how you were lonely sometimes and afraid, but always brave; the way you saw the world, its colors and textures and sounds, I felt--I felt the way you thought, hoped, felt, dreamt. I felt I was dreaming and thinking and feeling with you. I dreamed what you dreamed, wanted what you wanted--and then I realized that truly I just wanted you.\n― Cassandra Clare, Clockwork Prince",
    "Fantasy is hardly an escape from reality. It's a way of understanding it.\n― Lloyd Alexander",
    "And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.\n― Sylvia Plath, The Unabridged Journals of Sylvia Plath",
    "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it.\nThen write. If it's good, you'll find out. If it's not, throw it out of the window.\n― William Faulkner",
    "Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only Beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.\n― Oscar Wilde, The Picture of Dorian Gray",
    "You never have to change anything you got up in the middle of the night to write.\n― Saul Bellow",
    "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.\n― Robert Frost",
    "You must stay drunk on writing so reality cannot destroy you.\n― Ray Bradbury, Zen in the Art of Writing",
    "The difference between the almost right word and the right word is really a large matter. ’tis the difference between the lightning bug and the lightning.\n― Mark Twain, The Wit and Wisdom of Mark Twain",
    "Fiction is the truth inside the lie.\n― Stephen King",
    "Don't tell me the moon is shining; show me the glint of light on broken glass.\n― Anton Chekhov",
    "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them -- words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out. But it's more than that, isn't it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you've said at all, or why you thought it was so important that you almost cried while you were saying it. That's the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.\n― Stephen King",
    "The road to hell is paved with adverbs.\n― Stephen King, On Writing: A Memoir of the Craft",
    "Words can be like X-rays if you use them properly – they’ll go through anything. You read and you’re pierced.\n― Aldous Huxley, Brave New World",
    "The scariest moment is always just before you start.\n― Stephen King, On Writing: A Memoir of the Craft",
    "There is no real ending. It’s just the place where you stop the story.\n― Frank Herbert",
    "Writing is a socially acceptable form of schizophrenia.\n― E.L. Doctorow",
    "Start writing, no matter what. The water does not flow until the faucet is turned on.\n― Louis L'Amour",
    "After nourishment, shelter and companionship, stories are the thing we need most in the world.\n― Philip Pullman",
	"Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity.\n    — William Wordsworth",
	"A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.\n    — Robert Frost",
	"Poetry is not an expression of the party line. It’s that time of night, lying in bed, thinking what you really think, making the private world public, that’s what the poet does.\n    — Allen Ginsberg",
	"Poetry is emotion put into measure. The emotion must come by nature, but the measure can be acquired by art.\n    — Thomas Hardy",
	"Poetry should surprise by a fine excess and not by singularity—it should strike the reader as a wording of his own highest thoughts, and appear almost a remembrance.\n    — John Keats",
	"Poetry lifts the veil from the hidden beauty of the world, and makes familiar objects be as if they were not familiar.\n    — Percy Bysshe Shelley ",
	"A poet can survive everything but a misprint.\n    — Oscar Wilde ",
	"I wish our clever young poets would remember my homely definitions of prose and poetry; that is prose; words in their best order; – poetry; the best words in the best order.\n    —Samuel Taylor Coleridge ",
	"Use no superfluous word, no adjective, which does not reveal something. Don’t use such an expression as ‘dim land of peace’. It dulls the image. It mixes an abstraction with the concrete. It comes from the writer’s not realising that the natural object is always the adequate symbol. Go in fear of abstractions.\n    — Ezra Pound ",
	"Poetry is what in a poem makes you laugh, cry, prickle, be silent, makes your toe nails twinkle, makes you want to do this or that or nothing, makes you know that you are alone in the unknown world, that your bliss and suffering is forever shared and forever all your own. \n    —Dylan Thomas ",
	"If I read a book [and] it makes my whole body so cold no fire can ever warm me, I know that is poetry. If I feel physically as if the top of my head were taken off, I know that is poetry. These are the only way I know it. Is there any other way.\n    — Emily Dickinson",
	"One of my secret instructions to myself as a poet is: ‘Whatever you do, don’t be boring.’\n    — Anne Sexton",
	"Poets are shameless with their experiences: they exploit them.\n    —Friedrich Nietzsche ",
	"Poetry is a deal of joy and pain and wonder, with a dash of the dictionary.  \n    — Khalil Gibran",
	"A poet is, before anything else, a person who is passionately in love with language.\n    — W.H. Auden ",
	"Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality. But, of course, only those who have personality and emotions know what it means to want to escape from these things.\n    — T.S. Eliot ",
	"Poetry is not only dream and vision; it is the skeleton architecture of our lives. It lays the foundations for a future of change, a bridge across our fears of what has never been before.\n    — Audre Lorde ",
	"Poetry is language at its most distilled and most powerful.\n    — Rita Dove",
	"Poetry is thoughts that breathe, and words that burn.\n    — Thomas Gray"
  ];

let selectedQuote = returnrandomelement(authorquotations);
var par = document.getElementsByClassName("spacer")[0];
par.innerHTML = selectedQuote;