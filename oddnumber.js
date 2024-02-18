
let odd = function (number){
    for(const element of number){
        if(element % 2 === 1){
            console.log(element);
        }
    }
}
let number = [1,2,3,4,5];
odd(number)