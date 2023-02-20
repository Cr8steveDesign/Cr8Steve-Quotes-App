"use strict";

//JOKES ARRAY

//PROVERBS

const proverbs = [
  [
    "If you want to go fast, go alone. If you want to go far, go together.",
    "African Proverb",
  ],
  ["The eye never forgets what the heart has seen.", "African Proverb"],
  ["A man who uses force is afraid of reasoning.", "Kenyan Proverb"],
  ["However long the night, the dawn will break.", "African Proverb"],
  [
    "The sun will shine on those who stand before it shines on those who kneel under them.",
    "African Proverb",
  ],
  [
    "A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.",
    "African Proverb",
  ],
  ["By crawling, a child learns to stand.", "African Proverb"],
  ["A wise person will always find a way.", "Tanzanian Proverb"],
  [
    "When the roots of a tree begin to decay, it spreads death to the other branches.",
    "Nigerian Proverb",
  ],
  ["The sun never sets without fresh news.", "Liberian Proverb"],
  [
    "An army of sheep led by a lion can defeat an army of lions led by a sheep.",
    "Ghanaian Proverb",
  ],
  ["Where there is love, there is no darkness.", "Burundian Proverb"],
  ["To get lost is to learn the way.", "African Proverb"],
  ["One camel does not make fun of the other camel's hump.", "Somali Proverb"],
  ["You learn how to cut down trees by cutting them down.", "Bateke Proverb"],
  ["He who learns, teaches.", "Ethiopian Proverb"],
  ["Do not follow a person who is running away.", "Kenyan Proverb"],
  [
    "He who is unable to dance says that the yard is stony.",
    "Nigerian Proverb",
  ],
  [
    "A bird that flies off the earth and lands on an anthill is still on the ground.",
    "Nigerian Proverb",
  ],
  [
    "One hand washes the other and together they wash the face.",
    "Tanzanian Proverb",
  ],
  ["Do not call to a dog with a whip in your hand.", "Sudanese Proverb"],
  ["A clear conscience is more valuable than wealth.", "South African Proverb"],
  [
    "A wise man never knows all, only fools know everything.",
    "African Proverb",
  ],
  [
    "A spider's cobweb isn't only its sleeping spring but also its food trap.",
    "African Proverb",
  ],
  [
    "The best way to eat an elephant in your path is cut him up into little pieces.",
    "Ivorian Proverb",
  ],
  [
    "African women in general need to know that it's OK for them to be the way they are - to see the way they are as a strength, and to be liberated from fear and from silence.",
    "Wangari Maathai",
  ],
  [
    "A person who sells eggs should not start a fight in the market.",
    "Nigerian Proverb",
  ],
  ["The only way to eat an elephant is one bite at a time.", "Kenyan Proverb"],
  ["Rain does not fall on one roof alone.", "Cameroonian Proverb"],
  [
    "He who thinks he is leading and has no one following him is only taking a walk.",
    "Malawian Proverb",
  ],
  [
    "A person who forgives gains more strength than the one who wronged him.",
    "Ghanaian Proverb",
  ],
  [
    "The sun will shine on those who stand before it shines on those who kneel under them.",
    "African Proverb",
  ],
  ["Smooth seas do not make skillful sailors.", "African Proverb"],
  [
    "A child who is carried on the back will not know how far the journey is.",
    "African Proverb",
  ],
  [
    "The sun will shine on those who stand before it shines on those who kneel under them.",
    "African Proverb",
  ],
  [
    "When the shepherd comes home in peace, the milk is sweet.",
    "Ethiopian Proverb",
  ],
  ["By crawling, a child learns to stand.", "African Proverb"],
  [
    "He who thinks he is leading and has no one following him is only taking a walk.",
    "Malawian Proverb",
  ],
  ["One hand alone cannot wash the face.", "Cameroonian Proverb"],
  [
    "Do not forget what is to be a sailor because of being a captain yourself.",
    "Tanzanian Proverb",
  ],
  ["No matter how hot your anger is, it cannot cook yams.", "Nigerian Proverb"],
  [
    "Wisdom is like a baobab tree; no one individual can embrace it.",
    "African Proverb",
  ],
  [
    "If you close your eyes to facts, you will learn through accidents.",
    "African Proverb",
  ],
  ["To get lost is to learn the way.", "African Proverb"],
  [
    "If you want to go quickly, go alone. If you want to go far, go together.",
    "African Proverb",
  ],
  [
    "Haste and hurry can only bear children with many regrets along the way.",
    "Senegalese Proverb",
  ],
  ["A single stick may smoke, but it will not burn.", "African Proverb"],
  ["You cannot climb a tree from the top.", "Ghanaian Proverb"],
  ["A wise person will always find a way.", "Tanzanian Proverb"],
  [
    "A bird that flies off the earth and lands on an anthill is still on the ground.",
    "Sierra Leonean Proverb",
  ],
  [
    "An army of sheep led by a lion can defeat an army of lions led by a sheep.",
    "Ghanaian Proverb",
  ],
  [
    "If the rhythm of the drum beat changes, the dance step must adapt.",
    "African Proverb",
  ],
  ["Patience can cook a stone.", "African Proverb"],
  ["The fool speaks, the wise man listens.", "Ethiopian Proverb"],
  ["Unity is strength, division is weakness.", "Swahili Proverb"],
  ["Do not look where you fell, but where you slipped.", "Liberian Proverb"],
  ["It is the calm and silent water that drowns a man.", "Ghanaian Proverb"],
  ["A good story never grows old.", "Senegalese Proverb"],
  [
    "If there is no enemy within, the enemy outside can do you no harm.",
    "African Proverb",
  ],
  ["A bad cook cannot be replaced even by a finger.", "African Proverb"],
  ["One cannot count on riches.", "African Proverb"],
  ["The house of a person we love is never far.", "African Proverb"],
  ["When one is in love, a cliff becomes a meadow.", "Ethiopian Proverb"],
  [
    "A man's bad fortune is not evidence of the wrath of the gods.",
    "Nigerian Proverb",
  ],
  ["The foot of the owner is the best fertilizer.", "Kenyan Proverb"],
];

//CODE FOR PROVERBS

let randomBtn1 = document.querySelector("#random1");
let previousBtn1 = document.querySelector("#previous1");
let nextBtn1 = document.querySelector("#next1");
let quoteText1 = document.querySelector("#text1");
let quoteAuthor1 = document.querySelector("#author1");

console.log(quoteText1);

//DOM MANIPULATION
//Default Random Quotes Bible Verse

let counter1 = Math.trunc(Math.random() * proverbs.length);
let present1 = proverbs[counter1];
let [verse1, reference1] = present1;

quoteText1.textContent = verse1;
quoteAuthor1.textContent = reference1;

// quoteText.textContent = verse;
// quoteAuthor.textContent = reference;

//Button for Random Generation

function randomizer1() {
  let counter1 = Math.trunc(Math.random() * proverbs.length);
  let present1 = proverbs[counter1];
  let [verse1, reference1] = present1;

  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}
randomBtn1.addEventListener("click", randomizer1);

//Button for Previous Text in the array
function previousFnc1() {
  present1 = proverbs[--counter1];
  let [verse1, reference1] = present1;
  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}

previousBtn1.addEventListener("click", previousFnc1);

//Button for Next Text in the array
//Button for Previous Text in the array

function nextFnc1() {
  present1 = proverbs[++counter1];
  let [verse1, reference1] = present1;
  quoteText1.textContent = verse1;
  quoteAuthor1.textContent = reference1;
}

nextBtn1.addEventListener("click", nextFnc1);
