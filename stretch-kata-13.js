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

const pascalCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0 && input[i] !== " ") {
      output += input[i].toUpperCase();
    } else if (input[i] !== " ") {
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

const snakeCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      output += input[i];
    } else if (input[i] === " ") {
      output += "_";
    }
  } return output;
};

const kebabCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      output += input[i];
    } else if (input[i] === " ") {
      output += "-";
    }
  } return output;
};

const titleCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 0 && input[i] !== " ") {
      output += input[i].toUpperCase();
    } else if (input[i] !== " ") {
      output += input[i];
    } else if (input[i] === " ") {
      let convert = input[i + 1].toUpperCase();
      output += input[i] + convert;
      i++;
    }
  } return output;
};

const vowelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      output += input[i].toUpperCase();
    } else if (input[i] === "A" || input[i] === "E" || input[i] === "I" || input[i] === "O" || input[i] === "U") {
      output += input[i];
    } else {
      output += input[i].toLowerCase();
    }
  } return output;
};

const consonantCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      output += input[i];
    } else if (input[i] === "A" || input[i] === "E" || input[i] === "I" || input[i] === "O" || input[i] === "U") {
      output += input[i].toLowerCase();
    } else {
      output += input[i].toUpperCase();
    }
  } return output;
};

const upperCase = function(input) {
  let output = input.toUpperCase();
  return output;
};

const lowerCase = function(input) {
  let output = input.toLowerCase();
  return output;
};

const precedenceOrder = function(input, style) {
  const precedence1 = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const precedence2 = ['vowel', 'consonant'];
  const precedence3 = ['upper', 'lower'];
  let output = "";

  for (let i = 0; i < style.length; i++) {
    if (precedence1.includes(style[i])) {
      if (style[i] === 'camel') {
        output = camelCase(input);
      } else if (style[i] === 'pascal') {
        output = pascalCase(input);
      } else if (style[i] === 'snake') {
        output = snakeCase(input);
      } else if (style[i] === 'kebab') {
        output = kebabCase(input);
      } else if (style[i] === 'title') {
        output = titleCase(input);
      }
    }
  }
  for (let i = 0; i < style.length; i++) {
    if (precedence2.includes(style[i])) {
      if (style[i] === 'vowel') {
        output = vowelCase(output);
      } else if (style[i] === 'consonant') {
        output = consonantCase(output);
      }
    }
  }
  for (let i = 0; i < style.length; i++) {
    if (precedence3.includes(style[i])) {
      if (style[i] === 'upper') {
        output = upperCase(output);
      } else if (style[i] === 'lower') {
        output = lowerCase(output);
      }
    }
  }
  return output;
};

const postPrecedence = function(input, style) {
  let output = "";

  if (style === 'camel') {
    output = camelCase(input);
  } else if (style === 'pascal') {
    output = pascalCase(input);
  } else if (style === 'snake') {
    output = snakeCase(input);
  } else if (style === 'kebab') {
    output = kebabCase(input);
  } else if (style === 'title') {
    output = titleCase(input);
  } else if (style === 'vowel') {
    output = vowelCase(input);
  } else if (style === 'consonant') {
    output = consonantCase(input);
  } else if (style === 'upper') {
    output = upperCase(input);
  } else if (style === 'lower') {
    output = lowerCase(input);
  }
  return output;
};

const makeCase = function(input, style) {
  let output = "";

  if (Array.isArray(style)) {
    output = precedenceOrder(input, style);
  } else {
    output = postPrecedence(input, style);
  }
  return output;
};

//////////////////
// Precedence: //
/////////////////
// 1. camel, pascal, snake, kebab, title
// 2. vowel, consonant
// 3. upper, lower

// evaluates to: thisIsAString
console.log(makeCase("this is a string", "camel"));
// evaluates to: ThisIsAString
console.log(makeCase("this is a string", "pascal"));
// evaluates to: this_is_a_string
console.log(makeCase("this is a string", "snake"));
// evaluates to: this-is-a-string
console.log(makeCase("this is a string", "kebab"));
// evaluates to: This Is A String
console.log(makeCase("this is a string", "title"));
// evaluates to: thIs Is A strIng
console.log(makeCase("this is a string", "vowel"));
// evaluates to: THiS iS a STRiNG
console.log(makeCase("this is a string", "consonant"));
// evaluates to: THIS_IS_A_STRING
console.log(makeCase("this is a string", ["upper", "snake"]));