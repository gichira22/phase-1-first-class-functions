// A function that receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

//Returns a named function
function returnsANamedFunction() {
  return function namedFunction() {};
}

//Returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {};
}
