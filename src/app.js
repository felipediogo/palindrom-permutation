const EMPTY_SPACE = ' ';
const isAnyPermutationAPalindrom = (string) => {
  const letters = {};
  const toLowerSentence = string.toLowerCase();

  toLowerSentence.split('').forEach((letter) => {
    if (letter === EMPTY_SPACE) return;
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

console.log(isAnyPermutationAPalindrom("A torre da derrota"));