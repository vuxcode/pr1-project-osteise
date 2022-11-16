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

var highscore = [];

// get the highscore from the program by creating a function
function getHighscore() {
    // get the score from the local storage
    highscore = localStorage.getItem("saved_score");
    // display the highscore
    console.log(highscore);
}
// run the function when the program loads
getHighscore();

// output the highscore on the session stats page
document.getElementById("highscore").innerHTML = "Your highest score is: " + highscore;