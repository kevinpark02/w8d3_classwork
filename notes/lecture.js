// Style & Sntax JS vs. Ruby
    // explicit returns
    // You have to declare your variables
    // Use semicolons
    // camelCase instead of snake_case
    // == and === (use the latter almost always!)
    // No negative indexing
    // 7 Falsey values

// Create html for the demo

// The Flasy-7
    // null
    // undefined
    // 0
    // -0
    // NaN
    // ''
    // false

// Variable Declaration
    // const, let, var, and global
        // declaration (here's a varialbe...)
        // initialization (... and the value is...)
        // reassignment (You are changing the value of an already declared variable)

// const
    // It can only be assigned once!
    const fruit = 'banana';

    const fruit = 'orange'; // cannot be defined again...
    fruit = 'orange'; // this won't work either

    // block scope

// Primitives (immutable)
    // Boolean
    // Null
    // Undefined
    // Number
    // String
    // Symbols (ES6)

    "Javascript rocks!".toUpperCase();
    // anytime you want to change a variable that is pointing to primitive, you need to reassign
    // primitives are immutable

// Objects
    // different than a ruby object
    // essentially, just a big hash-map
    // often called Plain Old Javascripty Objects or POJOs
    // Can have functions as values (called methods)
    // Can access object attributes (properties) with [] or . notations

// Functions
    // Are a type of Object
    // First-class object in JS:
        // Pass them around (as arguments)
        // Return them from other functions
        // Assign them to variables
    // We can:
        // Store them in data structures
        // Give them as many or few arguments as we want

    // The 3 Types of Functions
        // Named functions
        // Variable assignment / anonymous functions
            // aka Function Expression
        // Constructor function
            // used to create new objects
            // similar to class definitions in Ruby
            // instance methods are added to the prototype of an object

    // 3 ways to invoke a function
        // method style
            // car.drive();
        // function style
            // findSquareRoot(36)
        // constructor style
            // const restaurant = new Restaurant();

    // this
        // like Ruby's self
        // never implicit
        // value of this is a function's Context or Receiver


        // Scope vs Context
            // scope: refers to the availability of varialbes while running a function
            // context: refers to the object that owns the execution of the code. (this)

// Callbacks
    // Just a function that is passed as an argument to another function
    // can be as simple as passing a function to forEach

// Closures
    // a function which accesses variables that were neither passed in nor defined inside that functions
        // a function that captures free variables and "closes" over them
        // can be used to create "private state"
        