var total = 0;
function emailCheck(input,message){
    let regx = /^[0-9a-z]{3,}@[a-z]{3,}\.[a-z.]{3,}$/;
    if(!regx.test(input.value)){
        message.innerHTML = "Enter Valid Email!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
function passwordCheck(input,message){
    let regx = /^(?=.*[0-9])(?=.*[A-Z]).*$/;
    if(!regx.test(input.value)){
        message.innerHTML = "Enter Valid password!!!";
        message.style.color = "red";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}
function pCheck(){
    if(document.getElementById("product").value === "Select One"){
        document.getElementById("Pmessage").innerHTML = "Select One!!!";
        document.getElementById("Pmessage").style.color = "red";
        return false;
    } else {
        document.getElementById("Pmessage").innerHTML = "";
        return true;
    }
}
function tCheck(){
    if(document.getElementById("type").value === "Select One"){
        document.getElementById("Tmessage").innerHTML = "Select One!!!";
        document.getElementById("Tmessage").style.color = "red";
        return false;
    } else {
        document.getElementById("Tmessage").innerHTML = "";
        return true;
    }
}
function addType(){
    let product = document.getElementById("product").value;
    let node = document.getElementById("type");
    node.innerHTML = `<option value="Select One">Select One</option>`;
    if(product == "Tech"){
        let laptop = document.createElement("option");
        laptop.value = "100";   
        laptop.innerText = `laptop`;
        node.appendChild(laptop);

        let tablet = document.createElement("option");
        tablet.value = "150";
        tablet.innerText = `Tablet`;
        node.appendChild(tablet);
    } else {
        let tshirt = document.createElement("option");
        tshirt.value = "200";
        tshirt.innerText = `T-Shirt`;
        node.appendChild(tshirt);

        let jeans = document.createElement("option");
        jeans.value = "250";
        jeans.innerText = `Jeans`;
        node.appendChild(jeans);
    }
}

function planCheck(){
    if(!(document.getElementById("basic").checked) && !(document.getElementById("advance").checked)){
        document.getElementById("planMessage").innerHTML = "select one!!";
        return false;
    } else {
        document.getElementById("planMessage").innerHTML = "";
        return true;
    }
}
function valid(event){
    event.preventDefault();    
    let email = emailCheck(document.getElementById("email"),document.getElementById("emailMessage"));
    let password = passwordCheck(document.getElementById("password"),document.getElementById("passwordMessage"));
    let pcheck = pCheck();
    let tcheck = tCheck();
    let procuctcheck = planCheck();
    
    if(email && password && pcheck && tcheck && procuctcheck){
        document.getElementById("sucess").innerHTML = "Sucessfully Added!!!";
        document.getElementById("sucess").style.color= "green";
        addInTable();
        setcookie();
        setLS();
        storeInJSON();
        return true;
    } else {
        document.getElementById("sucess").innerHTML = "Insert Value First";
        document.getElementById("sucess").style.color = "red";
        return false;
    }
}


function addInTable(){
    let table = document.querySelector("table");
    let row = table.insertRow(-1);
    let checkboxs = document.getElementsByName("plan");
    let plan = 0;

    for(let i = 0 ; i < checkboxs.length ; i++){
        if(checkboxs[i].checked){
            plan += parseInt(checkboxs[i].value);
        }    
    }
    
    console.log("PLAN "+plan);
    console.log("PROCUCT "+document.getElementById("type").value);
    total = parseInt(document.getElementById("type").value) + plan; 

    console.log(total);
    row.insertCell(0).innerText = document.getElementById("email").value;
    row.insertCell(1).innerText = document.getElementById("password").value;
    row.insertCell(2).innerText = document.getElementById("product").value;
    row.insertCell(3).innerText = document.getElementById("type").value;
    row.insertCell(4).innerText = plan;
    row.insertCell(5).innerText = total;
}


function setcookie(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let product = document.getElementById("product").value;
    let type = document.getElementById("type").value;
    if(document.getElementById('remember').checked){
        let exp = new Date(Date.now() + 60 * 60 * 1000);
        let expDate = exp;
        document.cookie = `email=${email};expires=${expDate};path/=`;
        document.cookie = `password=${password};expires=${expDate};path/=`;
        document.cookie = `product=${product};expires=${expDate};path/=`;
        document.cookie = `type=${type};expires=${expDate};path/=`;
    } else {
        document.cookie = `email=;expires=;path/=`;
        document.cookie = `password=;expires=;path/=`;
        document.cookie = `product=;expires=;path/=`;
        document.cookie = `type=;expires=;path/=`;   
    }
}


function getcookie(){
    let cookies = document.cookie.trim().split(";");
    console.log(cookies);
    for(let i = 0 ; i < cookies.length ; i++){
        let tmp = cookies[i].trim().split("=");
        console.log(tmp);
        if(tmp[0] == "email"){
            console.log(tmp[1]);
            document.getElementById("email").value = tmp[1];
        }
        if(tmp[0] == "password"){
            console.log(tmp[1]);
            document.getElementById("password").value = tmp[1];
        }
        if(tmp[0] == "product"){
            console.log(tmp[1]);
            document.getElementById("product").value = tmp[1];
        }
        if(tmp[0] == "type"){
            console.log(tmp[1]);
            document.getElementById("type").value = tmp[1];
        }
    }
}


function setLS(){
    if(document.getElementById('remember').checked){
        localStorage.setItem("total",total);
    }
}

var users = [];

function storeInJSON(){
    let user = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        product : document.getElementById("product").value,
        type : document.getElementById("type").value
    }
    users.push(user);
    console.log(users);

    document.getElementById("js").innerHTML = JSON.stringify(users,null,4);
}