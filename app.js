var btnTranslate = document.getElementById("btn-translate");
var userInput = document.getElementById("user-input");
var userOutput = document.getElementById("user-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

/** ERROR HANDLING */
function errorHandler(error) {
    console.log("error occured!" + error);
    alert("Something's wrong with server. Try again after sometime!");
}

/** TRANSLATE BUTTON ONCLICK */
function clickHandler(text) {
    var inputText = userInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            userOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);