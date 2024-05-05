export const pipe = (...functions) => { // Takes in a list of functions
  return (input) => {
    return functions.reduce((acc, fn) => { // these functions are applied in left-to-right order
      return fn(acc); // the output of one function becomes the input of the next function
    }, input);
  };
};

export const compose = (...functions) => { // Takes in a list of functions
  return (input) => {
    return functions.reduceRight((acc, fn) => { // these functions are applied in right-to-left order
      return fn(acc); // the output of one function becomes the input of the next function
    }, input);
  };
};
