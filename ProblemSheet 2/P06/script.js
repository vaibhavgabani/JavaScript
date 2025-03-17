var user = 'X'; 
var cnt = 0;
var gameOver = false;
document.getElementById("pannelText").innerText = "Current : "+ user;

function btnvclick(button) {
    // Only allow clicks if the button is empty AND the game isn't over
    if (button.value === '' && !gameOver) {
        cnt++;
        button.value = user;
        button.style.color = user === 'X' ? '#e74c3c' : '#3498db';
        button.style.fontSize = '70px';
        
        if(win()){
            document.getElementById("b").style.backgroundColor = user === 'X' ? '#e74c3c' : '#3498db';
            document.getElementById("b").style.transition = "background-color 0.5s";
            document.getElementById("pannelText").innerText = "🎉 " + user + " 🏆 You win! 🎊";
            gameOver = true;
            
        } else if(cnt === 9){
            document.getElementById("pannelText").innerText = "🤝 It's a draw! 🙌";
            gameOver = true;
        } else {
            user = user === 'X' ? 'O' : 'X';  // This toggles between X and O
            document.getElementById("pannelText").innerText = "Current : "+ user;
        }
    }
}

function win(){
    if((document.getElementById("box1").value) !== '' && (document.getElementById("box1").value) === (document.getElementById("box2").value) &&(document.getElementById("box2").value) === (document.getElementById("box3").value) || // row check
    (document.getElementById("box4").value) !== '' && (document.getElementById("box4").value) === (document.getElementById("box5").value) &&(document.getElementById("box5").value) === (document.getElementById("box6").value) ||
    (document.getElementById("box7").value) !== '' && (document.getElementById("box7").value) === (document.getElementById("box8").value) &&(document.getElementById("box8").value) === (document.getElementById("box9").value)||  
    (document.getElementById("box1").value) !== '' && (document.getElementById("box1").value) === (document.getElementById("box4").value) &&(document.getElementById("box4").value) === (document.getElementById("box7").value) || //cols check
    (document.getElementById("box2").value) !== '' && (document.getElementById("box2").value) === (document.getElementById("box5").value) &&(document.getElementById("box5").value) === (document.getElementById("box8").value) || 
    (document.getElementById("box3").value) !== '' && (document.getElementById("box3").value) === (document.getElementById("box6").value) &&(document.getElementById("box6").value) === (document.getElementById("box9").value) ||
    (document.getElementById("box1").value) !== '' && (document.getElementById("box1").value) === (document.getElementById("box5").value) &&(document.getElementById("box5").value) === (document.getElementById("box9").value)||// diagonal check
    (document.getElementById("box3").value) !== '' && (document.getElementById("box3").value) === (document.getElementById("box5").value) &&(document.getElementById("box5").value) === (document.getElementById("box7").value)){
        return true;
    }
    return false;
}

function resetGame(){
    let buttons = document.getElementsByClassName("box");
    for(let btn of buttons){
        btn.value = '';
        btn.style.color = '';
        btn.style.fontSize = '';
    }
    document.getElementById("b").style.backgroundColor = '';
    cnt = 0;
    user = 'X';
    gameOver = false; // Reset the game state
    document.getElementById("pannelText").innerText = "Current : "+ user;
}