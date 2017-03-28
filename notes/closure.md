# Closure

<!-- TOC -->

- [Closure](#closure)
    - [Resources for closure](#resources-for-closure)
    - [Q: What is closure?](#q-what-is-closure)
      - [Answer:](#answer)
    - [Q: How to retain access to a functions after the fuction call that creates them return?](#q-how-to-retain-access-to-a-functions-after-the-fuction-call-that-creates-them-return)
      - [Answer:](#answer-1)

<!-- /TOC -->


### Resources for closure
[Inside this courese there is a great explanation (search closure `CMD + F  closure`)](https://www.youtube.com/playlist?list=PLAwxTw4SYaPmRCRPu9EjK-fWSccPwTOnc)


### Q: What is closure?
#### Answer: 

- When you declare a local variable, that variable has a scope. Generally local variables exist only within the block or function in which you declare them. 
```javascript
    function() {
      var a = 1;
      console.log(a); // works
    }    
    console.log(a); // fails
```
- If I try to access a local variable, most languages will look for it in the current scope, then up through the parent scopes until they reach the root scope.
```javascript    
    var a = 1;
    function() {
      console.log(a); // works
    }    
    console.log(a); // works
```
When a block or function is done with, its local variables are no longer needed and are usually blown out of memory.

This is how we normally expect things to work.

__A closure is a persistent local variable scope__

- A closure is a persistent scope which holds on to local variables even after the code execution has moved out of that block. Languages which support closure (such as JavaScript, Swift and Ruby) will allow you to keep a reference to a scope (including its parent scopes), even after the block in which those variables were declared has finished executing, provided you keep a reference to that block or function somewhere.

- The scope object, and all its local variables, are tied to the function, and will persist as long as that function persists.
 
- This gives us function portability. We can expect any variables that were in scope when the function was first defined to still be in scope when we later call the function, even if we call the function in a completely different context.

__For example__

Here's a really simple example in JavaScript that illustrates the point:
```javascript
    outer = function() {
      var a = 1;
      var inner = function() {
        console.log(a);
      }
      return inner; // this returns a function
    }

    var fnc = outer(); // execute outer to get inner 
    fnc();
```
Here I have defined a function within a function. The inner function gains access to all the outer function's local variables, including `a`. The variable `a` is in scope for the inner function.

Normally when a function exits, all its local variables are blown away. However, if we return the inner function and assign it to a variable `fnc`, so that it persists after `outer` has exited, **all of the variables that were in scope when `inner` was defined also persist**. The variable `a` has been closed over -- it is within a closure.

Note that the variable `a` is totally private to `fnc`. This is a way of creating private variables in a functional programming language such as JavaScript.

As you might be able to guess, when I call `fnc()` it prints the value of `a`, which is "1". 

In a language without closure, the variable `a` would have been garbage collected and thrown away when the function `outer` exited. Calling fnc would have thrown an error because `a` no longer exists.

In JavaScript, the variable `a` persists because variable scope is created when the function is first declared, and persists for as long as the function continues to exist.

`a` belongs to the scope of `outer`. The scope of `inner` has a parent pointer to the scope of `outer`. `fnc` is a variable which points to `inner`. `a` persists as long as `fnc` persists. `a` is within the closure.


### Q: How to retain access to a functions after the fuction call that creates them return?

#### Answer:

- passing it to setTimeout()
- returning that function from the called one
- saving that function to a global var
