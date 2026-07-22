console.log("JavaScript Connected!");


// let heading = document.getElementById("heading");

// console.log(heading);


// let paras = document.getElementsByTagName("p");



// for (var i = 0; i < paras.length; i++) {
//     // console.log(paras[i].innerText);
//     if (paras[i].innerText === "4") {
//         paras[i].innerText = "This is 4th para!"
//     }
// }


// console.log(paras[0].innerText);


// let paras = document.querySelectorAll(".para");

// console.log(paras);



// let container = document.getElementById("container")




// let heading = document.createElement("h1");
// heading.innerText = "This Heading was Created using JavaScript!";


// let para = document.createElement("p");
// para.innerText = "This Paragraph was also created using javaScript!"


// container.appendChild(heading);
// container.appendChild(para)

// let para = document.getElementById("para");


// let body = document.getElementsByTagName("body");

// body[0].removeChild(para)

// // console.log(body[0]);


let todoInput = document.getElementById("todoInput");

let todos = [];

function addTodo() {

    if (todoInput.value.trim() !== "") {
        todos.unshift(todoInput.value)
        console.log(todoInput.value);
        todoInput.value = ""
        console.log(todos);
        showTodo()
    } else {

        alert("Please input value!")
    }
}

function showTodo() {


    let todoList = document.getElementById("todoList");

    todoList.innerHTML = ""

    todos.map(function (todo, index) {


        todoList.innerHTML += `
        
            <li>${todo} <button onclick="editTodo(${index})">Edit</button><button onclick="deleteTodo(${index})">Delete</button></li>    
        
        
        `




    })
}

function editTodo(index) {

    todos[index] = prompt("Edit Todo", todos[index])
    showTodo()


}

function deleteTodo(index) {

    todos.splice(index, 1)
    showTodo()

}