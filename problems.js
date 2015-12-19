//*****************************************
function funky(o) {
  o = null;
}
var x = [];
funky(x);
console.log(x); //[]
// 'o' is the value of parameter, the 'o = null' changes where 'o' points to, does not change 'x'.


function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}
var x = 1;
var y = 2;
swap(x, y);
console.log(x); //1
//It does not see the variables passed in, it only see the value passed in.
//*****************************************


/**
 * @TODO: Write a function takes an argument returns that argument
 */
 function identity(argument) {
   return argument;
 }

 /**
  * @TODO: Write two binary funtions
  * @name: add and mul,
  * @param: takes two numbers
  * @return their sum and product
  */
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

/**
 * @TODO: Write a function
 * @param: takes one argument
 * @return: {function} that returns that argument
 */
function indentityf(arg) {
  return function () {
    return arg;
  };
}

/**
 * @TODO: Write a function that adds from two invocations
 * @example: addf(3)(4) --> 7
 */
 function addf(first) {
   return function (second) {
     return first + second;
   };
 }


 /**
  * @TODO: Write a function that takes a binary function
  *         and makes it callable with two invocations.
  * @example: addf = applyf(add);
  *           addf(3)(4) --> 7
  *           applyf(mul)(5)(6) --> 30
  */
function applyf(func) {
  return function (first) {
    return function (second) {
      return func(first, second);
    };
  };
}

/**
 * @name: curry
 * @TODO: Write a function that takes a function and an argument
 * @return: a function can supply a second argument
 */
 function curry(func, first) {
   return function (second) {
     return func(first, second);
   };
 }

/**
 * @TODO: Show curry way of making inc function
 * @example: inc(5) --> 6
 *           inc(inc(5)) --> 7
 */
var inc = curry(add, 1);

/**
 * @TODO: Write methodize, a function that converts a binary function to a method
 * @example: Number.prototype.add = methodize(add)
 *            3.add(4) --> 7
 */
function methodize(func) {
  return function (second) {
    return func(this, second);
  };
}
// function methodize_es6(func){
//   return function (...y) {
//     return func(this, ...y);
//   };
// }
methodize(add);








