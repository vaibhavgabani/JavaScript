function addRow() {
    if (p1.value != "" && p2.value != "" && p3.value != "") {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);

        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);

        var x = p1.value;
        var y = p2.value;
        var z = p3.value;

        c1.innerHTML = x;
        c2.innerText = y;
        c3.innerText = z;
    }
    else {
        alert("Please Enter Details First !");
    }
}