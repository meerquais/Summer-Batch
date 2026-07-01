console.log("JavaScript Connected!");




// var isLoggedIn = false;


// if (isLoggedIn) {
//     console.log("Welcome User");
// } else {
//     console.log("Not Logged In");
// }


// var score = prompt("Type your Score.");

// if (score >= 90) {
//     console.log("A+");
// } else if (score >= 80) {
//     console.log("A");
// } else if (score >= 70) {
//     console.log("B");
// } else if (score >= 60) {
//     console.log("C");
// } else {
//     console.log("Better Luck Next Time.");
// }


// var score = +prompt("Type your Score.");

// if (score === 90) {
//     console.log("A+");
// }



// for loop syntax

// for(initializintion;condition; incre/decre){

// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// increment +1 // decrement  -1



// pre incre/decre // post incre/decre


// var a = 1;

// a++ // post increment;

// console.log(a++);
// console.log(a);

// ++a // pre increment

// console.log(++a);



// var a = 5; // 6 // 7 // 6 // 5 // 6 // 5 // 4 // 5 // 6 // 7 // 8


// // 5  +  7  -  6  - 6   + 5   + 5   + 5  + 4    -  6 + 6  + 6  +  8  + 8
// var b = a++ + ++a - --a - a-- + a++ + --a + a-- + a++ - ++a + a + a++ + ++a + a

// console.log(b);


// a++ <---- post
// ++a <---- pre

// var x = 15; // 16 // 15 / 16 / 17 / 18 / 17 / 16 / 17 / 16 / 15 / 16 / 17 / 18
// //      15  +  15 -  16 +  17 - 18 -   17 - 17  + 16 - 17  + 16  + 15   + 16 + 16 + 18 =
// var y = x++ + --x - ++x + ++x - ++x - --x - x-- + x++ - x-- + x-- + x++ + x + x++ + ++x


// console.log(y);

// 99 // 97 // 90 //89 // 88 // 104 // 78 // 114 // 79 // 72 // 109 // 131 // 86 // 112 // 110

// var a = 10; // 11 // 10 // 9 // 10 // 11 // 10 // 11 // 10 // 11 // 12 / 13 / 14 / 15



// // 10 +  11 + 10 - 10  + 10 + 10  + 11 + 11 + 10 + 10  + 11 -  10  - 12 - 13 + 14 + 15

// var b = a++ + a + --a - a-- + ++a + a++ + a + a + --a + a++ + a-- - a++ - ++a - ++a + ++a + ++a

// console.log(b);



// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for (var i = 100; i >= 1; i--) {
//     console.log(i);
// }


// var num = +prompt("type a number")
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}