import './style.css'
import {setupCounter} from './counter.js';


document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-purple-700">
      Use Composition - With Currying
    </h1>
    <div class="text-purple-950 "> 
    <p>Click to add One</p>
    <button id="button" class="rounded px-5 py-2 bg-purple-700 hover:bg-purple-950 hover:text-red-50 active:bg-purple-700">
    <span class="text-4xl p-2" id="display">
    ${0}
    </span>
    </button>
    </div>
    <p>Exercise:</p>
    <pre>
    In this exercise, we have curried listenToEvent and composition api's pipe
    1. Following this example; Refactor your countdown feature that is using compose to use curried functions
    2. ALso curry the compose function
   </pre>
  </div>
`

setupCounter('#button')
