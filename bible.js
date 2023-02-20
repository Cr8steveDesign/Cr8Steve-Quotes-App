"use strict";

//BIBLE MOTIVATIONAL VERSES
const bibleVerses = [
  [
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    "John 3:16",
  ],
  ["I can do all this through him who gives me strength.", "Philippians 4:13"],
  [
    "Trust in the Lord with all your heart and lean not on your own understanding.",
    "Proverbs 3:5",
  ],
  [
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    "Matthew 6:34",
  ],
  [
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "Romans 8:28",
  ],
  [
    "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    "Matthew 6:33",
  ],
  [
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "Joshua 1:9",
  ],
  ["The Lord is my shepherd, I lack nothing.", "Psalm 23:1"],
  [
    "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
    "Galatians 2:20",
  ],
  [
    "And we urge you, brothers and sisters, warn those who are idle and disruptive, encourage the disheartened, help the weak, be patient with everyone.",
    "1 Thessalonians 5:14",
  ],
  [
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "Philippians 4:6",
  ],
  [
    "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
    "Jeremiah 29:11",
  ],
  [
    "But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
    "2 Corinthians 12:9",
  ],
  [
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
    "Psalm 28:7",
  ],
  [
    "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
    "Psalm 32:8",
  ],
  [
    "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
    "Psalm 46:10",
  ],
  [
    "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.",
    "James 1:12",
  ],
  [
    "In all your ways submit to him, and he will make your paths straight.",
    "Proverbs 3:6",
  ],
  [
    "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    "Proverbs 18:10",
  ],
  [
    "I can do all things through Christ who strengthens me.",
    "Philippians 4:13",
  ],
  [
    "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    "Psalm 18:2",
  ],
  [
    "Do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is the good, acceptable, and perfect will of God.",
    "Romans 12:2",
  ],
  [
    "Commit to the Lord whatever you do, and he will establish your plans.",
    "Proverbs 16:3",
  ],
  [
    "Rejoice in hope, be patient in tribulation, be constant in prayer.",
    "Romans 12:12",
  ],
  [
    "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    "Zephaniah 3:17",
  ],
  [
    "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
    "Proverbs 9:10",
  ],
  [
    "And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart.",
    "Galatians 6:9",
  ],
  [
    "For the Lord your God is the one who goes with you to fight for you against your enemies to give you victory.",
    "Deuteronomy 20:4",
  ],
  [
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
    "Galatians 5:22-23",
  ],
  [
    "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.",
    "Romans 5:1",
  ],
  [
    "Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal.",
    "Isaiah 26:4",
  ],
  [
    "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
    "James 1:5",
  ],
  [
    "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    "John 15:5",
  ],
  [
    "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
    "Colossians 3:17",
  ],
  [
    "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    "Psalm 27:1",
  ],
  [
    "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    "Galatians 6:9",
  ],
  [
    "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
    "1 Corinthians 15:58",
  ],
  [
    "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
    "Matthew 6:34",
  ],
  [
    "He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "Isaiah 40:29-31",
  ],
  [
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
    "Psalm 28:7",
  ],
  [
    "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    "John 16:33",
  ],
  ["He heals the brokenhearted and binds up their wounds.", "Psalm 147:3"],
  [
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    "Isaiah 40:31",
  ],
  [
    "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
    "Isaiah 41:13",
  ],
  [
    "I will lift up my eyes to the hills— From whence comes my help? My help comes from the Lord, Who made heaven and earth.",
    "Psalm 121:1-2",
  ],
  [
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    "Matthew 6:34",
  ],
  [
    "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Romans 15:13",
  ],
  [
    "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 23:4",
  ],
  [
    "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
    "Galatians 2:20",
  ],
];

//CODE FOR BIBLE VERSE

let randomBtn = document.querySelector("#random");
let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");
let quoteText = document.querySelector("#text");
let quoteAuthor = document.querySelector("#author");

//DOM MANIPULATION
//Default Random Quotes Bible Verse

let counter = Math.trunc(Math.random() * 50);
let present = bibleVerses[counter];
let [verse, reference] = present;

quoteText.textContent = verse;
quoteAuthor.textContent = reference;

// quoteText.textContent = verse;
// quoteAuthor.textContent = reference;

//Button for Random Generation

function randomizer() {
  let counter = Math.trunc(Math.random() * 50);
  let present = bibleVerses[counter];
  let [verse, reference] = present;

  quoteText.textContent = verse;
  quoteAuthor.textContent = reference;
}
randomBtn.addEventListener("click", randomizer);

//Button for Previous Text in the array
function previousFnc() {
  if (counter > bibleVerses.length) {
    alert("End of list. Use the previous or random for others");
  } else {
    present = bibleVerses[--counter];
    let [verse, reference] = present;
    quoteText.textContent = verse;
    quoteAuthor.textContent = reference;
  }
}

previousBtn.addEventListener("click", previousFnc);

//Button for Next Text in the array
//Button for Previous Text in the array
if (counter > 48) {
  alert("End of list. Use the previous or random for others");
}

function nextFnc() {
  present = bibleVerses[++counter];
  console.log(bibleVerses.length);
  console.log(counter);

  let [verse, reference] = present;
  quoteText.textContent = verse;
  quoteAuthor.textContent = reference;
}

nextBtn.addEventListener("click", nextFnc);
