// Array#bubbleSort

Array.prototype.bubbleSort = function () {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < (this.length - 1); i++ ) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
}

// let b = [6,-6,4,33,100,89,6,3,-2,1,0,0, -30];
// console.log(b.bubbleSort());

// String#substrings

String.prototype.substrings = function () {
    let sub = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            sub.push(str.slice(i, j));
        }
    }
    return sub;
}

// let str = "abc";
// console.log(str.substrings());