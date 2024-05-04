const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const pipe = (...functions) => { // Takes in a list of functions
  return (input) => {
    return functions.reduce((acc, fn) => { // these functions are applied in left-to-right order
      return fn(acc); // the output of one function becomes the input of the next function
    }, input);
  };
};

export const pipeFunction = pipe(add5, multiplyBy3, subtract10);
