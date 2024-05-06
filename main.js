import './style.css'
import {runApp} from './public/app.js';


document.querySelector('#app').innerHTML = `
  <div class="p-5">
    <h1 class="text-3xl mb-5 font-bold  text-gray-700">
      Todos
    </h1>
     <div class="flex gap-4 m-5">
     <input
       id="message-input"
       placeholder="Add Todo ..."
       class="focus:ring-2 columns-auto focus:ring-gray-950 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
      />
       <button id="add-button" class=" columns-auto rounded px-5 py-2 border border-gray-400 hover:bg-gray-950 hover:text-red-50 active:bg-gray-700">
       ADD
       </button>
     </div>
     <div class="flex flex-col gap-4" id="messages-list"/>
  </div>
`

runApp('message-input')('add-button')('messages-list')
