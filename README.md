
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer: getElementById select an element using the provided id name and it returns one element, while getElementsByClassName select multiple element which match the provided class name and return a HTML collection. querySelector select an element using css selectors and return the first matching element, while querySelectorAll select multiple element matching with the provided css selectors and return a node list.

### 2. How do you create and insert a new element into the DOM?
### Answer: First of all I need to create an element using document.createElement(), then add text or content using innerText and innerHTML then I append the element into a parent using appendChild().

### 3. What is Event Bubbling? And how does it work?
### Answer: Event bubbling is the default JavaScript behavior where an event triggered on a child element propagates upward through its ancestor elements in the DOM tree—from the innermost target up to the document object. It works by first firing the event on the target element, then its parent, then grandparent, and so on.

### 4. What is Event Delegation in JavaScript? Why is it useful?
### Answer: Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements and then identifying the targeted element of the event using the event.target property. It helps user to reduces the number of event listeners and improves performance and memory usage and also improves code readability and maintainability.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
### Answer: preventDefault() stopped browser default behavior and stopPropagation() stopped the event bubbling of the target element.

