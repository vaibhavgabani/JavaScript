function numsAndArithmetic(button){
    document.getElementById("result").value += button.value;
}

function clearAll(button){
    document.getElementById("result").value = null;
}

function equals(){
    let ans = document.getElementById("result");
    try{
        document.getElementById("result").value = eval(ans.value);
    } catch{
        document.getElementById("result").value= "Error";
    }
}

