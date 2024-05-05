// import {pipe} from './composition.js';
import {listenToEvent, pipe} from './curried.js';

export const selectDomElement = (selector) => {
  return () => document.querySelector(selector);
};


export const addValue = (initialValue, valueToAdd) =>  initialValue + valueToAdd;


const calculateUpdatedContent = (element, newVal) => {
  const initialValue = parseInt(element.innerHTML);
  return addValue(initialValue, newVal);
};

const createUpdatedElement = (element, content) => {
  const updatedElement = element.cloneNode(true); // Create a copy to avoid modifying original
  updatedElement.innerHTML = content;
  return updatedElement;
};

export const replaceElement = (oldElement, newElement) => {
  oldElement.replaceWith(newElement);
  return newElement; // Return the updated element for potential chaining
};

export const updateElement = (element, content) => {
  // Handle actual DOM update (replace or modify existing element)
  const updatedElement = createUpdatedElement(element, content);
  return replaceElement(element, updatedElement); // Replace with updated copy
};



export const eventHandler = (target, event, action ) =>
  pipe(
    selectDomElement(target),
    listenToEvent(event)(action)
  );

const incrementContent = (element) => {
  const newContent = calculateUpdatedContent(element, 1);
  return { element, newContent };
};

export const action = (e) => {
  e.preventDefault();
  const selectDisplay = selectDomElement('#display')
  const output = pipe(selectDisplay,incrementContent)();
  const display = output.element;
  const content = output.newContent;
  updateElement(display, content);
}

export const setupCounter = (target) => eventHandler(target,'click',  action)();
