function firstLeterToUpperCase(){
    let inputString = document.getElementById("inputString").value.trim();
    if(!isNaN(inputString)  || inputString.length === 0){
        alert("Enter Valid input!!!");
    } else {
        let str = inputString.split(" ");
        inputString = "";
        for(let word of str) {
            inputString += word[0].toUpperCase() + word.slice(1) + " ";
           console.log(word.slice(1));
        }
        console.log(inputString);
        document.getElementById("answer").innerHTML = `Answer is : ${inputString}`;
    }
}