console.log("JavaScript Connected!");



// var msg = "This is an Alert!";

// alert(msg);


// function greetUser() {
//     console.log("Welcome User!");
// }

// greetUser();


// function greet() {
//     console.log("Welcome Meer");
// }
// greet()


// Parameters  ====> Value recieve karta hai function mein
// Arguments   ====> Value/data send karta hai function mein



// var userName = prompt("Type your Name");

// var userName = "Meer"

// function greetUser(user = "Guest") {
//     console.log("Welcome " + user);
// }


// greetUser();

function userInfo(name = "User", age = 18, email = "user@email.com") {

    console.log("User Name : " + name);
    console.log("User Age : " + age);
    console.log("User Email : " + email);
}

userInfo("Meer", 27, "meer@gmail.com");