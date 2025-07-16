// document.getElementsByClassName("h1tag").innerText = "New Text";
// console.log(document.getElementsByClassName("h1tag").innerText);

// document.getElementById("id1").innerText = "New Text";
// console.log(document.getElementById("id1").innerText);

// console.log(document.getElementsByClassName("h1tag"));
// console.log(document.getElementsByClassName("h1tag")[0]);

// console.log(document.getElementsByClassName("h1tag")[1].innerText);

// console.log(document.getElementById("id1"));
// console.log(document.getElementById("id1").innerText);


// console.log(document.querySelectorAll(".h1tag")[0].innerText);
// console.log(document.querySelectorAll(".h1tag")[1].innerText);



// console.log(document.querySelector("#id1").innerText);
// console.log(document.querySelector("#id2").innerText);


// console.log(document.querySelector("#divTag").innerHTML);
// console.log(document.querySelector("#divTag").innerText);

// let buttonValue = document.querySelector("#buttonTag");
// console.log(buttonValue.innerText);


// buttonValue.innerText = "Changed Button Value";
// console.log(buttonValue.innerText);


// console.log(document.querySelector("#buttonTag1").innerText);


// function addition() {
//     // let num1 = 100;
//     // let num2 = 200;

//     let num1 = prompt('Enter First Number:');
//     let num2 = prompt('Enter Second Number:');
//     console.log('Addition Is:', Number(num1) + Number(num2));
// }
// // console.log(document.querySelector("#buttonTag2").innerText);


// function Substraction() {
//     // let num1 = 100;
//     // let num2 = 200;

//     let num1 = prompt('Enter First Number:');
//     let num2 = prompt('Enter Second Number:');
//     console.log('Substraction Is:', Number(num1) - Number(num2));
// }
// // console.log(document.querySelector("#buttonTag3").innerText);


// function Multiplication() {
//     // let num1 = 100;
//     // let num2 = 200;

//     let num1 = prompt('Enter First Number:');
//     let num2 = prompt('Enter Second Number:');
//     console.log('Multiplication Is:', Number(num1) * Number(num2));
// }
// // console.log(document.querySelector("#buttonTag4").innerText);


// function Division() {
//     // let num1 = 100;
//     // let num2 = 200;

//     let num1 = prompt('Enter First Number:');
//     let num2 = prompt('Enter Second Number:');
//     console.log('Division Is:', Number(num1) / Number(num2));
// };
function performOperation(num1, num2, op) {
    num1 = prompt('Enter First Number:');
    num2 = prompt('Enter Second Number:');

    op = prompt('Choose operation:(+,-,*,/)');


    if (op === "+") {
        console.log("Addition is:", +num1 + +num2);
    } else if (op === "-") {
        console.log("Substraction is: ", +num1 - +num2);
    } else if (op === "*") {
        console.log("Multiplication is:", +num1 * +num2);
    } else if (op === "/") {
        console.log("Division is:", +num1 / +num2);
    } else { console.log("Choose A Valid Operator:") }
};