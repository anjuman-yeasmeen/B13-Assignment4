## Answers to Questions


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector /querySelectorAll?

getElementById() :

Selects one element by its ID and returns Single element object.
As for example;
html: <h1 id="title">Hello</h1>
and Js: const heading = document.getElementById("title");


getElementsByClassName():

Selects elements by class name and returns HTMLCollection (array-like).
for example;
html:
<div class="box"></div>
<div class="box"></div>

and JS : const boxes = document.getElementsByClassName("box");
we get a collection of elements.


querySelector():

querySelector() selects the first matching element using a CSS selector.
Returns single element.
html:
<h1 id="title">Hello World</h1>
JS :
const heading = document.querySelector("#title");
console.log(heading);
"#" is used for id
It selects the element with id="title".

where querySelectorAll() ; Selects ALL matching elements , Uses CSS selector and
 Returns a NodeList.
 For example;
 const paras = document.querySelectorAll(".text");
console.log(paras);



### 2. How do you create and insert a new element into the DOM?

Answer: To create and insert a new element into the DOM using JavaScript, we follow three main steps:

(1)Create the Element: Use the document.createElement() method to create a new tag in memory.
   Example: const newDiv = document.createElement("div");

(2) Set Attributes and Content: Add necessary classes, IDs, or text to the element so it functions and looks correctly.
Example: newDiv.className = "card"; and newDiv.innerText = "Job Applied!";

(3)Insert into the DOM: Finally, attach the newly created element to a parent element that is already on the page using methods like appendChild() or prepend().

Example: document.getElementById("container").appendChild(newDiv);



### 3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a type of event propagation in the HTML DOM where an event starts from the target element and then "bubbles up" to its ancestors in the DOM tree.

How it works: When an event (like a click) happens on an element, the event handler of the target element runs first. Then, it triggers the event handlers of its parent, then the grandparent, and continues upward until it reaches the document or window object. This allows parent elements to handle events triggered by their children, a concept widely used in "Event Delegation."

Example:
<div id="grandparent" style="padding: 50px; background: lightblue;">
  Grandparent
  <div id="parent" style="padding: 50px; background: lightgreen;">
    Parent
    <button id="child" style="padding: 20px;">Click Me!</button>
  </div>
</div>

<script>
  document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
  });

  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked!");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child (Button) Clicked!");
  });
</script>


### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where a single event listener is added to a parent element to manage events for all its children. It relies on Event Bubbling. 
It is useful because it saves memory by reducing the number of listeners and ensures that dynamically added elements (elements created after the initial page load) still respond to events without needing new listeners.



### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the default browser behavior associated with an event (like preventing a link from navigating), but it allows the event to continue bubbling up the DOM. On the other hand, stopPropagation() stops the event from bubbling up to parent elements, ensuring that only the specific element's event handler is executed.
