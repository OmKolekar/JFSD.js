let btnVariable = document.querySelector('#btn1');
btnVariable.addEventListener("dblclick", display);

let alertVar = document.querySelector("#alert1", disAlert);
alertVar.addEventListener('click', disAlert);

let dateTimeVar = document.querySelector('#dt1');
dateTimeVar.addEventListener('dblclick', time);



function display() {
    console.log("Button Clicked!");

    let h1tag = document.createElement("h1");
    h1tag.innerText = "This Is h1 Tag";
    document.querySelector("#divTag").appendChild(h1tag);
    h1tag.id = ("h1Tag");

    let btn = document.createElement("button");
    btn.innerText = "Button";
    document.querySelector("#divTag").appendChild(btn);
    btn.id = ("btnid1");
}

function time() {
    console.log(new Date());
}

function disAlert() {
    alert("Event Listener!");
}