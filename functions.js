const functionContainerVariable = function() {
    return 36;
}

functionContainerVariable(); //36

//immediately invoked arrow function.
const result = (() => {
    return 20;
})();

//another immediately invoked function
(function someFuntion(){
    console.log('hello');
})()

//a proper function
function myFunction(someString) {
    console.log(someString);
}

typeof myFunction; //'function'

myFunction('hello there'); //'hello there'

const aliasToFunction=myFunction;

aliasToFunction('hello there'); //'hello there'

const myObj = {
    prop1: 50,
    prop2: myFunction
}

myObj.myFunction()

multiply = (a, b) => a * b;