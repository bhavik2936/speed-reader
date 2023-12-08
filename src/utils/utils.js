// Returns interval (in milliseconds) for every word to be displayed
const calculateInterval = (wpm) => {
  const interval = 60 / wpm;
  return interval * 1000;
};

// Split space-separated words into an array
const splitWords = (text) => {
  const words = text.split(' ');
  return words;
};

export { calculateInterval, splitWords };
