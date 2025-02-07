function getDifference(){
    let date1 = new Date(document.getElementById("firstDate").value);
    let date2 = new Date(document.getElementById("secondDate").value);
    
    if(isNaN(date1) || isNaN(date2)) {
        alert("Select Date First!!!");
    } else {
        let dateDiff = new Date;
        dateDiff = date2.getTime() - date1.getTime();
        let ans = dateDiff/ (1000 * 3600 * 24);
        console.log(ans);
        document.getElementById("answer").innerHTML = `Date difference between ${date2.toDateString()} and ${date1.toDateString()} is  : ${ans}`;
    }
}