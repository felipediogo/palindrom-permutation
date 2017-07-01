const isEqual = (firstValue) => (secondValue) => firstValue === secondValue;
const invertString = (value) => value.slice().reverse().join('');
const compose = (funcs) => (value) => funcs.reduce((previous, current) => current(previous), value);
const isAPalindrome = (text) => text.slice().join('') === invertString(text);
const isPalindrome = (text) => compose([invertString, isEqual(text)])(text);
const getFatorial = (value, acc) => {
  if (value > 0) {
    acc *= value;
    return getFatorial(--value, acc);
  }
  return acc;
};

// console.log(isAPalindrome('aba'));

const invertValues = (array, index) => {
  let response = array.slice();
  response[index] = array[index+1];
  response[index+1] = array[index];
  return response;
}
const isPermutationIndexEqualsArrayLength = (permutationIndex, array) => permutationIndex >= (array.length - 2);
const isPermutationIndexEqualsArrayInitialLength = (permutationIndex) => permutationIndex <= 1;
const changeInitialValue = (permutationIndex, array) => {
  console.log(permutationIndex);
  const newArray = array.slice();
  const item = newArray[permutationIndex];
  newArray.splice(permutationIndex, 1);
  const response = new Array();
  response.push(item);
  newArray.forEach(a => response.push(a));

  return response;
};

const permValues = [];

const index = (message) => {
  let fatorial = getFatorial(message.length, 1);
  const round = fatorial / message.length;
  let currentPermutation = message.split('');
  let permutationIndex = 0;
  let isGoingUp = true;
  if (isAPalindrome(currentPermutation)) {
    return 'YES';
  }
  permValues.push(currentPermutation);
  let currentRound = 1;
  while (true) {
    if (fatorial <= 0) {
      break;
    }
    for (var i=1; i<round;i++) {

      if (isPermutationIndexEqualsArrayLength(permutationIndex, currentPermutation)) {
        isGoingUp = false;
      } else if (isPermutationIndexEqualsArrayInitialLength(permutationIndex)) {
        isGoingUp = true;
      }
      permutationIndex += isGoingUp ? 1 : -1;
      currentPermutation = invertValues(currentPermutation, permutationIndex);
      if (isAPalindrome(currentPermutation)) {
        return 'YES';
      }
      console.log(`fatorial -> ${fatorial} | round -> ${i} of ${round} | permutation -> ${currentPermutation}`);
      permValues.push(currentPermutation);
    }
    fatorial-=round;
    if (fatorial > 0) {
      currentPermutation = changeInitialValue(currentRound, message.split(''));
      if (isAPalindrome(currentPermutation)) {
        return 'YES';
      }
      permValues.push(currentPermutation);
      currentRound++;
    }
  }
  console.log(permValues);
  return 'NO';
};


console.log(index('12345678901'));

// const t = ['1', '1', '3'];
// const x = t.slice();
// x[1] = '2';
// console.log(t);
// console.log(x);

// const text = '1234';
/*
[1, 2, 3, 4]

1 - [1, 2, 3, 4]
2 - [1, 3, 2, 4]
3 - [1, 3, 4, 2]
4 - [1, 4, 3, 2]
5 - [1, 4, 2, 3]
6 - [1, 2, 4, 3]

7 - [2, 1, 4, 3]
8 - [2, 4, 1, 3]
9 - [2, 4, 3, 1]
0 - [2, 3, 4, 1]
1 - [2, 3, 1, 4]
2 - [2, 1, 3, 4]
3 - [3, 4, 1, 2]
4 - [3, 1, 4, 2]
5 - [3, 1, 2, 4]
6 - [3, 2, 1, 4]
7 - [3, 2, 4, 1]
8 - [3, 4, 2, 1]
9 - [4, 1, 2, 3]
0 - [4, 2, 1, 3]
1 - [4, 2, 3, 1]
2 - [4, 3, 2, 1]
3 - [4, 3, 1, 2]
4 - [4, 1, 3, 2]
*/
