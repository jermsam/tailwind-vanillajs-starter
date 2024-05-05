import {curry} from './currying.js';

const reducer = (acc, fn) => fn(acc);


const pipeHandlerFn = (functions, input) => functions.reduce(reducer, input)

const curriedPipeHandler = curry(pipeHandlerFn)

export const pipe = (...functions) => curriedPipeHandler(functions);

const eventHandlerFn = (event, action, element) => {
  element.addEventListener(event, action);
  return element;
}

export const listenToEvent = curry(eventHandlerFn);
