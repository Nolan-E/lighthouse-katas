const calculateChange = function(total, cash) {

  let numberOfChange = {};
  let remainder = cash - total;
  const changeValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  const typeOfChange = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  let newObj = {};

  for (let i = 0; i < typeOfChange.length; i++) {
    numberOfChange[i] = Math.floor(remainder / changeValue[i]);
    remainder -= changeValue[i] * numberOfChange[i];
  }
  for (let i = 0; i < typeOfChange.length; i++) {
    if (numberOfChange[i] > 0) {
      newObj[typeOfChange[i]] = numberOfChange[String(i)];
    }
  }
  return newObj;
  // return numberOfChange;
};

// // { twoDollar: 1, dime: 1, penny: 3 }      213 > 13 
console.log(calculateChange(1787, 2000));
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }  1377 > 17
console.log(calculateChange(2623, 4000));
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }      499 > 19
console.log(calculateChange(501, 1000));

////////////////////////
// Valid Denominations:
////////////////////////
// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)