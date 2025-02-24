function getAge(){
    let birthDate = new Date(document.getElementById("inputDate").value);
    let currentDate = new Date();

    if(birthDate > currentDate || isNaN(birthDate)) {
        alert("Choice Valid Date!!!");
    } else {
        let dateAge = new Date();
        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        console.log(`Years: ${ageYears}, Months: ${ageMonths}, Days: ${ageDays}`);
    }
    // let birthYear = birthDate.getFullYear();
    // let currentYear = currentDate.getFullYear();
    // let age = currentYear - birthYear;
    // console.log(age);
    // document.getElementById("answer").innerHTML = `your age is ${age} Year.`;
}


