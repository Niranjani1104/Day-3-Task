//Anonymous Function
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
let removeDuplicates = function (arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//Arrow Function
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
let removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//IIFE Function
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
((arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
})(arr);