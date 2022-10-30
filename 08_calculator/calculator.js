const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let total = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === undefined) {
      return total;
    };

    total = total * array[i + 1];
  };
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  if (n == 0) {
    return 1;
  } else {
    let array = [];
    for (let i = 1; i <= n; i++) {
      array.push(i);
    };
  
    return multiply(array);
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
