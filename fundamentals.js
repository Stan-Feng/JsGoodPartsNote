'use strict';
//What key word 'new' does:
function newDemo(func, args){
  var that = Object.create(func.prototype);
  var result = func.apply(that, args);
  return (typeof result === 'object' && result) || that;
}

//Slow, everytime invoke this function which will create a new array and add
//bunch of stuff in it.
var digit_name = function (n) {
  var name = [1,2,3,4,5];

  return names[n];
};

//Correct way, This is The MOST IMPORTANT thing!!!!!!
var digit_name = (function () {
  var name = [1,2,3,4,5];

  return function (n) {
    return names[n];
  };
}());


//A Module Pattern
var singleton = (function() {
  var privateAttr;
  function privateFunc(argument) {
  }

  return {
    firstMethod: function () {
      return privateAttr;
    },
    secondMethod: function () {
      privateFunc();
    }
  };
}());

//Functional Inheritance
function gizmo(id) {
  return {
    id: id,
    toString: function () {
      return 'gizmo ' + id;
    }
  };
}
function hoozit(id) {
  var that = gizmo(id);
  that.test = function (testId) {
    return testId === id;
  };

  return that;
}


//Creating event handlers in loop
function make_handler(dom_id) {
  return function() {
    console.log(dom_id);
  };
}
for (var i = 0; i < 10; i++) {
  var div_id = i;
  divs[i].onclick = make_handler(div_id);
}