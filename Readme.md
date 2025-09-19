1.
getElementById("id") Returns one element with the exact id. Always a single element (or null if not found).

getElementsByClassName("class")  Returns a live HTMLCollection of all elements with that class. 

querySelector("selector")  Returns the first element that matches a CSS selector. it works for class, id etc.


2.
First Create element

Then Add content or attributes

Finally Insert into the DOM by appending as child


3.
When an event happens, it starts from the target element and then bubbles up from child>parent>grandparent

4.
Instead of attaching event listeners to many child elements, its like attaching one listener to a parent and let event bubbling handle it. its is useful because it uses less memory


5.
preventDefault() Stops the browser default behaviour like refreshing and submitting

stopPropagation()  Stops the event from bubbling up to parent elements.

