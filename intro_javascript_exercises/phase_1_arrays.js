// Array#uniq
Array.prototype.unique = function() {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if(!res.includes(this[i])) {
            res.push(this[i])
        }
    }
    return res;
};

// let a = [1,4,2,7,4,8,0,3,3,10];
// console.log(a.unique());


// Array#twoSum
Array.prototype.twoSum = function() {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0){
                res.push([i, j]);
            }
        }
    }
    return res;
};

// let b = [1, 2, -2, -11, -20, -10, 3, 0, 10, -1];
// console.log(b.twoSum());


// Array#transpose

Array.prototype.transpose = function() {
    let newArr = [];
    

    for (let k = 0; k < this.length; k++) {
        let row = new Array(this.length);
        newArr.push(row);
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            newArr[j][i] = this[i][j];       
        }
    }
    return newArr;
}

// let c = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(c.transpose());

