// named functions

function square(num) {
    // this is the window
    return num * num;
}

// varialbe assignment / anonymous functions / Function Expression

    // ES5
    // const feedMe = function(food) {
    //     return `Thanks for the ${food}!`;
    // }

    // ES6
    const feedMe = food => {
        debugger;
        // this === window
        return `Thanks for the ${food}!`;
    }
    // const feedMe = (food, other) => {
    //     return `Thanks for the ${food}!`;
    // }

// Constructor Function (initialize function of ruby class)

    function User(username, age) {
        // this refers to an empty object, that will become the instance of the thing you are construction (class)
        debugger;
        this.username = username;
        this.age = age;
        // this.greet = function() {
        //     return "Howdy!";
        // }
    }

    // Correct way to do instance methods
    User.prototype.greet = function() {
        debugger;
        //this === the instance (object) that the method was called on
        return `${this.username} says Howdy!`;
    }

    // Monkey Patch!
    Array.prototype.myEach = function() {
        // do stuff
    }


