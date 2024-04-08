




console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);//String Template



console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);


console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);








console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);


console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

console.log(`========== split() ==================`);
var totalWord = "I am Happy Buddy";
var resultValue = totalWord.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

var totalWord = "I am learning JS the language of internet"
var resultValue = totalWord.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);