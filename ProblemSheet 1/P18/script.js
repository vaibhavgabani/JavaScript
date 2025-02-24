function split_string() {
    let str = ["str1+str2+str3+str4"];
    let p = str.toString().split('+');

    document.getElementById("result1").innerHTML = "String is: " + str;
    document.getElementById("result2").innerHTML = "Array is: " + p;
}