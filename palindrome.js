//Anonymous Function
let isPalindrome = function (str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            //console.log(str[i]);
        }
        j--;
    }
    console.log(str[j]);
}
 
let a = ['racecar','niranjani','rama'];
// isPalindrome(a);

//Arrow Function
let isPalindrome = (str) =>  {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            //console.log(str[i]);
        }
        j--;
    }
    console.log(str[j]);
}
 
let a = ['racecar','niranjani','rama'];
isPalindrome(a);

//IIFE Function
let a = ['racecar','niranjani','rama'];
((str) =>  {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            //console.log(str[i]);
        }
        j--;
    }
    console.log(str[j]);
})(a);
 
//let a = ['racecar','niranjani','rama'];
