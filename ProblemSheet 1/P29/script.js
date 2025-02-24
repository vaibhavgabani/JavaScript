let name1 = document.getElementById("name");
        let age1 = document.getElementById("age");
        let male = document.getElementById("male");
        let female = document.getElementById("female");

        function name_validation() 
        {
            if (name1.value === "") 
            {
                document.getElementById("nameError").innerHTML = "Name Should not be Blank ";
                name1.focus();
                return false;
            } 
            else 
            {
                document.getElementById("nameError").innerHTML = "";
                return true;
            }
        }

        function age_validation() 
        {
            if(age1.value === "")
            {
                document.getElementById("ageError").innerHTML = "Age Should not be Blank ";
                age1.focus();
                return false;
            }
            else if (age1.value < 15 || age1.value > 20) 
            {
                document.getElementById("ageError").innerHTML = "Age should be between 15 and 20";
                age1.focus();
                return false;
            } 
            else 
            {
                document.getElementById("ageError").innerHTML = "";
                return true;
            }
        }

        function form_validatation() 
        {
            if (name_validation()==true && age_validation()==true) 
            {
                if (male.checked==true || female.checked==true) 
                {
                    document.getElementById("div2").innerHTML = "Form Submitted Successfully";
                    document.getElementById("genderError").innerHTML = "";
                    document.getElementById("div1").innerHTML = "";
                } 
                else 
                {
                    document.getElementById("genderError").innerHTML = "Gender is Required"; 
                }
            } 
            else 
            {
                document.getElementById("div1").innerHTML = "Invalid Input";
                document.getElementById("div2").innerHTML = "";
            }
        }