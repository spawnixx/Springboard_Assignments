function createFrequencyCounter(arr) {
  return arr.reduce((counter, item) => {
    counter[item] = (counter[item] || 0) + 1;
    return counter;
  }, {});
}

function findMode(arr) {
  const frequency = createFrequencyCounter(arr);
  let count = 0;
  let mostFrequent;

  for (let num in frequency) {
    if (frequency[num] > maxFreq) {
      mostFrequent = num;
      count = frequency[num];
    }
  }
  return +mostFrequent;
}

function validateNumbers(numbersAsStrings) {
  let result = [];
  for (let i = 0; i < numbersAsStrings.length; i++) {
    let num = Number(numbersAsStrings[i]);
    if (isNaN(num)) {
      throw new Error(`'${numbersAsStrings[i]}' is not a valid number`, 400);
    }
    result.push(num);
  }
  return result;
}

function calculateMean(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  let mid = Math.floor(numArray.length / 2);
  let median;
  if (numbers.length % 2 !== 0) {
    median = numbers[mid];
  } else {
    median = (numbers[mid - 1] + numbers[mid]) / 2;
  }
  return median;
}

module.exports = {
  createFrequencyCounter,
  validateNumbers,
  calculateMean,
  calculateMedian,
  findMode,
};
