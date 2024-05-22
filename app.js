



var results = document.getElementById("inp")

function getDigit(num){
    results.value += num ;
}

function removeResult(){
    results.value = "";
}

function getResult(){
    results.value = eval(results.value);
}

function deleted(){
    results.value = results.value.slice(0,-1);
}