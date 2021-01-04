const checkAir = function (samples, threshold) {
  let dirtySamples = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySamples += 1;
    }
  }
  if ((dirtySamples / samples.length) >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};


// should evaluate to Polluted
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));
  
// should evaluate to Polluted
console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));
    
// should evaluate to Clean
console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))