//*****************************************
function funky(o) {
  o = null;
}
var x = [];
funky(x);
// 'o' is the value of parameter, the 'o = null' changes where 'o' points to, does not change 'x'.


function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}
var x = 1;
var y = 2;
swap(x, y);
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

/**
 * @todo: Write demethodize, a function converts a method to a binary function
 * @example: demethodize(Number.prototype.add)(5, 6) --> 11
 */
function demethodize(func) {
  return function (that, y) {
    return func.call(that, y);
  };
}
Number.prototype.add = function (num) {
  return this + num;
};
var result = demethodize(Number.prototype.add);


/**
 * @todo: Write a function twice
 * @param: takes a binary function
 * @return: a unary function passes its argument to the binary function twice
 * @example: var double = twice(add);
 *           double(11) --> 22
 *           var squre = twice(null);
 *           square(11) --> 121
 */
function twice(func) {
  return function (num) {
    return func(num, num);
  };
}
var double = twice(add);
// console.log(double(11));
var square = twice(mul);
// console.log(square(11));

/**
 * @todo: Write a function composeu
 * @param: takes two unary functions
 * @return: a unary function calls them both
 * @example: composeu(double, square)(3) --> 36
 */
function composeu(firstFunc, secondFunc) {
  return function (num) {
    return secondFunc(firstFunc(num));
  };
}

/**
 * @todo: Write a function composeb
 * @param: takes two unary functions
 * @return: a function calls them both
 * @example: composeb(double, square)(2, 3, 5) --> 25
 */
function composeb(f, g) {
  return function (a, b, c) {
    return g(f(a, b), c);
  };
}



/**
 * @todo: Write a function that allows another function to only be called once
 * @example: add_once = once(add);
 *           add_once(3, 4); --> 7
 *           add_once(3, 4); --> throw
 */
function once(func) {
  return function () {
    var f = func;
    func = null;
    return f.apply(this, arguments);
  };
}
// var add_once = once(add);
// console.log(add_once(3, 4));
// console.log(add_once(3, 4));


/**
 * @todo: Write a factory function
 * @return: two functions implement an up/down counter
 * @example: counter = counterf(10);
 *           couter.inc() --> 11
 *           couter.dec() --> 10
 */
function counterf(initNum) {
  return {
    inc: () => {
      initNum += 1;
      return initNum;
    },

    dec: () => {
      initNum -= 1;
      return initNum;
    }
  };
}
// var counter = counterf(10);
// counter.inc();
// counter.dec();




/**
 * @todo: Make a revocable function
 * @param: Takes a nice function
 * @return: a revoke function which takes denies access to the nice function
          + an invoke function which can invoke the nice function untill is revoked.
 * @example: temp = revocable(alert);
 *           temp.invoke(7)  --> alert 7
 *           temp.revoke();
 *           temp.invoke(8)  --> throw error
 */
function revocable(func) {
  return {
    invoke () {
      func.apply(this, arguments);
    },

    revoke ()  {
      func = null;
    }
  };
}
// var temp = revocable(console.log);
// temp.invoke(7);
// temp.revoke();
// temp.invoke(8) ;












