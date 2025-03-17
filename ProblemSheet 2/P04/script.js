function checkHr(input,hours_check){
    console.log(input.value);
    if(input.value >= 24 || input.value < 0){
        hours_check.innerHTML  = "Enter Valid Hours!!!";
        return;
    }
    hours_check.innerHTML  = null;
}

function checkMin(input,minutes_check){
    console.log(input.value);
    if(input.value >= 60 || input.value < 0){
        minutes_check.innerHTML  = "Enter Valid Minutes!!!";
        return;
    }
    minutes_check.innerHTML  = null;
}

function checkSecond(input,seconds_check){
    console.log(input.value);
    if(parseInt(input.value) >= 60 || parseInt(input.value) < 0){
        seconds_check.innerHTML  = "Enter Valid Seconds!!!";
        return;
    }
    seconds_check.innerHTML  = null;
}

function RestartAlaram(){
document.getElementById("inputHours").value = null;
document.getElementById("inputMinitus").value = null;
document.getElementById("inputSeconds").value = null;

}

// ...existing code...

let alarmInterval;
let isRunning = false;

function start(){
    // This function can be removed if not needed
}

function startAlaram(input){
    // Don't do anything if the alarm is already running
    if(isRunning) return;
    
    const hoursInput = document.getElementById("inputHours");
    const minutesInput = document.getElementById("inputMinitus");
    const secondsInput = document.getElementById("inputSeconds");
    
    // Make sure we have valid values
    let hours = hoursInput.value === "" ? 0 : parseInt(hoursInput.value);
    let minutes = minutesInput.value === "" ? 0 : parseInt(minutesInput.value);
    let seconds = secondsInput.value === "" ? 0 : parseInt(secondsInput.value);
    
    // Disable the inputs while the alarm is running
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    
    isRunning = true;
    
    // Start the countdown
    alarmInterval = setInterval(function() {
        // Decrease the seconds
        seconds--;
        
        // Handle time rollover
        if(seconds < 0) {
            seconds = 59;
            minutes--;
            
            if(minutes < 0) {
                minutes = 59;
                hours--;
                
                if(hours < 0) {
                    // Time's up! Stop the alarm
                    clearInterval(alarmInterval);
                    alert("Alarm time reached!");
                    RestartAlaram();
                    
                    // Re-enable inputs
                    hoursInput.disabled = false;
                    minutesInput.disabled = false;
                    secondsInput.disabled = false;
                    isRunning = false;
                    return;
                }
            }
        }
        
        // Update the display
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }, 1000); // Run every 1 second
}

function pauseAlaram(input){
    if(!isRunning) return;
    
    // Stop the interval
    clearInterval(alarmInterval);
    isRunning = false;
    
    // Re-enable inputs
    document.getElementById("inputHours").disabled = false;
    document.getElementById("inputMinitus").disabled = false;
    document.getElementById("inputSeconds").disabled = false;
}