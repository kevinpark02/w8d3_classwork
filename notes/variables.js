// const
    // const can only be declared/initialized once
    // cannot be reassigned

function howToConst() {
    const fruit = 'banana'; // const must be initialized

    if (true) {
        const fruit = 'orange';
        console.log(fruit);
    }

    console.log(fruit);
}

    // this will out put "orange" and "banana"
    // block is a curly brace

// let
    // can only be declared/initialized once
    // can be reassigned

    //let user = 'walker'; // a declaration
    //user = 'mike'; // reassign
    //console.log(user); //this will just print 'mike'

    //let is also block scoped

    function howToLet() {
        let user = 'Walker';

        if (true) {
            user = 'Mike';
            console.log(user);
        }
        console.log(user);
    }

// var (don't use it)
    // function scoped

    function howToVar() {
        var doggy = 'Fido';

        if(true) {
            var doggy = 'Spot';
            console.log(doggy);
        }

        console.log(doggy);
    }

// global (don't use it)
    globalVariable = 'Im global';

    function tester() {
        globalVarialbe = 'howdy';
    }

    // tester();
    // console.log(globalVariable);

