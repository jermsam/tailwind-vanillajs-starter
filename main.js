import './style.css'
import {setupCounter} from './counter.js';


document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-amber-700">
      Use Composition!
    </h1>
    <div class="text-red-950 "> 
    <p>Click to add One</p>
    <button id="button" class="rounded px-5 py-2 bg-red-700 hover:bg-red-950 hover:text-red-50 active:bg-red-700">
    <span class="text-4xl p-2" id="display">
    ${0}
    </span>
    </button>
    </div>
    <p>Exercise:</p>
    <pre>
    1. Name the impure and pure functions in the code (explaining your choice)
    2. Following this example; Implement a countdown using compose
   </pre>
  </div>
`

setupCounter()
