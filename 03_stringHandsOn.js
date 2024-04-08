
console.log(`Hey you are doing good, keep it up!`);
console.log("===Step 1===");
function stringHandsOn()
{
    console.log(`Hey you are doing good, keep it up!`);  
}
stringHandsOn();

console.log("===Step 2===");
var sentence="Hey you are doing good, keep it up!";
var cal=sentence.length;
console.log(`Length of the string is: ${cal}`);

console.log("===Step 3===");
var sentence="  Hey you are doing good, keep it up!  ";
console.log(sentence.trim());

console.log("===Step 4===");
var removedspaces=sentence.length-sentence.trim().length;
console.log(`total spaces removed :${removedspaces}`);

console.log("===Step 5===");
var firstChar=removedspaces.charAt(0);

var lastChar=removedspaces.charAt(removedspaces.length-1);
console.log(`The first and last character of the given String :${firstChar} and ${lastChar}`);
