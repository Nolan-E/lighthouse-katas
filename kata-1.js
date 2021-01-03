const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;
  let output = 0;

  // get largest number
  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }
  // get second largest number
  for (let j = 0; j < data.length; j++) {
    if (data[j] < num1 && data[j] > num2) {
      num2 = data[j];
    }
  }
  // final sum and return output
  output = num1 + num2
  return output;
};

// should evaluate to 11
console.log(sumLargestNumbers([1, 10]));
// should evaluate to 5
console.log(sumLargestNumbers([1, 2, 3]));
// should evaluate to 126
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));