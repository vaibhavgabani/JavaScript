let arr = [];

function add() {
    let input = document.getElementById('input');
    let number = parseFloat(input.value);
    if(!isNaN(number)){
        arr.push(number);
        input.value = "";
    } else {
        alert("Please enter a valid number");
    }
}

function Answer() {
    if(arr.length == 0){
        alert("No values entered!");
    } else {
        let sum = 0;
        for(let i = 0; i < arr.length ; i++){
            sum += arr[i];
        }
        document.getElementById("result").innerHTML = "Sum of array : " + sum;
    }
}