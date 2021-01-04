const conditionalSum = function(values, condition) {
  let output = 0;

  for (let i = 0; i < values.length; i++) {
    if (condition === 'even') {
      if (values[i] % 2 === 0) {
        output += values[i];
      }
    } else if (condition === 'odd') {
      if (values[i] % 2 !== 0) {
        output += values[i];
      }
    }
  }
  return output;
};



// should evaluate to 6
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// should evaluate to 9
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// should evaluate to 144
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// should evaluate to 0
console.log(conditionalSum([], "odd"));