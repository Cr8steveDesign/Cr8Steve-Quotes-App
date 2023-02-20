"use strict";

//JOKES
const jokes = [
  [
    "A duck walks into a store and asks for a tube of chapstick. The cashier says, 'Will that be cash or credit?' The duck replies, 'Just put it on my bill.'",
  ],
  [
    "A man walks into a doctor's office with a carrot up his nose and a banana in his ear. The doctor says, 'You're not eating properly.'",
  ],
  [
    "A man is walking along the beach when he comes across a lamp. He picks it up and gives it a rub, and out pops a genie. The genie says, 'I'll grant you one wish.' The man says, 'I've always wanted to go to Hawaii, but I'm afraid of flying and I get seasick on boats. Can you build me a bridge?' The genie replies, 'That's impossible! Think of the logistics of that! How would the supports ever reach the bottom of the Pacific? Think of how much concrete...how much steel!! No, think of another wish.' The man thinks for a minute and says, 'I wish I could understand women.' The genie replies, 'Do you want two lanes or four?'",
  ],
  [
    "A man goes into a bar and orders a drink. As he sits down, he sees a jar full of money on the counter. He asks the bartender what it's for, and the bartender says, 'We have a challenge going on. You put in $10, and if you can complete the three challenges we have, you get all the money in the jar.' The man says, 'What are the challenges?' The bartender replies, 'First, you have to drink a bottle of hot sauce without flinching. Second, there's a pitbull outside with a bad tooth. You have to pull it out. And third, there's a 90-year-old woman upstairs who has never had an orgasm. You have to give her one.' The man thinks for a moment and says, 'I'll pass on the first two, but I'll give the third one a try.' So he puts his $10 in the jar and goes upstairs. A few minutes later, he comes back down with a big smile on his face and says, 'Okay, where's the pitbull with the bad tooth?'",
  ],
  [
    "Three men are stranded on a deserted island when they come across a bottle with a genie inside. The genie grants them each one wish. The first man wishes to be rescued, and the genie sends a boat to save him. The second man wishes to be reunited with his family, and the genie transports him back home. The third man looks around and says, 'I'm lonely. I wish my friends were back here with me.'",
  ],
  ["Why did the tomato turn red?", "Because it saw the salad dressing!"],
  ["Why did the yam go to school?", "To get tuber-cular education!"],
  ["Why was the math book sad?", "Because it had too many problems!"],
  ["Why did the snail cross the road?", "To get to the other shell!"],
  [
    "A man walks into a doctor's office and says, 'Doctor, you've got to help me. I think I'm a moth.' The doctor says, 'I'm sorry, you need a psychologist, not a doctor.' The man says, 'I know, but your light was on.'",
  ],
  [
    "A man walks into a bar and sees a sign that says 'Free drinks if you can make our horse laugh.' The man approaches the horse and whispers in its ear. The horse starts laughing hysterically, and the bartender gives the man his free drinks. The next week, the man comes back and sees a sign that says 'Free drinks if you can make our horse cry.' The man approaches the horse and whispers in its ear again. The horse starts crying, and the bartender gives the man his free drinks. The bartender asks the man, 'How did you do that?' The man replies, 'Last week I told him my penis was bigger than his. This week, I showed him.'",
  ],
  [
    "A man walks into a pet store and asks for a parrot. The owner says, 'We have two parrots available. One is $500 and knows how to speak 10 languages, and the other is $1,000 and knows how to use a computer.' The man is impressed, but asks, 'What about the $10 parrot over there?' The owner responds, 'That one just sits there, but we call him the CEO.'",
  ],
  [
    "A man walks into a bar with a giant orange for a head. The bartender asks, 'What can I get for you?' The man replies, 'A drink, but no pulp.'",
  ],
  [
    "A woman is sitting at home when she hears a knock at the door. She opens it to find a man standing there, holding a clipboard. The man says, 'I'm sorry to bother you, ma'am, but I'm from the Census Bureau and I need to ask you a few questions.' The woman agrees, and the man starts with the first question. 'How many people live in this household?' The woman responds, 'Just me and my cat.' The man writes this down and asks the next question. 'And what is your cat's name?' The woman replies, 'His name is Mr. Snuggles.' The man writes this down and then asks, 'And what does Mr. Snuggles do for a living?'",
  ],
  [
    "A man walks into a bar and orders a drink. As he's drinking, he hears a small voice say, 'Nice tie.' He looks around, but there's no one there. He hears the voice again, 'I like your tie.' He looks down and sees a frog sitting on the bar. The man says, 'Did you just talk to me?' The frog replies, 'Yes, I did. And if you kiss me, I'll turn into a beautiful princess and be yours forever.' The man thinks about it for a moment, then picks up the frog and puts it in his pocket. The frog says, 'What are you doing? Didn't you hear what I said?' The man replies, 'I don't need a beautiful princess. A talking frog is much cooler.'",
  ],
  [
    "A man goes to the zoo, but there's only one animal there, a dog. It's a shitzu.",
  ],
  [
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
  ],
  ["What do you call a fake noodle? An impasta."],
  ["What do you call a can opener that doesn't work? A can't opener."],
  [
    "What's the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire.",
  ],
  ["Why did the tomato turn red? Because it saw the salad dressing."],
  ["Why did the chicken cross the playground? To get to the other slide."],
  ["What do you call an alligator in a vest? An investigator."],
  ["Why don't scientists trust atoms? Because they make up everything."],
  ["What's the difference between a snowman and a snowwoman? Snowballs."],
  ["Why was the math book sad? Because it had too many problems."],
  ["What do you call a bear with no teeth? A gummy bear."],
  ["Why did the coffee file a police report? It got mugged."],
  ["What do you get when you cross a snowman and a shark? Frostbite."],
  ["Why did the bicycle fall over? Because it was two-tired."],
  ["Why did the cookie go to the doctor? Because it was feeling crumbly."],
  ["Why did the chicken go to the séance? To talk to the other side."],
  ["What do you call a fake noodle? An impasta."],
  ["What do you call a can opener that doesn't work? A can't opener."],
  [
    "A man walks into a library and asks for a book on Pavlov's dog and Schrodinger's cat. The librarian says, 'It rings a bell but I'm not sure if it's here or not.'",
  ],
  [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  ],
  ["Why did the banana go to the doctor? Because it wasn't peeling well."],
  [
    "A priest, a rabbi, and a minister walk into a bar. The bartender looks at them and says, 'What is this, a joke?'",
  ],
  [
    "I'm reading a book on the history of glue. I just can't seem to put it down.",
  ],
  ["Why did the chicken join a band? Because it already had drumsticks."],
  [
    "Two goldfish are in a tank. One turns to the other and says, 'Do you know how to drive this thing?'",
  ],
  [
    "I saw a sign that said 'Watch for children' and I thought, 'That sounds like a fair trade.'",
  ],
  [
    "A guy walks into a bar with a parrot on his shoulder. The bartender says, 'Hey, where'd you get that thing?' The parrot replies, 'In the jungle, there's millions of them!'",
  ],
  ["I'm on a whiskey diet. I've lost three days already."],
  ["Why was the math book sad? Because it had too many problems."],
  ["Why did the tomato turn red? Because it saw the salad dressing."],
  ["What do you call a fake noodle? An impasta."],
  ["Why did the chicken cross the playground? To get to the other slide."],
  ["Why did the bicycle fall over? Because it was two-tired."],
  ["Why don't scientists trust atoms? Because they make up everything."],
];

// CODE AND FUNCTIONS START HERE!
//BIBLE VERSES CODE WORKS HERE

//CODE FOR JOKES

//CODE FOR PROVERBS

let randomBtn1 = document.querySelector("#random1");
let previousBtn1 = document.querySelector("#previous1");
let nextBtn1 = document.querySelector("#next1");
let quoteText1 = document.querySelector("#text1");
let quoteAuthor1 = document.querySelector("#author1");

console.log(quoteText1);

//DOM MANIPULATION
//Default Random Quotes Bible Verse

let counter1 = Math.trunc(Math.random() * jokes.length);
let present1 = jokes[counter1];
let [verse1, reference1] = present1;

quoteText1.textContent = verse1;
quoteAuthor1.textContent = reference1;

// quoteText.textContent = verse;
// quoteAuthor.textContent = reference;

//Button for Random Generation

function randomizer1() {
  let counter1 = Math.trunc(Math.random() * jokes.length);
  let present1 = jokes[counter1];
  let [verse1, reference1] = present1;

  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}
randomBtn1.addEventListener("click", randomizer1);

//Button for Previous Text in the array
function previousFnc1() {
  present1 = jokes[--counter1];
  let [verse1, reference1] = present1;
  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}

previousBtn1.addEventListener("click", previousFnc1);

//Button for Next Text in the array
//Button for Previous Text in the array

function nextFnc1() {
  present1 = jokes[++counter1];
  let [verse1, reference1] = present1;
  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}

nextBtn1.addEventListener("click", nextFnc1);
