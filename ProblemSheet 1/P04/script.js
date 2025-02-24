function factorial(n) {
    if (n == 0) {
        return 1; // Factorial of 0 is 1
    } else if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1); // Corrected function name
    }
}

function result() {
    let num = parseInt(document.getElementById("Number").value); // Convert input to integer
    console.log(num);

    if (isNaN(num) || num < 0) {
        document.getElementById("ans").innerHTML = "Enter Valid Input.";
        return; // Prevent further execution if input is invalid
    }

    let answer = factorial(num);
    console.log(answer);
    document.getElementById("ans").innerHTML = "Answer is: " + answer;
}
