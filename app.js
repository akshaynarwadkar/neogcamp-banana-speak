 
var btntranslate = document.querySelector("#btn-Translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json" ;


function errorHandler(){
	alert("Something is wrong with the server");
}

function constructurl(text){
    return serverUrl +"?text=" + text;
}


function clickHandler(){

    var inputtxt = txtinput.value;

    fetch(constructurl(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt + " 😁😆 ";
        } )
        .catch(errorHandler)
};


btntranslate.addEventListener("click", clickHandler);