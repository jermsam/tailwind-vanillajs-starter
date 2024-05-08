export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (extraArgs) {
      const allArgs = args.concat(extraArgs);
      return curried.apply(this, allArgs);
    };
  };
}

const reducer = (acc, fn) => fn(acc);

const pipeHandlerFn = (functions, input) => functions.reduce(reducer, input);

const curriedPipeHandler = curry(pipeHandlerFn);

export const pipe = (...functions) => curriedPipeHandler(functions);


export const transducerFactory = (...functions) => input => input.reduce((acc, val) => {
  acc.push(pipe(...functions)(val));
  return acc;
}, []);


