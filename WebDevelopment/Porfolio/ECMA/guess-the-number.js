var mesg1 = document.getElementById("message1");
var mesg2 = document.getElementById("message2");
var mesg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guess = 0;
var guessed_nums = [];
console.log(answer);


var input = document.getElementById("guess");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("play_btn").click();
  }
});

function play(){
    // get the number that the user typed in the box 
    var user_guess = document.getElementById("guess").value;
    
    // when user input invalid
    if (isNaN(user_guess) || user_guess == ''){
        alert("Please enter a number!");
        document.getElementById("guess").value = '';
    } else if (user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100 only!!!");
        document.getElementById("guess").value = '';
    } else{
        guessed_nums.push(user_guess);
        no_of_guess+= 1;

        if (user_guess < answer){
            
            mesg1.textContent = "Your guess is too low";
            mesg2.textContent = "No of guesses: " + no_of_guess;
            mesg3.textContent = "Guessed number: " + guessed_nums;
            lowerOrHigher(user_guess, answer);
        }else if (user_guess > answer){
            
            mesg1.textContent = "Your guess is too high";
            mesg2.textContent = "No of guesses: " + no_of_guess;
            mesg3.textContent = "Guessed number: " + guessed_nums;
            lowerOrHigher(user_guess, answer);
        }else if (user_guess == answer){
            mesg1.textContent = "You Win!!!";
            mesg2.textContent = "The number was: " + answer;
            mesg3.textContent = "No of guesses " + no_of_guess;
            document.getElementById("footer").style.background = "green";
            document.getElementById("play_btn").disabled = true;
            document.getElementById("play_btn").style.cursor = 'default';
        }
    }
}

function lowerOrHigher(input, num){
    if (Math.abs(input - num) <= 10){
        document.getElementById("footer").style.background = "red";
        document.getElementById("footer").style.color = "white";
    }
    else if (Math.abs(input - num) >= 30){
        document.getElementById("footer").style.background = "blue";
        document.getElementById("footer").style.color = "white";
    }
    else{
        document.getElementById("footer").style.background = "white";
        document.getElementById("footer").style.color = "black";
    }
}

function restart() {
    // window.location.reload();
    answer = Math.floor(Math.random()*100) + 1;
    no_of_guess = 0;
    guessed_nums = []; 
    document.getElementById("footer").style.background = "white";
    mesg1.textContent = "";
    mesg2.textContent = "";
    mesg3.textContent = "";
    document.getElementById("guess").value = '';
    document.getElementById("play_btn").disabled = false;
    document.getElementById("play_btn").style.cursor = 'pointer';
}
