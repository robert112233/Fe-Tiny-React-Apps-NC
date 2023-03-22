const randomizer = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const adjective1 = [
  "utterly",
  "stupid",
  "annoying",
  "crazy",
  "whopping",
  "slippery",
  "incredibly",
  "unbelievably",
  "remarkably",
  "extraordinarily",
];
const adjective2 = [
  "big",
  "smelly",
  "little",
  "flomping",
  "slimy",
  "mouldy",
  "enourmous",
  "minuscule",
  "jaffa-cake flavoured",
  "careless",
  "boring",
  "dull",
];
const noun = [
  "baffoon",
  "idiot",
  "jaffa-cake",
  "flampard",
  "crunkatron",
  "noggin-basher",
  "donkey",
  "whip-whop",
  "mop and bucket",
  "pencil case",
  "clonker",
  "slink-head",
];
const prefix = [
  "You're such a",
  "Aren't you a",
  "Out of everyone I've met, you're the",
  "You",
  "Wow, look at this",
  "Have you seen this",
  "You're a great example of a",
  "I used to like you, but then I realised you're a",
  "I hate to call you this but you're a",
  "Last week you acted like a",
  `You can't even fight a ${randomizer(noun)} which is why you're a`,
];

const shakeAdjective1 = ["peverished", "3 inched", "frog-minded"];
const shakeAdjective2 = [
  "bumbling",
  "fat",
  "creamfaced",
  "elf-skinned",
  "bunch-back’d",
  "sodden-witted",
];
const shakeNoun = [
  "tart",
  "fool",
  "coward",
  "stewed prune",
  "sour-grape",
  "scullion",
  "rampallian",
];
const shakePrefix = [
  "Thou art a",
  "One has never encountered such a",
  "Thous't 't most",
];
module.exports = {
  randomizer,
  prefix,
  adjective1,
  adjective2,
  noun,
  shakeAdjective1,
  shakeAdjective2,
  shakeNoun,
  shakePrefix,
};
