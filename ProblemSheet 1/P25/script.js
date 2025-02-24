function show_data() {
    let name = document.forms["form1"]["name"];
    let email = document.forms["form1"]["email"];
    let age = document.forms["form1"]["age"];
    let gender = document.forms["form1"]["gender"];
    let course = document.forms["form1"]["course"];

    let hobbies = "";
    let inputelement = document.forms["form1"]["hobby"];

    for (let i = 0; i < inputelement.length; i++) {
        if (inputelement[i].checked) {
            hobbies += " " + inputelement[i].value;
        }
    }

    let result = document.getElementById("display");

    result.innerHTML += "Name : " + name.value + "<br>";
    result.innerHTML += "Email : " + email.value + "<br>";
    result.innerHTML += "Age : " + age.value + "<br>";
    result.innerHTML += "Gender : " + gender.value + "<br>";

    if (course.value == "Select Course") {
        result.innerHTML += "No Course Selected !" + "<br>";
    }
    else {
        result.innerHTML += "Course : " + course.value + "<br>";
    }

    if (hobbies == "") {
        result.innerHTML += "No Hobby Selected !" + "<br>";
    }
    else {
        result.innerHTML += "Hobbies : " + hobbies + "<br>";
    }
}