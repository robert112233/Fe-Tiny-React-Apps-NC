const words = [
  "BEATS",
  "QUACK",
  "SQUAT",
  "SHARP",
  "POUCH",
  "HARPS",
  "RIGHT",
  "WRONG",
  "LIVES",
  "SPEAR",
  "SHIRT",
  "TRIES",
  "PLANE",
  "CRAZY",
  "CRANE",
  "PHONE",
  "TIMER",
];

const randomizer = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

module.exports = { words, randomizer };
