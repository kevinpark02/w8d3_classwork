const feed = function() {
    const foods = ['bananas']; // variable we are closing over
    
    return function(foodItem) {
        foods.push(foodItem);
        return `I have eaten ${foods.join(' and ')}.`
    }
}

let closure = feed(); // closure is the inner function of feed

console.log(closure('oranges'));