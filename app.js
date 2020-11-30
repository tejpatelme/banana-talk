var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("txtOutput");

serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslattionURL(text){
    return serverURL + "?" + "text=" + text;
}

function btnClickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslattionURL(inputText))
    .then(response => response.json)
    .then(json => console.log(json))
}

btnTranslate.addEventListener("click",btnClickHandler);