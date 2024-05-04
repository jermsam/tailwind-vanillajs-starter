import './style.css'
import {composedFunction} from './compose.js';


document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-cyan-700">
      Functional Composition - compose
    </h1>
    <div class="mb-2">
    <p class="text-sm">Function composition is the process of chaining together multiple functions to form a new function.</p>
    <pre class="text-sm text-cyan-950">
      const compose = (...functions) => { // Takes in a list of functions
        return (input) => {
          return functions.reduceRight((acc, fn) => { // these functions are applied in right-to-left order
            return fn(acc); // the output of one function becomes the input of the next function
          }, input);
        };
      };
    </pre>
    </div>
    <div class="mb-2">
    <p class="text-sm">Function composition is the process of chaining together multiple functions to form a new function.</p>
    <pre class="text-sm text-cyan-950">
      const add5 = (x) => x + 5;
      const multiplyBy3 = (x) => x * 3;
      const subtract10 = (x) => x - 10;
      const composedFunction = compose(subtract10, multiplyBy3, add5);
      const result = composedFunction(7);
      console.log(result); // Output: ${composedFunction(7)}
    </pre>
    </div>
     <div class="mb-2">
    <p class="text-sm">Why Composition?</p>
    Because of the puristic nature of composition api, we enjoy:
    <pre class="text-sm text-cyan-950">
      1. Readability
      2. Reusability
      3. Maintainability
    </pre>
    </div>
  </div>
`
