let computer = Math.ceil(Math.random() * 3);
console.log(computer);

let userWin = 0;
let compWin = 0;


function bat() {
    let userBat = 2;
    if (userBat > computer) {
        userWin = userWin + 1;

        console.log(userWin);
        document.querySelector("#message").innerText = `You Won ${userWin } Times ---- Computer Won ${compWin} Times`;
        alert(`Your Number: ${userBat} - Computers Number:${computer}--- -- - Congratulations!!!You Won:)`);

    } else if (userBat === computer) {

        alert(`Your Score ${userBat} - Computers Score ${computer}---Its A Draw!!! `)
    } else {
        compWin = compWin + 1;
        document.querySelector("#message").innerText = `You Won ${userWin } Times ---- Computer Won ${compWin} Times`;

        alert(`Your Number: ${userBat} - Computers Number:${computer}--- -- - You Lost!!!---Better Luck Next Time :(`);
    }
    console.log(userBat);

};

function ball() {
    let userBall = 1;
    if (userBall > computer) {


        alert(`Your Number: ${userBall} - Computers Number:${computer}--- -- - Congratulations!!!You Won:)`);

    } else if (userBall === computer) {
        alert(`Your Score ${userBall} - Computers Score ${computer}---Its A Draw!!! `)
    } else {
        compWin = compWin + 1;
        document.querySelector("#message").innerText = `You Won ${userWin } Times ---- Computer Won ${compWin} Times`;
        alert(`Your Number: ${userBall} - Computers Number:${computer}--- -- - You Lost!!!---Better Luck Next Time :(`);
    }
    console.log(userBall);

};


function stump() {
    userStump = 3;



    if (userStump > computer) {
        userWin = userWin + 1;
        console.log(userWin);
        document.querySelector("#message").innerText = `You Won ${userWin } Times ---- Computer Won ${compWin} Times`;
        alert(`Your Number: ${userStump} - Computers Number:${computer}--- -- - Congratulations!!!You Won:)`);

    } else
    if (userStump === computer) {
        alert(`Your Score ${userStump} - Computers Score ${computer}---Its A Draw!!! `)
    } else {
        alert(`Your Number: ${userStump} - Computers Number:${computer}--- -- - You Lost!!!---Better Luck Next Time :(`);
    }
    console.log(userStump);

};