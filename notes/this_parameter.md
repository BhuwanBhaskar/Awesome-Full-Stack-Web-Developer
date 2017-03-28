# This Parameter in JavaScript
<!-- TOC -->

- [This Parameter in JavaScript](#this-parameter-in-javascript)
    - [Q: How to get the actual value of the parameter `this`?](#q-how-to-get-the-actual-value-of-the-parameter-this)
      - [Answer](#answer)

<!-- /TOC -->

### Q: How to get the actual value of the parameter `this`?

#### Answer

- `this` will alwas take the value of the apearing on the left side of the `.` 

```javascript
var fn = function(one, two){
  console.log(this, one, two);
}

var r = {r: 'r'}, g = 'g', b = 'b';

r.method = fn;

r.method(g, b); // this will log => r, g, b
```

- If there is no `.` in method call `this` will refer to the `global` object

```javascript
var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b';

fn(g, b); // this will log => <global> , g, b
```

- What if we want to define `this` our selfes without making the methon as a property of another object

    - **We can do that by using `call` method**

```javascript

var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b';

fn.call(r, g, b); // this will log => r, g, b

```
- Even we can overwrite the default `.` rule to pass a custom object to `this` to refer to using `call` method like that

```javascript

var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b', y = 'y';

r.method = fn;

r.method.call(y, g, b); // this will log => y, g, b

``` 

- what will happen When some function is passed as a parameter to another function `this` 

```javascript

var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b', y = 'y';


setTimeout(fn, 100); // this will log => <global>, undefined, undefined

```

- consider also this example 
    - The only moment that matter is when the function get invoked not when it is passed, So this will also print out `global` not `r`

```javascript

var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b', y = 'y';

r.method = fn;

setTimeout(r.method, 100);// this will also log => <global>, undefined, undefined

```

- Now let's try this example, `this` will behave like normal in such case as the calling time is what we are caring of

```javascript

var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b', y = 'y';

r.method = fn;

setTimeout(function(){
  r.method(g,b);
  }, 100); // this will log => r, g, b

```

- For the last example we can see new object empty object created in case we used `new` with our call

```javascript
var fn = function(one, two){
  console.log(this, one, two);
}

var r = {}, g = 'g', b = 'b';

r.method = fn;

new r.method(g, b); // this will log => {}, g, b

```