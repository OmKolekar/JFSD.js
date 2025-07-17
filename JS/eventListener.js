
let yButton =document.createElement("button");
yButton.innerText = "Yes";
document.getElementById("divtag").appendChild(yButton);
yButton.addEventListener("click",() => {

  let experience = document.createElement("h1");
  experience.innerText = "Feel Free To Share Your Experience!";
  document.getElementById("divtag").appendChild(experience);

  nButton.remove();
  firsth1.remove();
  yButton.remove();

  let years = ["2-Years", "4-Years", "6-Years", "8-Years", "10-Years"];
  years.forEach(function (year){

    let yearBtn = document.createElement("button");
    yearBtn.innerText = year;
    document.getElementById("divtag").appendChild(yearBtn);
  })
  years.innerText = "Years of Experience";
  document.querySelector("#divtag").appendChild(years);
});

let nButton =document.createElement("button");
nButton.innerText = "No";
document.getElementById("divtag").appendChild(nButton);
  let oops = document.querySelector("#divtag");
  oops.createElement("h1");
  oops.innerText = "Oops! You are not experienced!";
nButton.addEventListener("click", () =>{

  document.getElementById("divtag").appendChild(oops);

});


function display(){
  let heading = document.createElement("h1");

heading.innerText = "heading";

document.getElementById("divtag").appendChild(heading);



}
