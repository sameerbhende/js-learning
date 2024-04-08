// 1. Function with no argument with no return value

function show() {
    console.log("Inside Show Function");
    
}
show();

// 2. Function with  argument and no return value


function add(n1,n2,n3){

console.log("Arguments:", n1,n2,n3);
var result=n1+n2+n3;
console.log("Addition:", result);
}

add(3,6,7);
add(99.90,456,5674);
add(6,7);
add("Hi", " Good", " Morning");

// 3. Function with  argument and with return value

function substract(n1,n2){

 console.log("=======Substraction=======");
 console.log("Arguments:", n1,n2); 
 var result=n1-n2;
 return result;  

}

var returnValue=substract(9,4);
console.log("Substraction of two number:",returnValue);
                                                              // redecalaration of the variable
substract(99,42);
console.log("Substraction of two number:",returnValue);