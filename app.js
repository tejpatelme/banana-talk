var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("#txtOutput");

serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error" , error);
    alert("There is something wrong with the server, please try again after some time.")
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
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",btnClickHandler);