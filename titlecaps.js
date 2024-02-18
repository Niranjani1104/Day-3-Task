//Anonymous Function
let sentenceCase = function (str) {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() +
				txt.substr(1).toLowerCase();
		});
}
console.log(sentenceCase('god has a plan'));

//Arrow Function
let sentenceCase = (str) => {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() +
				txt.substr(1).toLowerCase();
		});
}
console.log(sentenceCase('god has a plan'));

//IIFE Function
((str) => {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() +
				txt.substr(1).toLowerCase();
		});
})('god has a plan');
//console.log(sentenceCase('god has a plan'));