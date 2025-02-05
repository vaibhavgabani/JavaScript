let str = [];

function add() {
    let tmp = document.getElementById('input');
    str.push(tmp.value);
    input.value = "";
}

function Answer(){
    if(str.length == 0){
        alert("No values entered!");
    } else {
        document.getElementById("result").innerHTML = "String : " + str;
    }
}