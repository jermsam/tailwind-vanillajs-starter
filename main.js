import './style.css'
import {pipeFunction} from './pipe.js';


document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-cyan-700">
      Functional Composition - pipe
    </h1>
    <div class="h-[300px] w-[400px]">
    <img 
    src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*M66BkV3mHUFs417euzOJaA.jpeg" 
    alt="composition"
    class="object-contain h-full w-full"
    />
    </div>
    <div class="mb-2">
    <p class="text-sm">Function composition is the process of chaining together multiple functions to form a new function.</p>
    <pre class="text-sm text-cyan-950">
      const pipe = (...functions) => { // Takes in a list of functions
        return (input) => {
          return functions.reduce((acc, fn) => { // these functions are applied in left-to-right order
            return fn(acc); // the output of one function becomes the input of the next function
          }, input);
        };
      };
    </pre>
    </div>
    <div class="mb-2">
    <p class="text-sm">Example.</p>
    <pre class="text-sm text-cyan-950">
      const add5 = (x) => x + 5;
      const multiplyBy3 = (x) => x * 3;
      const subtract10 = (x) => x - 10;
      const pipeFunction = pipe(add5, multiplyBy3, subtract10);
      const result = pipeFunction(7);
      console.log(result); // Output: ${pipeFunction(7)}
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
