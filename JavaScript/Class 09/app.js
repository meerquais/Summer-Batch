console.log("JavaScript Connected!");


// var studentName = "Anas";

// var studentName = "Hafeez";


// console.log(studentName);

// let studentName = "Meer";
// // let studentName = "Minhaj";

// studentName = "Minhaj"

// console.log(studentName);


// const studentName = "Meer";

// // const studentName = "Ali";
// studentName = "Ali";


// console.log(studentName);

// let para = document.getElementById("para");

// console.log(para);


// let fruits = ["Apple", "Mango", "Orange", "Banana"];

// console.log(fruits[3]);


// console.log(document.childNodes[1].children[1].childNodes[3].nodeType);


// let container = document.getElementById("container");
// container.firstElementChild.nextElementSibling.innerHTML = "<b>This is Para 2!</b>"

// console.log(container.firstElementChild.nextElementSibling.innerHTML);


// let para3 = document.getElementById("para3");

// let para1 = para3.previousElementSibling.previousElementSibling.attributes

// let list = para1[2].nodeName

// console.log(list);

// para3.innerText = "<i>This is Para 3!</i>"

// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.lastElementChild.previousElementSibling);


let heading = document.createElement("h1");
heading.innerText = "Hello Class!"

let box = document.getElementById("box");

box.appendChild(heading);

console.log(heading);
