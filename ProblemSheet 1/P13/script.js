let arr = [];

function add() {
    let input = document.getElementById('value');
    let number = parseFloat(input.value);
    if(!isNaN(number)) {
        arr.push(number);
        input.value = "";
    } else {
        alert("Please enter a valid number");
    }
    
}

function anser() {
   if(arr.length === 0) {
       alert("No values entered!");
   } else {
        // let max = arr[0];
        // for(let i = 1; i < arr.length; i++) {
        //     if(arr[i] > max) {
        //         max = arr[i];
        //     }
        // }
        // document.getElementById("result").innerHTML = "Maximum value: " + max;

        //using in-built Math.max() method
        let max = Math.max(...arr);
        document.getElementById("result").innerHTML = "Maximum value: " + max;
   }
}
