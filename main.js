import './style.css'

import { add, male,female } from './first_class_objs.js'

document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold underline text-amber-700">
      First class Objects!
    </h1>
    <pre class="text-xs text-amber-900">function add (x,y) { return x + y ;}</pre>
    <p>The type of <span class="text-xs text-amber-900">add</span> is <span class="text-xs text-amber-900">${typeof add}</span></p>
    <p>This means functions can be assigned to variables. eg:</p>
    <pre class="text-xs text-amber-900">const sum = function (x,y) { return x + y ;}</pre>
    <p>Now add and sum, though working exactly the same, are two different objects in JS</p>
    <p>And since a function can be assigned as a value of a variable, this means we can assign functions as arguments in other functions</p>
    <p>This is why we have callback functions, event handlers etc. Take for example:</p>
    <pre class="text-xs text-amber-900">document.addEventListener('click', function(e) {})</pre>
    <p>This also means that a function can return another function</p>
     <pre class="text-xs text-amber-900">const makeGender = function (gender) { return function sayGender() { return \`$\{name} is $\{gender}\`;}}</pre>
     <pre class="text-xs text-amber-900">const male = makeGender('male');</pre>
     <pre class="text-xs text-amber-900">const female = makeGender('female');</pre>
     <pre class="text-xs text-amber-900">console.log(female('Joan')); // prints ${female('Joan')}</pre>
     <pre class="text-xs text-amber-900">console.log(male('John')); // prints ${male('John')}</pre>
     <p>Thus, like other types in Javascript; Functions are <b class="text-xs text-amber-900">FIRST CLASS OBJECTS</b></p>
     <p>And that's the foundational concept of functional programing</p>
  </div>
`

