import './style.css'

import {addElements, indexes} from './immutable.js';

document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-1 font-bold underline text-orange-700">
      Immutability!
    </h1>
    <p class="text-orange-950 text-sm"> Simply means it can not be changed in place (Not mutable)</p>
    <p class="text-orange-950 text-sm"> An essential concept for writing pure functions</p>
    <p class="text-sm mb-1 font-bold underline text-orange-700">Example</p>
    <pre class="text-orange-950 text-sm">
      const indexes = Object.freeze(${JSON.stringify(indexes)});
      indexes.push(...[6,7,8,9]) // throws: <span class="text-orange-700">Uncaught TypeError: Cannot add property 6, object is not extensible</span>
      export const addElements = (array)  =>  Object.freeze([...array]);
      const myindexes = addElements(indexes);
      console.log(myindexes); // prints ${addElements(indexes)}
      const ourindexes = addElements([...myindexes,6,7,8,9]) 
      console.log(ourindexes); // prints ${addElements([...addElements(indexes),6,7,8,9])}
    </pre>
  </div>
`

