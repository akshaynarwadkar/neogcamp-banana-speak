 
var btntranslate = document.querySelector("#btn-Translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// console.log(txtinput);
// console.log(txtinput); -> when we take the cursor to that written part,this shows the exact block the written code is referring to
// To read this value, we can store that console value as global variable temp and use temp.value to display the input

function clickHandler(){
    outputDiv.innerText = "ksjdfnnj " + txtinput.value;
};


btntranslate.addEventListener("click", clickHandler);