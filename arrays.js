// let array = [1, 2, 3, 2, [4, 5, 6], "Om", true];

// console.log(typeof array);
// console.log(array[4][1]);
// console.log(array.indexOf("Om"));

// console.log(array.lastIndexOf(2));
// console.log(array.flat().includes(4));
// console.log(array.flat().lastIndexOf(6));
// array[0] = 9;
// console.log(array);
// array[4][0] = 3000;
// console.log(array);

// numbers = [10, 20, [30, 40, 50], 60, 70, 80, 90, 100];
// numbers.push(110);
// console.log("after push:", numbers);
// numbers.pop();
// console.log("After pop:", numbers);
// numbers.shift();
// console.log("after shift :", numbers);
// numbers.unshift(1000);
// console.log("after unshift:", numbers);
// numbers.shift();
// console.log(numbers);
// numbers.pop([0]);
// console.log(numbers);
// numbers[1].shift();
// console.log(numbers);
// numbers[1].unshift(2000);
// console.log(numbers);
// numbers[1].pop([0]);
// console.log(numbers);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Before splice:", num);
// num.splice(3, 0, 111, 222, 333);
// console.log(num.slice(0, 5));

// console.log("After splice:", num);


// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "Om", "Kolekar"];
// for (let element of numbers) {
//     console.log("Using for:", element);
// }
// for (let i in numbers) {
//     console.log(i);
// }

// console.log("using for each");

// numbers.forEach((element, index, array) => {
//     console.log(element, index, array);
// });
// console.log("using for each:");

// numbers.map((element, index, array) => {
//     console.log(element, index, array);
// });

// let mapvar = numbers.map((element) => {
//     return element;
// });
// console.log("Using map:", mapvar);
// let mapvar = numbers.map((element) => {
//     return element * 2;
// });
// console.log("Using map:", mapvar);

// let numbers = [10, 100, 20, 200, 30, 35, 50, 60, 80];

// console.log(`using sort: ${numbers.sort((firstnumber, nextNumber) => nextNumber - firstnumber )}`);

// let numtext = [
//     "ninety",
//     "twenty",
//     "A",
//     "thirty",
//     "one",
//     "two hundred",
//     "fifty",
//     "one hundres"
// ];
// console.log(numtext.sort((a, b) => a.localeCompare(b)));

// let array1 = [5, 6, 7, 10, 15];

// // chaining method

// let total = array1.filter((num) => num % 5 == 0)
//     .map(n => n * n)
//     .reduce((first, next) => first + next);

// console.log(total);

// let names = ["Om kolekar", "Sairaj bhandekar", "Gaurav fule", "omkar"];
// // console.log(names.filter((nam) => nam.startsWith("O")));
// console.log(names.map((nam) => nam
//         .toUpperCase())
//     .filter((nam) => nam.startsWith('O')));

// let numbers = [50, 20, 30, 80, 10, 60, 70, 40, 90, 100];

// console.log(numbers.sort((a, b) => a - b))
// console.log("first smalest:", numbers[0])
// console.log("second smallest:", numbers[1])
// numbers.reverse()
// console.log(numbers)
// console.log("first largest:", numbers[0])
// console.log("second largest:", numbers[1]);