var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("txtOutput");
txtOutput.innerHTML = " ";

serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function btnClickHandler(){
    var inputText = txtInput.value;
    console.log(inputText);
    console.log(getTranslationURL(inputText))
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        translatedText = json.contents.translated;
        txtOutput.innerHTML  = translatedText;
    })
}

btnTranslate.addEventListener("click",btnClickHandler);