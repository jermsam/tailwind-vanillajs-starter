import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-green-700">
      Pure And Impure!
    </h1>
    <div class="mb-2">
    <pre class="text-green-700 font-bold text-sm">Why Strive To Write Pure</pre>
    <p class="text-green-950 text-sm">
    1. Easy to test
    </p>
    <p class="text-green-950 text-sm">
    2. Easy to predict: Always return the same result, With the same input <span class="text-green-700">(No surprises!)</span>
    </p>
    <p class="text-green-950 text-sm">
    3. Reusable:  Can be resued in different parts of your code without worrying about side effects affecting other parts <span class="text-green-700">(Hence promoting modularity and maintainability!)</span>
    </p>
    </div>
    <div class="mb-2">
    <pre class="text-green-700 font-bold text-sm">Rules for Purity</pre>
      <div class="mb-1">
        <p class="text-green-950 text-sm">
        1. Can only work on data passed to it. Can not work on external data.
        <pre class="text-sm text-green-700">
        // pure
        const sum = (a, b) => a + b;
        // pure
        const addTo = (a) => a + 10;
        // impure
        let sum = 0;
        const addSum = (a) => a + sum;
        </pre>
        </p>
        <p class="text-green-950 text-sm">
        Impure due to External Variable: The function relies on the external variable sum which is not part of its arguments. This variable could be modified outside the function, leading to unexpected behavior.
       </p>
        <p class="text-green-950 text-sm">
         Non-deterministic Output: Because sum can change, the function's output for the same input a can vary depending on the current value of sum.
        </p>
      </div>
       <div class="mb-1">
        <p class="text-green-950 text-sm">
        2. Can only work on data passed to it. Can not work on external data.
        <pre class="text-sm text-green-700">
        // pure
        const sum = (a, b) => a + b;
        // pure
        const addTo = (a) => a + 10;
        // impure
        let sum = 0;
        const addSum = (a) => a + sum;
        // impure
        let sum = 0;
        const addSumAndPrint = (a,b) => {
        let sum =  a + b;
        console.log(sum); // console.log is a side effect.
        return sum;
        };
        </pre>
        </p>
        <p class="text-green-950 text-sm">
        Impure due to External Variable: The function relies on the external variable sum which is not part of its arguments. This variable could be modified outside the function, leading to unexpected behavior.
       </p>
        <p class="text-green-950 text-sm">
         Non-deterministic Output: Because sum can change, the function's output for the same input a can vary depending on the current value of sum.
        </p>
         <p class="text-green-950 text-sm">
         Observable Side Effect: Because console.log modifies (mutates) the external environment (console) by displaying the value of sum. This behavior goes beyond simply calculating and returning a value.
        </p>
      </div>
      <p>So yes: When writing our code: </p>
      </div>
       <div class="mb-2">
    <pre class="text-green-700 font-bold text-sm">Allowance for ImPure</pre>
    <p class="text-green-950 text-sm">
    1. Interaction with External Systems: 
    <p class="text-sm text-green-700">
    When your code needs to interact with external elements like the console, files, network, or user interface, you'll likely introduce side effects. 
    </p>
    </p>
    <p class="text-green-950 text-sm">
    2. Managing Application State: 
    <p class="text-sm text-green-700">
    If your application has global state or mutable data that needs to be updated
    </p>
    </p>
    <p class="text-green-950 text-sm">
    3. Readability:  
    <p class="text-green-700 text-sm">
    Sometimes, impure functions can improve readability when dealing with complex operations that naturally involve side effects
    </p>
    </p>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
