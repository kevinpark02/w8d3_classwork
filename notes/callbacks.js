// forEach expects a callback as its first argument
// that callbaack should take in an element as its first argument

// Ruby
// [1,2,3].each do |ele|
    // puts ele + '!'
// end

const callback = function(ele) {
    console.log(ele + '!');
}

const arr = ['a', 'b', 'c'];
arr.forEach(callback);

//defining a callback in line
// ES5
arr.forEach(function(ele){
    console.log(ele.toUpperCase());
})

// ES6
arr.forEach(ele => console.log(ele.toUpperCase()+'@'))

// define a function that takes in a callback
function doMathWithNumber(num, callback){
    debugger;
    console.log(callback(num));
}

doMathWithNumber(5, num => num + 100);

