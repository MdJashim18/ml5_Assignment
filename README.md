1/ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer : 

getElementById : Select a single based on its unique ID atrribue . This method always returns a single element object or null.
getElementsByClassName : Selects all elements that have a specific class name.Returns a html collection.
querySelector : Selects the first element that matches a given css selection. This method is more complex selection than ID and class.
querySelectorAll : Selects the all element that matches a given css selection . It offers high flexibility in selection .

2/ How do you create and insert a new element into the DOM?
Answer : 

Create : Using the document.createElement() method . passing the tag name of the element that we want to create .
  Example : const div = document.createElement("div");
Insert : Using the appendChild() method.This method add as a child in the parent .
  Example : div.appendChild(div)

3/ What is Event Bubbling and how does it work?
Answer : Event Bubbling is a javascript mechanism when an event triggered on a child element propagates upwards through its parent element.
When an event occur ,this process continues up DOM tree until it reches the document's root.

4/ What is Event Delegation in JavaScript? Why is it useful?
Answer : Even Delegation is a mechanism in javaScript where instead of attaching event listeners to multiple child element individually.
We attach a single event listener to their parent element . We use event bubbling to handle events on the child.
Useful : a/Performance optimization
         b/Dynamic Element
         c/Code Efficient

5/ What is the difference between preventDefault() and stopPropagation() methods?
Answer : 
 preventDefault() : This method is used to prevent the default action associated with an event from occuring.
 stopPropagation(): This method is used to stop propagation of an event through the DOM hierarchy.
