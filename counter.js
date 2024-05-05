import {pipe} from './composition.js';

export const selectDomElement = (selector) => {
  return () =>{
    return document.querySelector(selector);
  }
};


export const addValue = (valueToAdd) => {
  return (element) =>{
    element.innerHTML = parseInt(element.innerText)+valueToAdd;
    return element;
  }
};

export const addValueToElementContent = (selector, valueToAdd) => {
   return (element) =>{
     pipe(
       selectDomElement(selector),
       addValue(valueToAdd)
     )()
     return element;
   }
}

export const listenToEvent = (event,action) => {
  return(target) =>{
    target.addEventListener(event, action);
    return target;
  }
}

export const eventHandler = (event, targetSelector, action) => {
  return () =>{
    return pipe(
      selectDomElement(targetSelector),
      listenToEvent(event, action)
    )()
  }
}

const action = pipe(
  selectDomElement('#display'),
  addValueToElementContent('#display',1)
)

export const setupCounter = eventHandler('click', 'button', action)



