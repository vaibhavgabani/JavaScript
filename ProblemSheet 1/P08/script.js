function getlongWord(){
    let str = document.getElementById("stringInput").value;
    if(!isNaN(str)){
        alert("Enter Valid input");
    } else {
        let ans = str.split(" ");
        let longstWord = "";
        for(let word of ans){
            if(word.length > longstWord.length){
                longstWord = word;
            }
        }
        console.log(longstWord + "length is : " + longstWord.length);
        document.getElementById("result").innerHTML = `$longest word is "${longstWord}" which length is : ${longstWord.length}`; 
    }
}