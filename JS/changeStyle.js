
let beige1 = document.querySelector("#beige");
beige1.addEventListener("click", changeBeige);

let linen1 = document.querySelector("#linen");
linen1.addEventListener("click", changeLinen);

let oldlace1 = document.querySelector("#oldlace");
oldlace1.addEventListener("click", changeOldlace);

let ivory1 = document.querySelector("#ivory");
ivory1.addEventListener("click", changeIvory);




function changeBeige(){
    document.body.style.backgroundColor = beige1.style.backgroundColor;
   
    let changedText=document.createElement("h1");
    changedText.innerText=`Changed Color To ${document.body.style.backgroundColor}`;
    
 changedText.style.color ="#A68C7C";
    changedText.style.fontSize = "30px";
    let newText = document.querySelector("#mainDiv");
    newText.appendChild(changedText);    
  }
function changeLinen(){
    document.body.style.backgroundColor = linen1.style.backgroundColor;

     let changedText=document.createElement("h1");
    changedText.innerText=`Changed Color To ${document.body.style.backgroundColor}`;
     changedText.style.color ="#A68C7C";
    changedText.style.fontSize = "30px";
    

    let newText = document.querySelector("#mainDiv");
    newText.appendChild(changedText);   
  }
function changeOldlace(){
    document.body.style.backgroundColor = oldlace1.style.backgroundColor;

     let changedText=document.createElement("h1");
    changedText.innerText=`Changed Color To ${document.body.style.backgroundColor}`;
    
 changedText.style.color ="#A68C7C";
    changedText.style.fontSize = "30px";
    let newText = document.querySelector("#mainDiv");
    newText.appendChild(changedText);   
  }
function changeIvory(){
    document.body.style.backgroundColor = ivory1.style.backgroundColor;

     let changedText=document.createElement("h1");
    changedText.innerText=`Changed Color To ${document.body.style.backgroundColor}`;
    
 changedText.style.color ="#A68C7C";
    changedText.style.fontSize = "30px";
    let newText = document.querySelector("#mainDiv");
    newText.appendChild(changedText);   
  }