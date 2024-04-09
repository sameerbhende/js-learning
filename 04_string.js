var greet="Good Morning";
var totalChar=greet.length;
console.log("Number of characters :", totalChar);

var character=greet.charAt(4);
console.log("Character at 4:",character);


var lastchar=greet.charAt(totalChar-1);
console.log("Last character of the sentence:",lastchar);

console.log("======IndexOf======");
var indexofG=greet.indexOf('G');
console.log("Index of G :", indexofG);


console.log("=====Concat======");

var first="sameer";
var last="Bhende";
var resultconcat=first.concat(last);
console.log(resultconcat);