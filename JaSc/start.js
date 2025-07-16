// console.log("Hellooo!!!");
// console.log(Math.random() * 5);
// console.log(`Using floor: ${Math.floor(1.9)}`);
// console.log(`using ceil: ${Math.ceil(1.01)}`);
// console.log(`using round ${Math.round(1.5)}`);
// console.log(Math.round(Math.random() * (100) + 10));
// console.log(`Your six digit OTP is: ${Math.round(Math.random() * (1000) + 100000)} `);


// if (true) {
//     console.log(`number is ${number2}`);
//     var number2 = 200;
// }

// let num1 = 10;
// let num2 = 20;

// console.log(num1 === num2);
// if (num1 > num2) {
//     console.log("num 1 is greater.");
// } else
//     console.log("num 2 is greater.");

// let a = 100;
// let b = 200;
// a > b ? console.log('a is greater') :
//     console.log('b is greater ');

// let n1 = 100;
// let n2 = 200;
// let temp;
// temp = n1;
// num1 = n2;
// num2 = temp;
// console.log(num1);
// console.log(num2);


// let a1 = 100;
// let a2 = "200";
// a2 = Number(a2);
// a1 = a1 + a2; //300
// a2 = a1 - a2; //100
// a1 = a1 - a2; //200
// console.log(a1);
// console.log(a2);

// let choice = prompt("Enter the choice");

// switch (Number(choice)) {
//     case 1:
//         console.log("its monday");
//         break;

//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wednesday");
//         break;

//     case 4:
//         console.log("its thursday");
//         break;

//     case (5 + 5):
//         console.log("its friday");
//         break;

//     default:
//         console.log("its saturday");

// }


// let num1 = 10;
// let num2 = 20;

// function display(num1, num2) {

//     console.log(`sum is : ${+num1 + num2}`);
// }

// display('200', 400);

// function display(number1, number2) {
//     return number1 + number2;

// }
// var result = display(100, 200);
// var result = function display(number1, number2) {
//     return number1 + number2;

// }
// console.log(result(100, +"200"));
// console.log(typeof result);

// (function(num1, num2) {
//     console.log(num1 + num2);
// })(100, 200);

// var result = (number1, number2) => number1 + number2;


// console.log(`Using Arrow (=>) Function:"${result(100, 200)}"`);

// let result = (number1, number2, operator) => {
//     switch (operator) {
//         case "+":
//             console.log(number1 + number2);

//         case "sub":
//             console.log(number1 - number2);
//         case "div":
//             console.log(number1 / number2);
//         case "multi":
//             console.log(number1 * number2);
//     }
// }

// console.log(result(10, 20, "multi"));

let result = (number1, number2, operator) => {
    switch ((operator)) {
        case "+":
            return (number1 + number2);



        case "-":
            return (number1 - number2);
        case "/":
            return (number1 / number2);
        case "*":
            return (number1 * number2);
    }
}

number1 = prompt("enter num 1:");
number2 = prompt("enter num2:");
operator = prompt("assign operator:");

console.log(result(Number(number1), Number(number2), operator));

// console.log(result(10, 20, "multi"));