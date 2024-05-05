import './style.css'
import {advancedCurriedSum, curriedSum} from './currying.js';


document.querySelector('#app').innerHTML = `
  <div class="p-3">
    <h1 class="text-3xl mb-5 font-bold underline text-indigo-700">
      Curring
    </h1>
    <p class="text-sm">
    Currying is a transformation of functions that translates a function from callable as <span class="text-indigo-700">f(a, b, c)</span> into callable as <span class="text-indigo-700">f(a)(b)(c).</span>
    </p>
    <div class="mb-2 text-sm text-indigo-950">
    <p class="text-sm mb-5 font-bold underline text-indigo-700">Simple Example: </p>
    <pre>
    export function curryTwice(fn) { <span class="text-indigo-700">// curryTwice(fn) does the currying transform</span>
      return function(a) {
        return function(b) {
          return fn(a, b);
        };
      };
    }
    
    <span class="text-indigo-700">// usage</span>
    function sum(a, b) {
      return a + b;
    }
    
    const curriedSum = curryTwice(sum);
    const addOneToTwo = curriedSum(1)(2);
    console.log(addOneToTwo) <span class="text-indigo-700">// prints ${curriedSum(1)(2)}</span>
    </pre>
    <p>The result of curryTwice(sum) is a wrapper function(a)</p>
    <p>when function(a) is called, the argument 1 is saved in the lexical environment and a new wrapper is returned function(b)</p>
    <p>then function(b) is called with argument 2 is passed to the original function sum to return (1 + 2) = 3</p>
    </div>
    <div class="mb-2 text-sm text-indigo-950">
    <p class="text-sm mb-5 font-bold underline text-indigo-700">Advanced Example: </p>
    <pre>
    function curry(fn) { <span class="text-indigo-700">// curry(fn) does the currying transform</span>
      return function curried(...args) { <span class="text-indigo-700">// returns curried that can accept multiple arguments</span>
       if(args.length >= fn.length) {
         <span class="text-indigo-700"> 
         // if number of arguments provided (args.length) is greater than or equal to the number of arguments expected by the original function (fn.length)
         // calls the original function fn with the provided arguments (args)
         </span>
         return fn.apply(this,args);
       }
       <span class="text-indigo-700">// If the condition is not true, it means there are still other arguments missing for the original function</span>
        return function(extraArgs) {
         <span class="text-indigo-700">// concatenate the existing arguments (args) with the extra arguments (otherArgs)</span>
         const allArgs = args.concat(extraArgs);
          <span class="text-indigo-700">
          // call curried function recursively until allArgs.length === number of arguments expected by the original function (fn.length)
          </span>
          return curried.apply(this, allArgs);
        };
      };
    }
    
    <span class="text-indigo-700">// usage</span>
    function sum(a, b, c) {
      return a + b + c;
    }
    
    const curried = curry(sum);
    const notCurried = curried(1,2,3);
    const curriedPartially = curried(1,2)(3);
    const curriedFully = curried(1)(2),(3);
    console.log(notCurried) <span class="text-indigo-700">// prints ${advancedCurriedSum(1,2,3)}</span>
    console.log(curriedPartially) <span class="text-indigo-700">// prints ${advancedCurriedSum(1,2)(3)}</span>
    console.log(curriedFully) <span class="text-indigo-700">// prints ${advancedCurriedSum(1)(2)(3)}</span>
    </pre>
    </div>
  </div>
`

