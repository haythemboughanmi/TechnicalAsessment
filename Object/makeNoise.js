// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal;
var makeNoise;
var animal= {
    type: "dog",
    name: "kaleb",
    noise() { console.log("hab hab") }
 };
function makeNoise(animal){
    return animal.noise()
}


