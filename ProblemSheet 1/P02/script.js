function temp(){
    let Celsius = document.getElementById("inputOfTemp");
    console.log(Celsius);
    let Fahrenheit = Celsius *(9 / 5) + 32;
    let kelvin = Celsius - 273.15;
    console.log("Fahrenheit is : "  + Fahrenheit);
    console.log("Kelvin is : " + kelvin);
}
