// Array#myEach(callback)
Array.prototype.myEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

// let a = ["a", "b", "c"];
// a.myEach(ele => console.log(ele));

// Array#myMap(callback)
Array.prototype.myMap = function(cb) {
    const res = [];
    this.myEach(ele => cb(ele));
};

// let a = ["a", "b", "c"];
// a.myMap(ele => console.log(ele + "!"));

// Array#myReduce(callback[, initialValue])
Array.prototype.myReduce = function(cb, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;
    arr.myEach(ele => result = cb(result, ele));
    return result;
}

// let a = [1, 2, 3, 4, 5];
// console.log(a.myReduce((acc, el) => acc + el));
