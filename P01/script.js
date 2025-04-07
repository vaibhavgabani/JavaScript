getcookie();
function validName(input,message){
    let regx = /[a-zA-Z]/;
    if(!regx.test(input.value)){
        message.innerHTML = "Enter valid Name!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
function validNumber(input,message){
    let regx = /^[789][0-9]{9}$/;
    if(!regx.test(input.value)){
        message.innerHTML = "Enter valid Number!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
function validEmail(input,message){
    let regx = /^[a-zA-Z_0-9]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    if(!regx.test(input.value)){
        message.innerHTML = "Enter valid Email!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
function validPassword(input,message){
    let regx = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$]).*$/;
    if(!regx.test(input.value)){
        message.innerHTML = "Password Contailn one Capital one number @/$!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}

function validCountery(){
   let countery = document.getElementById('Countery');
   let CounteryMessage = document.getElementById('CounteryMessage');
   if(countery.value === "Select ONE"){
        CounteryMessage.innerHTML = "Select One!!!";
        CounteryMessage.style.color = "red";

        return false;
   } else {
        CounteryMessage.innerHTML = "";
        updateCity();
        return true;
   }
}
function validCity(){
   let city = document.getElementById('city');
   let cityMessage = document.getElementById('cityMessage');
   if(city.value === "Select ONE"){
        cityMessage.innerHTML = "Select One!!!";
        cityMessage.style.color = "red";

        return false;
   } else {
        cityMessage.innerHTML = "";
        return true;
   }
}

function updateCity(){
    let countery = document.getElementById('Countery').value;
    let add = document.getElementById('city');

    add.innerHTML = "";
    if(countery === "INDIA"){
        let city = document.createElement('option');
        city.innerHTML = "SURAT";
        city.value = "SURAT";
        add.appendChild(city);
    } else if(countery === "USA"){
        add.innerHTML = `<option value="Select ONE">Select ONE</option><option value="LA">LA</option>`;
    }
}

function valid(event){
    event.preventDefault();
    let name = validName(document.getElementById('name'),document.getElementById('NameMessage'));
    let number = validNumber(document.getElementById('number'),document.getElementById('NumberMessage'));
    let email = validEmail(document.getElementById('email'),document.getElementById('EmailMessage'));
    let password = validPassword(document.getElementById('password'),document.getElementById('PasswordMessage'));
    let countery = validCountery();
    let  city= validCity();
    if(name && number && email && password && countery && city){
        document.getElementById('sucess').innerHTML = "Sucessfully Submit";
        document.getElementById('sucess').style.color = "green";
        addInTable();
        setcookie();
        return true;
    } else {
        document.getElementById('sucess').innerHTML = "Submit Form!!!";
        document.getElementById('sucess').style.color = "red";
        return false;
    }
}

function addInTable(){
    let table = document.querySelector('table');
    let row = table.insertRow(-1);

    row.insertCell(0).innerText = document.getElementById("name").value;
    row.insertCell(1).innerText = document.getElementById("number").value;
    row.insertCell(2).innerText = document.getElementById("email").value;
    row.insertCell(3).innerText = document.getElementById("password").value;
}



function setcookie(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    if( document.getElementById("remember").checked){
        let exp = new Date(Date.now() + 24 * 60 * 60 * 1000);
        document.cookie = `name=${name};Expires=${exp.toUTCString()};path=/;`;
        document.cookie = `password=${password};Expires=${exp.toUTCString()};path=/;`;
    }
}


function getcookie(){
    let data = document.cookie.split(";");
    // console.log(data);
    for(let i = 0 ; i < data.length ; i++){
        let tmp = data[i].trim().split("=");
        if(tmp[0] == "name"){
            console.log(tmp[1]);
            document.getElementById("name").value = tmp[1];
        } else if(tmp[0] == "password"){
            console.log(tmp[1]);
            document.getElementById("password").value = tmp[1];
        }
    }
}