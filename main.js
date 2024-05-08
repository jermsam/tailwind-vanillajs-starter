import './style.css'
import {result} from './transducers.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline text-amber-700">
      Transducers! ${result}
    </h1>
  </div>
`

