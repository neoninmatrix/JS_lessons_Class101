/*
// Seçiciler

/*
    class
    id
    selector
*/
/* 

let btn = document.querySelector(".MyButton");
const btnSecond = document.querySelector("#MyButtonsID2");
var btnThird = document.getElementsByClassName("MyButton");
var btnThird = document.getElementById("MyButtonsID1");

console.log(btnSecond)

console.log(btnThird);
*/

// addEventListener

//let FirstBtn = document.querySelector("#MyButtonsID1");


//FirstBtn.addEventListener("click", () => {
//console.log("Merhaba Dünya");
//})




//myFunc = () => {

//}

//function myFunction() {
//    console.log("merhaba");
//}


// ELEMENT SİLME, EKLEME



let btn = document.querySelector(".OsmanG");
let olusturulanYer = document.querySelector(".olusturulanYer");
let gereksizBirYer = document.querySelector(".cokGereksizBirYer");

btn.addEventListener("click", () => {

    let createdDiv = document.createElement("div");
    createdDiv.className = "row";
    createdDiv.style.backgroundColor = `rgb( ${Math.random() * 255}, ${Math.random(255)}, ${Math.random(255)})`;
    createdDiv.textContent = "s";
    olusturulanYer.appendChild(createdDiv);

    gereksizBirYer.remove();

});