// get the total score from the program by creating a function
function getTotal() {
    // get the total score from the local storage
    total = localStorage.getItem("saved_total");
    // display the total score
    console.log(total);
}

// load the total score when the program loads
getTotal();

// output the total score on the session stats page
document.getElementById("totalStat").innerHTML = "Your total stat is: " + total;

// create a function to get the last score
function getLastScore() {
    // get the last score from the local storage
    lastScore = localStorage.getItem("saved_last");
    // check it 
    console.log(lastScore);
}

// run the function when the program loads
getLastScore();

localStorage.getItem("saved_highscore");

// output the last score on the session stats page
document.getElementById("lastScore").innerHTML = "Your latest score is: " + lastScore;

// get the highscore from the local storage
function getHighscore() {
    // get the highscore from the local storage
    highscore = localStorage.getItem("saved_highscore");
    // check it
    console.log("highscore = " + highscore);
}
// run the program
getHighscore();

// output the highscore on the session stats page
document.getElementById("highscoreText").innerHTML = "Your highscore is: " + highscore;

