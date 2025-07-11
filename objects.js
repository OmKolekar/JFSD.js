// let info = {
//     Name: {
//         fName: "Om",
//         mName: "Anil",
//         lName: "Kolekar",
//     },
//     "Roll No": "18",
//     city: "Kolhapur",
//     branch: "MCA",
//     email: "Omk@gmail.com",
//     display: () => {
//         console.log(`Student Information: `,
//             info.Name.fName);
//     },
// };

// info["First Name"] = "Om Kolekar";
// info.gender = "Male";

// delete info.email;

// console.log(
//     `
// Name: ${ info.Name.fName }
//  Gender: ${ info.gender }
//  Roll No: ${ info["Roll No"] }
// `);

// console.log(info.Name.fName, info.Name.mName, info.Name.lName);


// console.log(info.Name);

// info.display();

// const cart = [{
//         name: "pen",
//         price: 10,
//         qty: 3
//     },
//     {
//         name: "Notebook ",
//         price: 50,
//         qty: 2,
//     },
//     {
//         name: "erraser",
//         price: 5,
//         qty: 5,

//     },
// ]

// let total = cart.map((item) => {
//     let total = item.price * item.qty;
//     return {...item, total }
// });
// console.log(total.reduce((iVal, nVal) => iVal + nVal));

// GST = (155 * 0.18);
// pWithGst = GST + 155;
// roundofp = Math.round(pWithGst);
// console.log(`price with 18% GST: ${roundofp}`);
//console.log(total);
// let numbers = [1, 1, 2, 2, 3, 4, 4];
// let unique = [];

// numbers.forEach((number) => {
//     if (!unique.includes(number)) {
//         unique.push(number);
//     }
// });
// console.log(numbers);
// console.log(unique);

// let numbers = ["Om", "Om", "sairaj", "Gaurav", "Sanket"];
// let unique = [];

// let similar = [];

// numbers.forEach((number) => {
//     if (!unique.includes(number)) {
//         unique.push(number);
//     } else
//         similar.push(number);
// });
// console.log(numbers);
// console.log(unique);
// console.log(similar);

// let numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5];
// let unique2 = {};
// numbers.forEach((number) => {
//     // debugger;
//     unique2[number] = (unique2[number] || 0) + 1;
// });

// console.log(unique2);

const students = [
    { name: "Amit", scores: [80, 75, 90] },
    { name: "Sara", scores: [60, 70, 65] },
    { name: "John", scores: [85, 90, 92] },
    { name: "Chetan", scores: [95, 99, 94] },

];
// console.log(students.map((std => (std.scores.reduce((a, b) => a + b) / 3))));

let total = students.map(std => (std.scores.reduce((a, b) => a + b)));
console.log(`Total addition: ${total}`);

let average = total.map((avg, i) => (avg / students[i].scores.length).toFixed(2));


let highest = average.filter((high) => high > 85);
console.log(`Average score: ${average}`);
console.log(`Average score: ${highest}`);