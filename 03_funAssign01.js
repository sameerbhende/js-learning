console.log("=======Step 1======");
function fullName(){

  console.log("My Name Is Sameer Bhende");
}
fullName();

function address()
{

  console.log("I leaved at Chincholi dange");
}
address();


console.log("=======Step 2======");
function personalDetails(firstname,lastname,collegename){


  var  FirstName=firstname;
  var LastName=lastname;
  var CollegeName=collegename;

  console.log("First name:",FirstName);
  console.log("Last Name:", lastname);
  console.log("College Name:", collegename);

}

personalDetails("Sameer", "Bhende", "HVPM");


console.log("=======Step 3.1======");
console.log("Before Swapping");

 function swapValues(n1,n2){
    N1=n1;
    N2=n2;
    console.log("name1:",N1, "name2:", N2);
 
    var temp=N1;
    N1=N2;
    N2=temp;
    console.log("After Swapping");
    console.log("name1:", N1, "name2:", N2);
}

swapValues("Virat", "Anushka")



console.log("=======Step 3.2======");

function swapValues(n1,n2){

  N1=n1;
  N2=n2;
  console.log("Values before swapping");
  console.log("num1:", N1, "num2:", N2);
  

  var temp=N1;
  N1=N2;
  N2=temp;
  console.log("num1:", N1, "num2:", N2);
}
swapValues(1000,2000);



console.log("=======Step 4.1======");

function addThreevalues(a,b,c){
  
  var addition=a+b+c;
  console.log("Addition of three numbers :",addition);


}

addThreevalues(10,20,30);
addThreevalues("Hello"," Good"," Morning");
