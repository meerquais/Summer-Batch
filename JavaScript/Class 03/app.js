console.log("JavaScript Connected!");


// var age = 18;


// syntax 

// if(condition){
//     // block of code
// }

// if(age == 20){
//     console.log("Allowed!");
// }else{
//     console.log("Not Allowed!");
// }


// ===   ====> Strictly Equality Operator == Data Type and value.
// ==    ====> Equality Operator == value check karta hai.

// <     ====> Less Than Operator  == value chota hona chaiye
// >     ====> Greater Than operator == value Bada hona chaiye

// <=    ====> Less than Equals to operator == value chota ya phir barabar hona chaiye.
// >=    ====> Greater than Equals to operator == value bada ya phir barabar hona chaiye.

// !=    ====> Not Equals to Operator == value barabar nahi hona chaiye.
// !==   ====> Strictly Not Equals to Operator == na value na data type same hona chaiye.



// Strictly Equality Operator

// console.log(20 === 20);
// console.log(20 === "20");
// console.log(20 === 30);


// Equality Operator

// console.log(20 == 20);
// console.log(20 == "20");
// console.log(20 == "30");
// console.log(20 == "twenty");

// < Less than 

// console.log(20 < 20);
// console.log(20 < 30);
// console.log(20 < "30");

// > Greater than operator

// console.log(20 > 20);
// console.log(20 > 10);


// less than equals to // greater than equals to

// console.log(20 >= 20);
// console.log(20 >= 10);
// console.log(8 <= 10);
// console.log(20 <= 10);


// console.log(20 != "18");
// console.log(20 !== 10);

// var age = 30;

// if(age >= 18){
//     console.log("Allowed to Vote!");
// }else{
//     console.log("Not allowed to vote!");
// }

// var signalLight = "Red";


// if(signalLight === "Green"){
//     console.log("Go");
// }else if(signalLight === "Yellow"){
//     console.log("Ready to Go");
// }else if(signalLight === "Red"){
//     console.log("STOP!");
// }else{
//     console.log("Signal karab hai!");
// }

// var signalLight = prompt("Type Current Signal Light!" , "Red" );


// if(signalLight === "Green"){
//     console.log("Go");
// }else if(signalLight === "Yellow"){
//     console.log("Ready to Go");
// }else if(signalLight === "Red"){
//     console.log("STOP!");
// }else{
//     console.log("Signal karab hai!");
// }


var marks = prompt("Type your total Marks!");

// console.log(typeof marks , "====> " , marks);

if(marks >= 90){
    console.log("Grade A+");
}else if(marks >=80){
    console.log("Grade A");
}else if(marks >= 70){
    console.log("Grade B");
}else if(marks >= 60){
    console.log("Grade C");
}else{
    console.log("Failed!");
}