const repeatNumbers = function(data) {
  let toBeRepeated = '';

  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      toBeRepeated += ', ';
    }
    for (let j = 0; j < data[i][1]; j++) {
      toBeRepeated += data[i][0];
    }
  }
  return toBeRepeated;
};

// data[0] is the number to be repeated
// data[1] is the times data[0] is to be repeated

// RETURN OUTPUTS AS A STRING
// should evaluate to 1111111111
console.log(repeatNumbers([ [ 1, 10 ] ]));
// should evaluate to 11, 222
console.log(repeatNumbers([[1, 2], [2, 3]]));
// should evaluate to 10101010, 343434343434, 9292
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));