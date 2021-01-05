const camelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      output += input[i];
    } else if (input[i] === " ") {
        let convert = input[i + 1].toUpperCase();
        // adds upper case version of letter trailing whitespace.
        output += convert;
        // incrementer skips the character just added as upper case,
        // as the next pass through the loop i will now equal our i+1
        i++;
    }
  } return output;
};


// should evaluate to thisIsAString
console.log(camelCase("this is a string"));
// should evaluate to loopyLighthouse
console.log(camelCase("loopy lighthouse"));
// should evaluate to supercalifragalisticexpialidocious
console.log(camelCase("supercalifragalisticexpialidocious"));