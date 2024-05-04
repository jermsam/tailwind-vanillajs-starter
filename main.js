import './style.css'
import {numbers} from './declarative_programming.js';



document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl b-5 font-bold underline text-blue-700">
      Declarative Programming.
    </h1>
    <p>We tend to stay away from details.</p>
    <p>We avoid normal for loops, while, do while, switch if and if-else</p>
    <p>For iterations, we can use <span class="test-xs text-blue-700"> for of, forEach, iterations</span></p>
    <p>For conditions, we can use <span class="test-xs text-blue-700">Ternary Operator (?:): or Logical AND (&&): or library alternatives </span></p>
    <p>Remember, readability and maintainability are key factors. Choose the approach that best suits your specific scenario.</p>
    <pre class="text-xs b-5 font-bold underline text-blue-700">Imperative Example:</pre>
    <pre class="test-xs text-blue-950">
    const numbers = ${JSON.stringify(numbers)}
    function printNumbers(number) { console.log(Number(number)); }
    for (let i = 0; i < numbers.length; i++) {
      printNumbers(numbers[i]);
    }
    </pre>
    <pre class="text-xs b-5 font-bold underline text-blue-700">Declarative Example:</pre>
    <pre class="test-xs text-blue-950">
    const numbers = ${JSON.stringify(numbers)}
    function printNumbers(number) { console.log(Number(number)); }
    numbers.forEach(printNumbers);
    </pre>
  </div>
`

setupCounter(document.querySelector('#counter'))
