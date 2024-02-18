//Anonymous Function
let sum = function (numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
}
let numbers = [1,2,3,4,5,6];
sum(numbers);

//Arrow Fuction
let sum = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
let numbers = [1,2,3,4,5,6];
sum(numbers);

//IIFE Function
let numbers = [1,2,3,4,5,6];
((numbers) => {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum); 
})(numbers);
