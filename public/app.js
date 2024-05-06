import {curry, pipe} from '../composition.js';
import {getInitialState} from '../state.js';


const state = getInitialState({
  messages: ['cool','cool','bar']
});

export const selectDomElement = (selector) => document.querySelector(`#${selector}`);

export const createDomElement = (tagName) => document.createElement(tagName);

const addClasses = (classList, element) => {
  const newElement = element.cloneNode(true);
  newElement.classList.add(...classList);
  return newElement;
}


const setAttribute = (attr,value, element) => {
  const newElement = element.cloneNode(true);
  newElement.setAttribute(attr,value);
  return newElement;
}

const addContentToElement = (content, element) => {
  const newElement = element.cloneNode(true);
  newElement.innerHTML = content;
  return newElement;
}


const appendChildToParent = curry((child,parent) => {
  const newParent =parent.cloneNode(true);
  newParent.appendChild(child);
  return newParent;
})

export const replaceElement = ( newElement, oldElement) => {
  oldElement.replaceWith(newElement);
  return newElement; // Return the updated element for potential chaining
};

const eventListeners = curry((event,callback,element)=>{
  element.addEventListener(event, callback)
  return element;
})

function addNewMessage(target) {
  const newMessage = target.value;
  const elements = document.querySelectorAll('[data-task]');
  const oldMessages = [...elements].map(el=>el.textContent);
  const newState = { messages: [...oldMessages, newMessage]};
  renderMessagesList(newState)('messages-list')
  target.value = '';
}

const keydownHandler = (e) => {
  const key = e.key;
   if(key==='Enter') {
    addNewMessage(e.target)
   }
}

const addButtonClickHandler = (e) => {
  e.preventDefault()
  const messageINPUT = selectDomElement('message-input')
  addNewMessage(messageINPUT)
}

// My impure methods. All dom side effects here
const processMessageInput = pipe(
  selectDomElement,
  eventListeners('keydown',keydownHandler),
  (messageInput)=> {
  return messageInput;
})

const processAddButton = pipe(
  selectDomElement,
  eventListeners('click',addButtonClickHandler),
  (addButton)=> {

  return addButton;
})

const curriedAddClasses = curry(addClasses)
const curriedAddContentToElement = curry(addContentToElement)
const curriedSetAttribute= curry(setAttribute)
const curriedReplaceElement= curry((selector,newElement) => {
  const oldElement = selectDomElement(selector)
  return replaceElement(newElement, oldElement);
})

const clearOldContent = element => {
  element.innerHTML=''
  return element
}

const renderMessages = (state) => {

  const updateContent = state.messages.map((message, index) => {

    const removeTask = curry((e) => {
      e.preventDefault()
      // addNewMessage(messageINPUT)
    })

    const task = pipe(
      createDomElement,
      curriedAddContentToElement(message),
      curriedSetAttribute('data-task', index),
      eventListeners('click',removeTask),
    )('div')

    const buttonClasses = ['rounded','border','w-8', 'shadow','bg-purple-400','text-white','hover:bg-purple-600','hover:text-white','hover:shadow-none'];




    const button = pipe(
      createDomElement,
      curriedAddClasses(buttonClasses),
      curriedAddContentToElement('X'),
      curriedSetAttribute('data-button', index),
      )('button')

    const taskWrapperClasses =['flex','items-center', 'justify-between','rounded','bg-blue-100', 'hover:bg-blue-300', 'hover:text-white','px-5','py-2','cursor-pointer'];


    const taskWrapper = pipe(
      createDomElement,
      curriedAddClasses(taskWrapperClasses),
      appendChildToParent(task),
      appendChildToParent(button),
      e => {
        return e;
      }
    )('div')


    return  appendChildToParent(taskWrapper)
  })
  return  pipe(clearOldContent,...updateContent)
}

const renderMessagesList = (appState) => pipe(
  selectDomElement,
  renderMessages(appState),
  curriedReplaceElement('messages-list'),
)

const processMessagesList = renderMessagesList(state)

const methods = (messageSelector,buttonSelector,listSelector)=> {
  processMessageInput(messageSelector);
  processAddButton(buttonSelector);
  processMessagesList(listSelector);
}

export const runApp = curry(methods);

