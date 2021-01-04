const urlEncode = function(text) {
  let encodedText = [];
  let finalString = "";

  // loop through string and push legal characters
  // or %20 to build an array.
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      encodedText.push(text[i]);
    } else if (text[i] === " ") {
      encodedText.push("%20");
    }
  }
  // get rid of trailing and leading %20 the loop created
  if ((encodedText[text.length - 1]) === "%20") {
    encodedText.pop();
  }
  if (encodedText[0] === "%20") {
    encodedText.shift();
  }
  // join legal array elements as one string
  for (let j = 0; j < encodedText.length; j++) {
    finalString += encodedText[j];
  }
  return finalString;
};



// should evaluate to Lighthouse%20Labs
console.log(urlEncode("Lighthouse Labs"));
// should evaluate to Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs "));
// should evaluate to blue%20is%20greener%20than%20purple%20for%20sure
console.log(urlEncode("blue is greener than purple for sure"));