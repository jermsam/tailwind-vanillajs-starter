import {transducerFactory} from './composition.js';


const square = x => x * x;
const double = x => 2 * x;
const minusOne = x => x - 1;
const squareThenDoubleTransducer = transducerFactory(square, double, minusOne );

const arr = [1, 2, 3, 4, 5];

export const result = squareThenDoubleTransducer(arr);

console.log(result); // Output: [2, 8, 18, 32, 50]
