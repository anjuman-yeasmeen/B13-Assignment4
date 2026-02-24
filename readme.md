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




### 3. What is Event Bubbling? And how does it work?


### 4. What is Event Delegation in JavaScript? Why is it useful?


### 5. What is the difference between preventDefault() and stopPropagation() methods?