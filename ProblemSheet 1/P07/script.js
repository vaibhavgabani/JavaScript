function fileExtension(){
    let fileName = document.getElementById("fileInput").value;
    if(!isNaN(fileName)){
        alert("Choice File first!!!");
    } else {
        let tmpSplit = fileName.split(".");
        let fileExtension = tmpSplit[length+1];
        console.log(fileExtension);
        document.getElementById("answer").innerHTML = `${fileName} Extension is : .${fileExtension}`;
    }
    
}