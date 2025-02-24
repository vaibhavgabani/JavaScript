function isPrime(){
    document.getElementById("show").innerHTML = "";
    let num = document.getElementById("number").value;
    if (num == "" || isNaN(num) == true || num < 0){
        document.getElementById("show").innerHTML = "Enter Valid Input.";
    } else {
        let count = 0;
        for(let i = 1; i <= num; i++){
            if(num % i == 0){
                count++;
            }
        }
        if(count == 2){
            document.getElementById("show").innerHTML = "Anser is : Prime Number.";
            console.log(num + " Is Prime.");
        }else{
            document.getElementById("show").innerHTML = "Anser is : Not Prime Number.";
            console.log(num + "Not Prime Number.");
        }
    }
}