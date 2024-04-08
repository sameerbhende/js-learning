// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);