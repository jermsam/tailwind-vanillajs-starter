const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const compose = (...functions) => { // Takes in a list of functions
  return (input) => {
    return functions.reduceRight((acc, fn) => { // these functions are applied in right-to-left order
      return fn(acc); // the output of one function becomes the input of the next function
    }, input);
  };
};

export const composedFunction = compose(subtract10, multiplyBy3, add5);
