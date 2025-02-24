function ispal(str){
    for(let i = 0 , j = str.length - 1 ; i < j ; i++ , j--){
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
}

function isPalindrome(){
    let str = document.getElementById("input").value;
    if (str == "" || isNaN(str) == false){
        document.getElementById("result").innerHTML = "Enter Valid Input.";
        return false;
    } else {
        if(ispal(str)){
            document.getElementById("result").innerHTML = "string is Palindrome";
            console.log("string is Palindrome.");
        } else {
            document.getElementById("result").innerHTML = "string is not Palindrome";
            console.log("string is not Palindrome");
        }        
    }
}

