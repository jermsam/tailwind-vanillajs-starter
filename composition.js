export function curry(fn) { // curry(fn) does the currying transform
  return function curried(...args) { // returns curried that can accept multiple arguments
    if (args.length >= fn.length) {
      // if number of arguments provided (args.length) is greater than or equal to the number of arguments expected by the original function (fn.length)
      // calls the original function fn with the provided arguments (args)
      return fn.apply(this, args);
    }
    // If the condition is not true, it means there are still other arguments missing for the original function
    return function (extraArgs) {
      // concatenate the existing arguments (args) with the extra arguments (otherArgs)
      const allArgs = args.concat(extraArgs);
      // call curried function recursively until allArgs.length === number of arguments expected by the original function (fn.length)
      return curried.apply(this, allArgs);
    };
  };
}

const reducer = (acc, fn) => fn(acc);

const pipeHandlerFn = (functions, input) => functions.reduce(reducer, input)

const curriedPipeHandler = curry(pipeHandlerFn)

export const pipe = (...functions) => curriedPipeHandler(functions);
