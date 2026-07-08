

// while(condition){
//     //block of code
// }

// var i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++
// }

// var i = 2;
// while (i <= 20) {
//     console.log(i);
//     i += 2;
// }

// var i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// var attempts = 1;

// while (attempts <= 3) {
//     console.log("Wrong Password");
//     attempts++
// }


// do while loop

// do{
//     block of code
// }while(condition)


// var i = 10;

// do {
//     console.log(i);
//     i++
// } while (i <= 5);


// var table = +prompt("Type the table");
// var tableTimes = +prompt("How many times it should count");



// for (var i = 1; i <= tableTimes; i++) {
//     console.log(table + " x " + i + " = " + (table * i));
// }


for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log("inner loop ", j);
    }

    console.log("Outer loop ", i);


}