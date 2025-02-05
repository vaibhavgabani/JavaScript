let arr1 = [];
let arr2 = [];
let arr3 = [];

function addArray1(){
    let input = document.getElementById('inputArray1');
    let number = parseFloat(input.value);
    if(!isNaN(number)){
        arr1.push(number);
        input.value = "";
    } else {
        alert("Please enter a valid number");
    }
}

function addArray2() {
    let input = document.getElementById('inputArray2');
    let number = parseFloat(input.value);
    if(!isNaN(number)){
        arr2.push(number);
        input.value = "";
    } else {
        alert("Please enter a valid number");
    }
}

function MergeArray(){
    arr3 = arr1.concat(arr2);
    arr3.sort();
    document.getElementById("result").innerHTML = "Merged Array : " + arr3;
}