export const numbers = [1,2,3,4,5,6];
function printNumbers(number) { console.log(Number(number)); }

// imperative loop
/** focuses on how you want to achieve a result. **/

for (let i = 0; i < numbers.length; i++) {
  printNumbers(numbers[i]);
}

// declarative
/** focuses on what you want to achieve rather than how. **/

for (let number of numbers) {
  printNumbers(number);
}

numbers.forEach(printNumbers);

/**
 The underlying mechanism of iterating through the elements is handled by the loop itself,
 not explicitly defined by the programmer.
 **/
