const IGNORED_CHARS = ' ?!,.`\'\"';
const isAnyPermutationAPalindrom = (string) => {
  const letters = {};
  const toLowerSentence = string.toLowerCase();

  toLowerSentence.split('').forEach((letter) => {
    if (IGNORED_CHARS.indexOf(letter) > 0) return;
    if (!letters[letter]) {
      letters[letter] = 0;
    }
    letters[letter]++;
  });
  
  let isEven = false;
  const lettersMap = Object.keys(letters);
  for (var i=0; i<lettersMap.length; i++) {
    let letter = lettersMap[i];
    if (!(letters[letter] % 2 == 0)) {
      if (isEven) {
        return false;
      }
      isEven = true;
    }
  }
  return true;
};

console.log(isAnyPermutationAPalindrom('"Stop!" nine myriad murmur. "Put up rum, rum, dairymen, in pots."'));
console.log(isAnyPermutationAPalindrom("Star? Come, Donna Melba, I'm an amiable man -- no Democrats!"));