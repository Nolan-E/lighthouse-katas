const numberOfVowels = function(data) {
  let output = 0;

  for (let i = 0; i < data.length; i++) {
    // boolean OR check for all 5 legal vowels in lowercase
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      output += 1;
    // boolean OR check for all 5 legal vowels in uppercase
    } else if (data[i] === "A" || data[i] === "E" || data[i] === "I" || data[i] === "O" || data[i] === "U") {
      output += 1;
    }
  }
  return output;
};


// should evaluate to 3
console.log(numberOfVowels("orange"));
// should evaluate to 5
console.log(numberOfVowels("lighthouse labs"));
// should evaluate to 5
console.log(numberOfVowels("aeiou"));