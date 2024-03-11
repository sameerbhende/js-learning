console.log("=======Step 1======");
function fullName() {
  console.log("sameer Vidyadharrao Bhende");
}
function JS() {
  console.log("Learning the JAVASCRIPT");
}
fullName();
JS();

console.log("=======Step 2======");
function personalDetails(firstName, lastName, collegeName) {
  fName = firstName;
  lName = lastName;
  cName = collegeName;
  console.log("My first name :", fName);
  console.log("My last name :", lName);
  console.log("My college name :", cName);
}
personalDetails("Sameer", "Bhende", "HVPM");

console.log("=======Step 3.1======");
console.log("Before Swapping");
function swap(n1, n2) {
  var n1 = n1;
  var n2 = n2;
  console.log("n1:", n1, "n2:", n2);
  console.log("After Swapping");
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("n1:", n1, "n2:", n2);
}
swap("Virat", "Anushka");

console.log("=======Step 3.2======");
function swap2(num1, num2) {
  console.log("Before Swapping");
  var n1 = num1;
  var n2 = num2;
  console.log("n1:", n1, "n2:", n2);

  console.log("After Swapping");
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("n1:", n1, "n2:", n2);
}
swap2(1000, 2000);

console.log("=======Step 4.1======");

function addThreeValue(a, b, c) {
  var add = a + b + c;
  console.log("Addition of three numbers:", add);
}

addThreeValue(10, 20, 30);

function showThreeWords(one, two, three) {
  var o = one;
  var t = two;
  var th = three;
  console.log(o, t, th);
}
showThreeWords("Hello", "Good", "Morning");
