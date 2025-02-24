function isLeapYear(){
    let year = document.getElementById("inputYear").value;

    if(year <= 9999 && year >= 1000){
        if(year % 4 == 0){
            document.getElementById("Answer").innerHTML = `${year} is leap year.`;
        } else {
            document.getElementById("Answer").innerHTML = `${year} is not leap year.`;
        }
    } else {
        alert("Enter valid Year!!!");
    }

}