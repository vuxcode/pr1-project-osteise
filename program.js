// create a variable for all artists to store in the localstorage
var mj;
var acdc;
var bruce;
var abba;
var elvis;
var cash;
var mc;
var bob;
var elton;
var queen;
var beatles;
// create a function to set the values to the values in the local storage
function getArtists() {
    mj = localStorage.getItem("saved_mj");
    acdc = localStorage.getItem("saved_acdc");
    bruce = localStorage.getItem("saved_bruce");
    abba = localStorage.getItem("saved_abba");
    elvis = localStorage.getItem("saved_elvis");
    cash = localStorage.getItem("saved_cash");
    mc = localStorage.getItem("saved_mc");
    bob = localStorage.getItem("saved_bob");
    elton = localStorage.getItem("saved_elton");
    queen = localStorage.getItem("saved_queen");
    beatles = localStorage.getItem("saved_beatles");
}
// run the function upon load
getArtists();


// create a function to push it into the localstorage
function pushArtist() {
    // save it to the local storage
    localStorage.setItem("saved_mj", mj);
    localStorage.setItem("saved_acdc", acdc);
    localStorage.setItem("saved_bruce", bruce);
    localStorage.setItem("saved_abba", abba);
    localStorage.setItem("saved_elvis", elvis);
    localStorage.setItem("saved_cash", cash);
    localStorage.setItem("saved_mc", mc);
    localStorage.setItem("saved_bob", bob);
    localStorage.setItem("saved_elton", elton);
    localStorage.setItem("saved_queen", queen);
    localStorage.setItem("saved_beatles", beatles);
    console.log("pushing artists");
}

// create a variable to store a number for the timer
var number = 31;
// create a loop to count up
function count() {
    // output the number
    console.log(number);
    //update the number
    number--;
    // update the timer to run the count function again
    timer = setTimeout(count, 1000);
    // create an if statement so the loop knows when to stop
    if (number == 0) {
        // abort the question
        abort();
        // make it stop 
        stop();
    }
}
// create a function to make the timer loop stop
function stop() {
    number = 31;
    // clear the timeout for the timer variable
    clearTimeout(timer);
    // output a message to say that the timer has stopped
    console.log("timer stopped")
}
// create a variable to use so the callnextquestion knows that the time has ran out
var timesUp = false;
// create a function to abort the question if they run out of time
function abort() {
    // set the time up variable to true
    timesUp = true;
    // disable the option buttons
    document.getElementById("optionA").disabled = true;
    document.getElementById("optionB").disabled = true;
    document.getElementById("optionC").disabled = true;
    document.getElementById("optionD").disabled = true;
    // disable the lifeline buttons
    document.getElementById("fiftyfifty").disabled = true;
    document.getElementById("hint").disabled = true;
    // change the text on the submitbutton
    document.getElementById("submitInner").innerText = "TIME IS UP!\nYou had " + score + " correct answers. Press here to Play again!";
    // enable the submitbutton
    document.getElementById("submit").disabled = false;
    // change the color of the enable button to red
    document.getElementById("submit").style.background = '#AE2021';
}
// create a variable to target the timer box
// var displayTime = document.getElementById("timerInner");
// displayTime.innerHTML = number;

// create variables and add the buttons
var question = document.getElementById("qOneInner");
var optA = document.getElementById("optAInner");
var optB = document.getElementById("optBInner");
var optC = document.getElementById("optCInner");
var optD = document.getElementById("optDInner");

// find the optionbutton A element to add event listener to change the color when mouseover
document.getElementById("optionA").addEventListener("mouseover", function() {
    document.getElementById("optionA").style.backgroundColor = "#0077B8";
});
// find the optionbutton element to add eventlistener to change the color back when mouseout
document.getElementById("optionA").addEventListener("mouseout", function() {
    document.getElementById("optionA").style.backgroundColor = "#023E8A";
});
// do the same thing with the other buttons!
// optionbutton B
document.getElementById("optionB").addEventListener("mouseover", function() {
    document.getElementById("optionB").style.backgroundColor = "#0077B8";
});
document.getElementById("optionB").addEventListener("mouseout", function() {
    document.getElementById("optionB").style.backgroundColor = "#023E8A";
});
// optionButton C
document.getElementById("optionC").addEventListener("mouseover", function() {
    document.getElementById("optionC").style.backgroundColor = "#0077B8";
});
document.getElementById("optionC").addEventListener("mouseout", function() {
    document.getElementById("optionC").style.backgroundColor = "#023E8A";
});
// optionButton D
document.getElementById("optionD").addEventListener("mouseover", function() {
    document.getElementById("optionD").style.backgroundColor = "#0077B8";
});
document.getElementById("optionD").addEventListener("mouseout", function() {
    document.getElementById("optionD").style.backgroundColor = "#023E8A";
});

// create variable to output the correct answer when a wrong answer is picked
var correctOpt;

// create variables to set to true once that question has been called
var callQuestOne;
var callQuestTwo;
var callQuestThree;
var callQuestFour;
var callQuestFive;
var callQuestSix;
var callQuestSeven;
var callQuestEight;
var callQuestNine;
var callQuestTen;

// create some variables to set to true in the 50/50 function to know if the option has been removed
var optACalled = false;
var optBCalled = false;
var optCCalled = false;
var optDCalled = false;

// create a hint variable to store the hint for the queston
var hint;
// target the hint button element
var hintButton = document.getElementById("hint");
// create a variable to know when you win the game
var youHaveWon = false;
// create a variable so the program knows it needs to reload when an answer is wrong
var incorrect = false;

// create a variable to keep track of the score
var score = 0;

// track the total session score in a variable
var total;
// create a function to add the score by one
function plusTotal() {
    // increase the score by one
    total++;
    // save the total score to local storage
    localStorage.setItem("saved_total", total);
    // check the current total score
    // console.log(total);
}
// create function to get the saved total score
function getScore() {
    // get the score from the local storage
    total = localStorage.getItem("saved_total");
    // display the current total score
    // console.log(total);
}
// run the function when the program starts
getScore();

// create a variable to store the last score
var lastScore;

// create a function to store the last score
function pushLast() {
    // make the lastscore var to have the score value
    lastScore = score;
    // save it to the local storage
    localStorage.setItem("saved_last", lastScore);
    // check it 
    console.log(lastScore);
}
// create a function to get the lastScore
function getLastScore() {
    // get the highscore from the local storage
    lastScore = localStorage.getItem("saved_last");
    // display the current score
    // console.log(lastScore);
}
// load the highscore when the program loads
getLastScore();

// create a variable to store the highest score
var highscore;
// fetch highscore from local storage
function getHighscore() {
    highscore = localStorage.getItem("saved_highscore");
}
getHighscore();
// create a function with an if-statement to check if the lastscore is higher than the highscore
function checkHighscore() {
    // get the saved highscore value from the local storage
    // highscore = localStorage.getItem("saved_highscore");
    // if the last score is higher than the highscore, make it the new highscore
    if (lastScore > highscore) {
        highscore = lastScore;
        // store the new highscore in the local storage
        localStorage.setItem("saved_highscore", highscore);
    }
}

// target the stats div element
var statDiv = document.getElementById("stats");
// set the text with your scores
statDiv.innerText = "Your highscore is: " + highscore + ". Your last score was: " + lastScore + ". Your total number is: " + total + ".";
// if this is the first time the user plays
if (highscore && lastScore && total == 0) {
    // output a text
    statDiv.innerText = "Your session stats will be shown here!";
}

// create the submit button element
var submitButton = document.getElementById("submitInner");
// create the default text to the submit button
submitButton.innerText="Press the button that you think is the correct answer!";
// disable submit button
submit.disabled = true;

// create the 50/50 button element
var fiftyButton = document.getElementById("fiftyInner");
// create the text in the button
fiftyButton.innerText="50/50";

// create a variable to check if 50/50 it has been used 
var checkFifty = false;

// create the hint button element
var hintInner = document.getElementById("hintInner");
// create the text in the button
hintInner.innerText="Get a Hint!";

// create a variable to check if hint has been used
var checkHint = false;

// create a variable to be able to update the level counter
var levelNumber = ("Question 1");
// target the element
level.innerText=levelNumber;

// create a function to output question number one
function questOne() {
    // create the question output
    var q1 = ("What song is not made by Michael Jackson?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Thriller", "Billie Jean", "Born to Run", "Beat It"];
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of these songs might be made by Bruce Springsteen.";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    // update mj var
    mj++;
} 
// create function to output question number two
function questTwo() {
    // create the question output
    var q1 = ("What song is not made by The Bealtes?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Yesterday", "Let It Be", "Here Comes the Sun", "Imagine"];
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of these songs are made by John Lennon, but not by The Beatles.";
    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    beatles++;
} 
// create question number three function
function questThree() {
    // create the question output
    var q1 = ("What song is not made by Johnny Cash?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Jailhouse Rock", "Cry, Cry, Cry", "Big River", "Ring of Fire"];
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "Elvis Presley was a big icon during the same time as Johnny Cash.\nOne of these songs are made by Elvis."
    // change the variable to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[0];
    cash++;
}
// create question number four function
function questFour() {
    // create the question output
    var q1 = ("What song is not made by ABBA?");
    //output it
    question.innerText=q1;
    // create the option output in an array
    var opt1 = ["Don't Stop Me Now", "Dancing Queen", "The Winner Takes It All", "Lay All Your Love On Me"];
    // output the array in the option boxes
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint 
    hint = "One of these songs are made by the rockband Queen."
    // change the variable to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[0];
    abba++;
}
// create question number five function
function questFive() {
    // create the question output
    var q1 = ("What song is not made by Bob Marley?");
    // output it in the question field
    question.innerText=q1;
    // create the option output in an array
    var opt1 = ["Buffalo Soldier", "Is This Love", "Bad Boys", "No Woman, No Cry"];
    // output the array in the option boxes
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of theese songs are made by the Jamaican raggaeband 'Inner Circle'";
    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[2];
    bob++;
}
// create question number six function
function questSix() {
    // create the question output
    var q1 = ("What song is not made by AC/DC?");
    // output it in the question box
    question.innerText=q1;
    // create the option output in an array
    var opt1 = ["Hells Bells", "Dirty Deeds Done Dirt Cheap", "Highway to Hell", "Any Way You Want It"];
    // output the array in the option boxes
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of theese songs are made by Journey."
    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    // update the correctOpt to output the correct answer if wrong answer is selected
    correctOpt = opt1[3];
    acdc++;
}
// create question number seven function
function questSeven() {
    // create the question output
    var q1 = ("What song is not made by Bruce Springsteen?");
    // output the text in the question field
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Dancing With Myself", "Dancing in the Dark", "Hungry Heart", "Born to Run"];
    //output the array in the option buttons
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint 
    hint = "Billy Idol made one of theese songs.";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    // update the correctOpt output to the correct answer
    correctOpt = opt1[1];
    bruce++;
}
// create question number eight function
function questEight() {
    // create the question output
    var q1 = ("What song is not made by Elton John?");
    // output the question
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Your Song", "Under Pressure", "I'm Still Standing", "Tiny Dancer"];
    // output the array in the option buttons
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "Queen made one of theese songs.";
    // change the variable to true or false
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    // update the correctOpt output to be the correct answer
    correctOpt = opt1[1];
    elton++;
}
// create the question number nine function
function questNine() {
    // create the question output
    var q1 = ("What song is not made by Queen?");
    // output the question
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Bohemian Rhapsody", "Don't Stop Me Now", "Don't Stop Believin'", "I Want To Break Free"];
    //output the array in the option buttons
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of theese songs are made by Journey.";
    // change the variable to true or false
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    // update the correctOpt output to be the correct answer
    correctOpt = opt1[3];
    queen++;
}
function questTen() {
    // create the question output
    var q1 = ("What song is not made by Motley Crue?");
    // output the question
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Thunderstruck", "Kickstart My Heart", "Girls, Girls, Girls", "Dr. Feelgood"];
    // output the array in the option boxes
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    // create a hint
    hint = "One of theese songs are made by AC/DC.";
    // change the variables to true or false
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    // update the correctOpt output to be the correct answer
    correctOpt = opt1[0];
    mc++;
}
// create a function that replaces the text in the submit button with a hint
function getAHint() {
    // make the text in the submit button the hint variable
    submitButton.innerText=hint;
    // disable the hint button
    hintButton.disabled = true;
    // change the color of the button so the user knows it has been used
    hintButton.style.backgroundColor="grey";
    // set the check hint variable to true to learn that it has been used
    checkHint = true;
}

// create a function for each option button that makes the button empty (for 50/50 button)
function optAEmpty() {
    // target the id and create an output that says WRONG
    optAInner.innerText="WRONG";
    // also disable the button
    optionA.disabled = true;
}
// repeat for the rest of the option buttons
function optBEmpty() {
    optBInner.innerText="WRONG";
    optionB.disabled = true;
}
function optCEmpty() {
    optCInner.innerText="WRONG";
    optionC.disabled = true;
}
function optDEmpty() {
    optDInner.innerText="WRONG";
    optionD.disabled = true;
}

// create a random function generator to pick a button function that is incorrect
function optACorrect() {
    // create a variable to use in the switch statement
    var lifeline = Math.floor(Math.random() * 3);
    // put in the functions that disables the wrong options. 
    switch(lifeline) {
        case 0:
            // call the function to replace the text in the option button
            optBEmpty();
            // set it's variable to true
            optBCalled = true;
            break;
        case 1: 
            optCEmpty();
            optCCalled = true;
            break;
        case 2: 
            optDEmpty();
            optDCalled = true;
            break;
    }
    // create a variable to use for a second switch statement
    var secondLifeline = Math.floor(Math.random() * 2);
    // create an if statement to find out which option has been removed
    if (optBCalled) {
        // run another switch statement to choose the second option button to remove
        switch(secondLifeline) {
            case 0:
                optCEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    // check if it was option C that was removed and removed another random wrong answer
    else if (optCCalled) {
        switch(secondLifeline) {
            case 0: 
                optBEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    // repeat for the last button
    else if (optDCalled) {
        switch(secondLifeline) {
            case 0:
                optBEmpty();
                break;
            case 1: 
                optCEmpty();
                break;
        }
    }
    // disable the 50/50 button
    fiftyfifty.disabled = true;
    // change the color of it to show that it was been used
    fiftyfifty.style.background="grey";
    checkFifty = true;
}
// repeat the whole function to use if option B is correct
function optBCorrect() {
    var lifeline = Math.floor(Math.random() * 3);
    switch(lifeline) {
        case 0:
            optAEmpty();
            optACalled = true;
            break;
        case 1: 
            optCEmpty();
            optCCalled = true;
            break;
        case 2: 
            optDEmpty();
            optDCalled = true;
            break;
    }
    var secondLifeline = Math.floor(Math.random() * 2);
    if (optACalled) {
        switch(secondLifeline) {
            case 0:
                optCEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    else if (optCCalled) {
        switch(secondLifeline) {
            case 0: 
                optAEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    else if (optDCalled) {
        switch(secondLifeline) {
            case 0:
                optAEmpty();
                break;
            case 1: 
                optCEmpty();
                break;
        }
    }
    // disable the 50/50 button
    fiftyfifty.disabled = true;
    // change the color of it to show that it was been used
    fiftyfifty.style.background="grey";
    checkFifty = true;
}
// repeat again if option C is correct
function optCCorrect() {
    var lifeline = Math.floor(Math.random() * 3);
    switch(lifeline) {
        case 0:
            optAEmpty();
            optACalled = true;
            break;
        case 1: 
            optBEmpty();
            optBCalled = true;
            break;
        case 2: 
            optDEmpty();
            optDCalled = true;
            break;
    }
    var secondLifeline = Math.floor(Math.random() * 2);
    if (optACalled) {
        switch(secondLifeline) {
            case 0:
                optBEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    else if (optBCalled) {
        switch(secondLifeline) {
            case 0: 
                optAEmpty();
                break;
            case 1:
                optDEmpty();
                break;
        }
    }
    else if (optDCalled) {
        switch(secondLifeline) {
            case 0:
                optAEmpty();
                break;
            case 1: 
                optBEmpty();
                break;
        }
    }
    // disable the 50/50 button
    fiftyfifty.disabled = true;
    // change the color of it to show that it was been used
    fiftyfifty.style.background="grey";
    checkFifty = true;
}
// repeat again if option D is correct
function optDCorrect() {
    var lifeline = Math.floor(Math.random() * 3);
    switch(lifeline) {
        case 0:
            optAEmpty();
            optACalled = true;
            break;
        case 1: 
            optBEmpty();
            optBCalled = true;
            break;
        case 2: 
            optCEmpty();
            optCCalled = true;
            break;
    }
    var secondLifeline = Math.floor(Math.random() * 2);
    if (optACalled) {
        switch(secondLifeline) {
            case 0:
                optBEmpty();
                break;
            case 1:
                optCEmpty();
                break;
        }
    }
    else if (optBCalled) {
        switch(secondLifeline) {
            case 0: 
                optAEmpty();
                break;
            case 1:
                optCEmpty();
                break;
        }
    }
    else if (optCCalled) {
        switch(secondLifeline) {
            case 0:
                optAEmpty();
                break;
            case 1: 
                optBEmpty();
                break;
        }
    }
    // disable the 50/50 button
    fiftyfifty.disabled = true;
    // change the color of it to show that it was been used
    fiftyfifty.style.background="grey";
    checkFifty = true;
}

// create the 50/50 lifeline function
function fiftyFifty() {
    if (optA) {
        optACorrect();
    }
    else if (optB) {
        optBCorrect();
    }
    else if (optC) {
        optCCorrect();
    }
    else if (optD) {
        optDCorrect();
    }
}

// create a random function generator to choose a random question
function randomQuestion() {
    // create the random variable
    var random = Math.floor(Math.random() * 10);
    // set callquestone to true so the program will know that it has been used
    callQuestOne = true;
    // put in the question functions
    switch(random) {
        case 0:
            questOne();
            break;
        case 1: 
            questTwo();
            break;
        case 2:
            questThree();
            break;
        case 3:
            questFour();
            break;
        case 4:
            questFive();
            break;
        case 5: 
            questSix();
            break;
        case 6:
            questSeven();
            break;
        case 7: 
            questEight();
            break;
        case 8: 
            questNine();
            break;
        case 9:
            questTen();
            break;  
        }     
        // include the timer function
        count();
    }
// run the first random function generator when the program loads
randomQuestion();

// create function to check option A
function checkAnswerA() {
    // freeze the timer
    freeze = true;
    // stop and reset the timer
    stop();
    // if the answer is incorrect
    if (optA == false) {
        // check it so that the button is working
        console.log("That's incorrect..");
        // update color for the submit button
        wrongColor('#AE2021');
        // update the color of the option button
        wrongColorA('#AE2021');
        // turn the correct answer green
        findAnswer();
        // push the score in to the highscore array
        pushLast();
        // check if its a new highscore
        checkHighscore();
        // change the text of the submit button
        submitInner.innerText="That is incorrect.. The correct answer is " +  "'" + correctOpt + "'..\nYou had " + score + " correct answers. Press this button to play again!";
        submit.disabled = false;
        // set incorrect to true, so the program knows it needs to end
        incorrect = true;
    }
    // else if its the last question
    else if (youHaveWon) {
        // update the score
        score++;
        // use the function to turn the button green
        ifWrongA('#0F5132');
        // run the function to let hem know that they have won
        youWin();
        // enable the submit button
        submit.disabled = false;
        // push the artist into the local storage
        pushArtist();
    }
    // if the answer is correct
    else if (optA) {
        console.log("That's correct!");
        correctColor('#0F5132');
        // use the function to turn the button green
        ifWrongA('#0F5132');
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
        // update the score
        score++;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    // disable the lifeline buttons
    fiftyfifty.disabled = true;
    hintButton.disabled = true;
}
// create function to check option B
function checkAnswerB() {
    // freeze the timer
    freeze = true;
    // stop and reset the timer
    stop();
    if (optB == false) {
        // check it so that the button is working
        console.log("That's incorrect..");
        // update color for the submit button
        wrongColor('#AE2021');
        // change color of the option button
        wrongColorB('#AE2021');
        // turn the correct answer green
        findAnswer();
        // push the score in to the highscore array
        pushLast();
        // check if its a new highscore
        checkHighscore();
        // change the text of the submit button
        submitInner.innerText="That is incorrect.. The correct answer is " +  "'" + correctOpt + "'..\nYou had " + score + " correct answers. Press this button to play again!";
        submit.disabled = false;
        // set incorrect to true, so the program knows it needs to end
        incorrect = true;
    }
    // else if its the last question
    else if (youHaveWon) {
        // update the score
        score++;
        // use the function to turn the button yellow
        youWinB();
        // run the function to let hem know that they have won
        youWin();
        // enable the submit button
        submit.disabled = false;
        // push the artist into the local storage
        pushArtist();
    }
    else if (optB) {
        // check it so that the button is working
        console.log("That's correct!");
        // update the color of the submit button
        correctColor('#0F5132');
        // use the function to turn the button green
        ifWrongB('#0F5132');
        // change the text of the submit button
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
        // update the score
        score++;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    // disable the lifeline buttons
    fiftyfifty.disabled = true;
    hintButton.disabled = true;
}
// create function to check option C
function checkAnswerC() {
    // freeze the timer
    freeze = true;
    // stop and reset the timer
    stop();
    if (optC == false) {
        console.log("That's incorrect..");
        wrongColor('#AE2021');
        wrongColorC('#AE2021');
        findAnswer();
        // push the score in to the highscore array
        pushLast();
        // check if its a new highscore
        checkHighscore();
        submitInner.innerText="That is incorrect.. The correct answer is " +  "'" + correctOpt + "'..\nYou had " + score + " correct answers. Press this button to play again!";
        submit.disabled = false;
        // set incorrect to true, so the program knows it needs to end
        incorrect = true;
    }
    // else if its the last question
    else if (youHaveWon) {
        // update the score
        score++;
        // run the function to let hem know that they have won
        youWin();
        // enable the submit button
        submit.disabled = false;
        // push the artist into the local storage
        pushArtist();
    }
    else if (optC) {
        console.log("That's correct!");
        correctColor('#0F5132');
        ifWrongC('#0F5132');
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
        // update the score
        score++;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    // disable the lifeline buttons
    fiftyfifty.disabled = true;
    hintButton.disabled = true;
}
// create function to check option D
function checkAnswerD() {
    // freeze the timer
    freeze = true;
    // stop and reset the timer
    stop();
    if (optD == false) {
        console.log("That's incorrect..");
        wrongColor('#AE2012');
        wrongColorD('#AE2021');
        findAnswer();
        // push the score in to the highscore array
        pushLast();
        // check if its a new highscore
        checkHighscore();
        submitInner.innerText="That is incorrect.. The correct answer is " +  "'" + correctOpt + "'..\nYou had " + score + " correct answers. Press this button to play again!";
        submit.disabled = false;
        // set incorrect to true, so the program knows it needs to end
        incorrect = true;
    }
    // else if its the last question
    else if (youHaveWon) {
        // update the score
        score++;
        // run the function to let hem know that they have won
        youWin();
        // enable the submit button
        submit.disabled = false;
        // push the artist into the local storage
        pushArtist();
    }
    else if (optD) {
        console.log("That's correct!");
        correctColor('#0F5132');
        ifWrongD('#0F5132');
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
        // update the score
        score++;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    // disable the lifeline buttons
    fiftyfifty.disabled = true;
    hintButton.disabled = true;
}

// create a function to change the submit button to red if the answer is wrong
function wrongColor(newColorRed) {
    // find the element that conrols the button style
    var changeWrongColor = document.getElementById("submit");
    // update the background color of the button
    changeWrongColor.style.background = newColorRed;
}
// create a function to switch the option button A to red if it's the wrong answer
function wrongColorA(newColorRed) {
    // find the element that controls option A
    var changeWrongColorA = document.getElementById("optionA");
    // update the background color of the button
    changeWrongColorA.style.background = newColorRed;
}
// create a function to change the option button B color to red if it's the wrong answer
function wrongColorB(newColorRed) {
    // find the element that controls option B
    var changeWrongColorB = document.getElementById('optionB');
    // update the background color of the button
    changeWrongColorB.style.background = newColorRed;
}
// create a function to change the option button C color to red if it's wrong
function wrongColorC(newColorRed) {
    // find the element that controls option C button
    var changeWrongColorC = document.getElementById('optionC');
    // update the background color of the button
    changeWrongColorC.style.background = newColorRed;
}
// create a function to change the option button D color to red if it's wrong
function wrongColorD(newColorRed) {
    // find the element that controls option D button
    var changeWrongColorD = document.getElementById('optionD');
    // uptdate the background color of the element
    changeWrongColorD.style.background = newColorRed;
}

// create a function to change the submit button to green if the answer is correct
function correctColor(newColorGreen) {
    // find the element that controls the button style
    var changeCorrectColor = document.getElementById("submit");
    // update the background color of the button
    changeCorrectColor.style.background = newColorGreen;
}

// create function to change the option A button green if the answer is wrong
function ifWrongA(newColorGreen) {
    // link to the element
    var changeIfWrongA = document.getElementById('optionA');
    // update the color
    changeIfWrongA.style.background = newColorGreen;
}

// do the same thing with option B button
function ifWrongB(newColorGreen) {
    var changeIfWrongB = document.getElementById('optionB');
    changeIfWrongB.style.background = newColorGreen;
}

// do the same thing with option C button
function ifWrongC(newColorGreen) {
    var changeIfWrongC = document.getElementById('optionC');
    changeIfWrongC.style.background = newColorGreen;
}

// do the same thing with option D button
function ifWrongD(newColorGreen) {
    var changeIfWrongD = document.getElementById('optionD');
    changeIfWrongD.style.background = newColorGreen;
}

// create a function to find what answer is correct and turn the button green if the answer is wrong
function findAnswer() {
    // if option A is correct
    if (optA == true) {
        // run the function that turns option A button green
        ifWrongA('#0F5132');
    }
    // if option B is correct
    else if (optB == true) {
        // run the function that turns option B button green
        ifWrongB('#0F5132');
    }
    // if option C is correct
    else if (optC == true) {
        // run the function that turns option C button green
        ifWrongC('#0F5132');
    }
    // if option D is correct
    else if (optD == true) {
        // run the function that turns option D button green
        ifWrongD('#0F5132');
    }
}
// create a function to reset the colors on the buttons between questions
function resetColors() {
    // find the element
    var oldColorA = document.getElementById('optionA');
    // set the color
    oldColorA.style.background = '#023E8A';
    // repeat for all the buttons
    var oldColorB = document.getElementById('optionB');
    oldColorB.style.background = '#023E8A';
    var oldColorC = document.getElementById('optionC');
    oldColorC.style.background = '#023E8A';
    var oldColorD = document.getElementById('optionD');
    oldColorD.style.background = '#023E8A';
    var oldColorSubmit = document.getElementById('submit');
    oldColorSubmit.style.background = '#023E8A';
    
    // change back the text of the submit button
    submitInner.innerText="Press the button that you think is the correct answer!";
    // disable the submit button
    submit.disabled = true;

    // enable the option buttons
    optionA.disabled = false;
    optionB.disabled = false;
    optionC.disabled = false;
    optionD.disabled = false;
    // check if 50/50 should be enabled
    if (checkFifty) {
        fiftyfifty.disabled = true;
    }
    else if (checkFifty == false)
        fiftyfifty.disabled = false;
    // check if hint should be enabled
    if (checkHint) {
        hintButton.disabled = true;
    }
    else if (checkHint == false) {
        hintButton.disabled = false;
    }
}
// QUESTION NUMBER TWO
function questOneTwo() {
    // create the question output
    var q1 = ("Where are the members of AC/DC from?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["England", "Ireland", "America", "Australia"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "They are not from Europe.";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    acdc++;
}
function questTwoTwo() {
    // create the question output
    var q1 = ("Where are the members of ABBA from?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["England", "Sweden", "Norway", "America"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "They are Scandinavians";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    abba++;
}
function questThreeTwo() {
    // create the question output
    var q1 = ("What country was Michael Jackson born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["America", "South Africa", "England", "Canada"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He is born somewhere in North America";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    mj++;
}
function questFourTwo() {
    // create the question output
    var q1 = ("In what country was Bruce Springsteen born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["America", "Australia", "New Zealand", "Canada"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He has a song about it.";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    bruce++;
}
function questFiveTwo() {
    // create the question output
    var q1 = ("In what country was Queen formed?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["England", "Belgium", "America", "Ireland"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "They were formed in Europe.";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    queen++;
}
function questSixTwo() {
    // create the question output
    var q1 = ("In what country was Elton John born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Germany", "Scotland", "Canada", "England"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He is European";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    elton++;
}
function questSevenTwo() {
    // create the question output
    var q1 = ("In what country was Bob Marley born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Nigeria", "South Africa", "Jamaica", "Somalia"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He often uses the colors of his home country's flag.\nThese colors are: red, green and yellow.";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    bob++;
}
function questEightTwo() {
    // create the question output
    var q1 = ("In what country was Motley Crue formed?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Australia", "America", "Germany", "The Netherlands"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "They are not from Europe.";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    mc++;
}
function questNineTwo() {
    // create the question output
    var q1 = ("In what country was Elvis Presley born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Canada","The Netherlands", "Germany", "America"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He is not European";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    elvis++;
}
function questTenTwo() {
    // create the question output
    var q1 = ("In what country was Johnny Cash born in?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["Denmark", "Argentina", "America", "England"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "He is not European";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    cash++;
}
function randomQuestionTwo() {    
    // change the level number to 2
    var levelNumber = ("Question 2");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 2
    var random = Math.floor(Math.random() * 10);
    callQuestTwo = true;
    // put in the question functions
    switch(random) {
        case 0:
            questOneTwo();
            break;
        case 1:
            questTwoTwo();
            break;
        case 2: 
            questThreeTwo();
            break;
        case 3:
            questFourTwo();
            break;
        case 4:
            questFiveTwo();
            break;
        case 5:
            questSixTwo();
            break;
        case 6:
            questSevenTwo();
            break;
        case 7:
            questEightTwo();
            break;
        case 8: 
            questNineTwo();
            break;
        case 9:
            questTenTwo();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}
// QUESTION NUMBER THREE
function questOneThree() {
    // create the question output
    var q1 = ("When did Michael Jackson realese his debut solo single?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1968", "1969", "1971", "1973"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '70s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    mj++;
}
function questTwoThree() {
    // create the question output
    var q1 = ("When did ABBA release their first song?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1977", "1972", "1980", "1985"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '70s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    abba++;
}
function questThreeThree() {
    // create the question output
    var q1 = ("When did Elvis Presley release his first song?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1965", "1949", "1954", "1959"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '50s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    elvis++;
}
function questFourThree() {
    // create the question output
    var q1 = ("When did Bob Marley release his first song?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1979", "1962", "1975", "1969"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '60s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    bob++;
}
function questFiveThree() {
    // create the question output
    var q1 = ("When did Bruce Springsteen realese his first album?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1972", "1978", "1981", "1983"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '70s";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    bruce++;
}
function questSixThree() {
    // create the question output
    var q1 = ("When did Queen release their first album?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1963", "1969", "1973", "1979"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '70s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    queen++;
}
function questSevenThree() {
    // create the question output
    var q1 = ("When did Elton John release his debut album?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1978", "1979", "1968", "1969"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '60s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    elton++;
}
function questEightThree() {
    // create the question output
    var q1 = ("When did Johnny Cash release his first song?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1955", "1959", "1961", "1949"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '50s";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    cash++;
}
function questNineThree() {
    // create the question output
    var q1 = ("When did Motley Crue relase their first album?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1982", "1981", "1989", "1979"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the early '80s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    mc++;
}
function questTenThree() {
    // create the question output
    var q1 = ("When did AC/DC release their first album?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1971", "1981", "1982", "1976"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '70s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    acdc++;
}
// create random question generator for question three
function randomQuestionThree() {    
    // change the level number to 3
    var levelNumber = ("Question 3");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 3
    var random = Math.floor(Math.random() * 10);
    callQuestThree = true;
    // put in the question functions
    switch(random) {
        case 0:
            questOneThree();
            break;
        case 1: 
            questTwoThree();
            break;
        case 2:
            questThreeThree();
            break;
        case 3: 
            questFourThree();
            break;
        case 4:
            questFiveThree();
            break;
        case 5: 
            questSixThree();
            break;
        case 6:
            questSevenThree();
            break;
        case 7:
            questEightThree();
            break;
        case 8:
            questNineThree();
            break;
        case 9: 
            questTenThree();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}
// QUESTION FOUR
function questOneFour() {
    // create the question output
    var q1 = ("What year did Michael Jackson pass away?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["2009", "2005", "2010", "2012"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was before 2010.";
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
    mj++;
}
function questTwoFour() {
    // create the question output
    var q1 = ("When did ABBA release their last album before their 2021 comeback?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1979", "1981", "1987", "1990"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was released in the '80s";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
    abba++;
}
function questThreeFour() {
    // create the question output
    var q1 = ("When did Elvis Presley pass away?");
    question.innerText=q1;
    // create the option outputs
    var opt1 = ["1987", "1981", "1983", "1977"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    // create a hint
    hint = "It was 19*7";
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
    elvis++;
}
function questFourFour() {
   // create the question output
   var q1 = ("When did the original AC/DC singer Bon Scott pass away?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["1980", "1970", "1983", "1973"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was 19*70";
   // change the variables to the correct/incorrect answers
   optA = true;
   optB = false;
   optC = false;
   optD = false;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[0];
   acdc++;
}
function questFiveFour() {
   // create the question output
   var q1 = ("When did Bob Marley pass away?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["1988", "1981", "1991", "1994"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was 19*1";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = true;
   optC = false;
   optD = false;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[1];
   bob++;
}
function questSixFour() {
   // create the question output
   var q1 = ("What is Bruce Springsteen's primary backing band called?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["B Street Band", "Bruce Springsteen Backing Band", "The E Street Band", "Southside Johnny"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "There is definitely a street involved.";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = false;
   optC = true;
   optD = false;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[2];
   bruce++;
}
function questSevenFour() {
   // create the question output
   var q1 = ("When did Queen frontman Freddie Mercury pass away?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["1999", "1993", "2001", "1991"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was in the early '90s";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = false;
   optC = false;
   optD = true;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[3];
   queen++;
}
function questEightFour() {
   // create the question output
   var q1 = ("When did Elton John's farewell tour 'Farewell Yellow Brick Road' start?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["2013", "2009", "2016", "2018"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was sometime 201*";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = false;
   optC = false;
   optD = true;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[3];
   elton++;
}
function questNineFour() {
   // create the question output
   var q1 = ("When did Johnny Cash pass away?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["2001", "2003", "1999", "1997"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was sometime in the 21st century";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = true;
   optC = false;
   optD = false;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[1];
   cash++;
}
function questTenFour() {
   // create the question output
   var q1 = ("When was Nikki Sixx of Motley Crue clinically dead for two minutes?");
   question.innerText=q1;
   // create the option outputs
   var opt1 = ["1985", "1995", "1997", "1987"];
   // update the outputs
   optAInner.innerText=opt1[0];
   optBInner.innerText=opt1[1];
   optCInner.innerText=opt1[2];
   optDInner.innerText=opt1[3];
   // create a hint
   hint = "It was 19*7";
   // change the variables to the correct/incorrect answers
   optA = false;
   optB = false;
   optC = false;
   optD = true;
   //update correctOpt with the correct option to output when incorrect option is chosen
   correctOpt = opt1[3];
   mc++;
}
// create random question generator for question four
function randomQuestionFour() {    
    // change the level number to 4
    var levelNumber = ("Question 4");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 4
    var random = Math.floor(Math.random() * 10);
    callQuestFour = true;
    // put in the question functions
    switch(random) {
        case 0:
            questOneFour();
            break;
        case 1:
            questTwoFour();
            break;
        case 2: 
            questThreeFour();
            break;
        case 3:
            questFourFour();
            break;
        case 4:
            questFiveFour();
            break;
        case 5:
            questSixFour();
            break;
        case 6:
            questSevenFour();
            break;
        case 7:
            questEightFour();
            break;
        case 8:
            questNineFour();
            break;
        case 9:
            questTenFour();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}
// QUESTION FIVE
function questOneFive() {
    // create the question output
    var q1 = ("QUESTION");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question five

function randomQuestionFive() {    
    // change the level number to 5
    var levelNumber = ("Question 5");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 5
    var random = Math.floor(Math.random() * 1);
    callQuestFive = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneFive();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}



// QUESTION SIX

function questOneSix() {
    // create the question output
    var q1 = ("FRÅGA");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question six

function randomQuestionSix() {    
    // change the level number to 6
    var levelNumber = ("Question 6");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 6
    var random = Math.floor(Math.random() * 1);
    callQuestSix = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneSix();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}



// QUESTION SEVEN

function questOneSeven() {
    // create the question output
    var q1 = ("FRÅGA");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question four

function randomQuestionSeven() {    
    // change the level number to 7
    var levelNumber = ("Question 7");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 7
    var random = Math.floor(Math.random() * 1);
    callQuestSeven = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneSeven();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}




// QUESTION EIGHT

function questOneEight() {
    // create the question output
    var q1 = ("FRÅGA");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question 8

function randomQuestionEight() {    
    // change the level number to 8
    var levelNumber = ("Question 8");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 8
    var random = Math.floor(Math.random() * 1);
    callQuestEight = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneEight();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}






// QUESTION NINE

function questOneNine() {
    // create the question output
    var q1 = ("FRÅGA");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question 9

function randomQuestionNine() {    
    // change the level number to 9
    var levelNumber = ("Question 9");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 9
    var random = Math.floor(Math.random() * 1);
    callQuestNine = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneNine();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}


// QUESTION TEN

function questOneTen() {
    // create the question output
    var q1 = ("FRÅGA");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["FEL", "KORREKT", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    // set youHaveWon to the correct option so we know they have won
    youHaveWon = optB;
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
}

// create random question generator for question ten

function randomQuestionTen() {    
    // change the level number to 10
    var levelNumber = ("Question 10");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 10
    var random = Math.floor(Math.random() * 1);
    callQuestTen = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneTen();
            break;
    }
    // include the timer function
    count();
    // set freeze to false and start the canvas function again
    freeze = false;
    updateX();
}
// create a function to turn option button A to yellow when you win
function youWinA() {
    // target the elements
    document.getElementById("optionA").style.background = 'rgba(255,245,46,1)';
    document.getElementById("optionA").style["box-shadow"] = "0px 0px 70px 70px rgba(255,245,46,1)";
    document.getElementById("optAInner").style.color = 'black';
    document.getElementById("optionA").borderColor = 'rgba(255,245,46,1)';
    // run the functions to set the opacity of the other buttons
    notCorrectB();
    notCorrectC();
    notCorrectD();
}
// create a function to turn option button B to yellow when you win
function youWinB() {
    document.getElementById("optionB").style.background = 'rgba(255,245,46,1)';
    document.getElementById("optionB").style["box-shadow"] = "0px 0px 70px 70px rgba(255,245,46,1)";
    document.getElementById("optBInner").style.color = 'black';
    document.getElementById("optionB").style.borderColor = 'rgba(255,245,46,1)';
    notCorrectA();
    notCorrectC();
    notCorrectD();
}
function youWinC() {
    document.getElementById("optionC").style.background = 'rgba(255,245,46,1)';
    document.getElementById("optionC").style["box-shadow"] = "0px 0px 70px 70px rgba(255,245,46,1)";
    document.getElementById("optCInner").style.color = 'black';
    document.getElementById("optionC").style.borderColor = 'rgba(255,245,46,1)';
    notCorrectA();
    notCorrectB();
    notCorrectD();
}
function youWinD() {
    document.getElementById("optionD").style.background = 'rgba(255,245,46,1)';
    document.getElementById("optionD").style["box-shadow"] = "0px 0px 70px 70px rgba(255,245,46,1)";
    document.getElementById("optDInner").style.color = 'black';
    document.getElementById("optionD").style.borderColor = 'rgba(255,245,46,1)';
    notCorrectA();
    notCorrectB();
    notCorrectC();
}
// create functions to change the opacity of the incorrect option buttons
function notCorrectA() {
    // target the element and set the opacity
    document.getElementById("optionA").style.opacity = '0.1';
}
function notCorrectB() {
    document.getElementById("optionB").style.opacity = '0.1';
}
function notCorrectC() {
    document.getElementById("optionC").style.opacity = '0.1';
}
function notCorrectD() {
    document.getElementById("optionD").style.opacity = '0.1';
}
// create a function that changes the question box when you answer all questions correctly
function youWin() {
    // update the last score in the local storage
    pushLast();
    // check if its a highscore, set it if it is
    checkHighscore();
    // change the text of the submit button
    submitButton.innerText="Congrats! '" + correctOpt + "' is correct! You have won!\nPress here to play again!";
    // set youHaveWon to true so callNextQuestion knows its the last question
    youHaveWon = true;
    // target the submitbutton element
    var changeToYellow = document.getElementById("submit");
    // change the color to yellow
    changeToYellow.style.background = 'rgba(255,245,46,1)';//'#F5C900';
    // target the font-color element
    var changeFontColor = document.getElementById("submitInner");
    // change it to black so it will be visible
    changeFontColor.style.color = 'black';
    // change the border to black
    document.getElementById("submit").style.borderColor = 'rgba(255,245,46,1)'; 
    // add a borderglow to the yellow button
    document.getElementById("submit").style["box-shadow"] = "0px 0px 70px 70px rgba(255,245,46,1)";
    // change the opacity of the lifeline buttons so they appear to be behind the glow
    document.getElementById("fiftyfifty").style.opacity = "0.1";
    document.getElementById("hint").style.opacity = "0.1";
}

// create a function to reload the program if the answer is wrong
function reloadProgram() {
    document.location.reload();
    pushArtist();
}

function callNextQuestion() {
    if (incorrect) {
        plusTotal();
        reloadProgram();
    }
    else if (timesUp) {
        plusTotal();
        pushLast();
        reloadProgram();
    }
    else if (callQuestOne == true) {
        // set the x coordinates to 0
        x = 0;
        // clear the canvas
        clearCanvas();
        // reset the colors of the buttons
        resetColors();
        // run the next question
        randomQuestionTwo();
        // set question one variable to false so the program knows it has been used
        callQuestOne = false;
        // add the total score to the local storage
        plusTotal();
    }
    else if (callQuestTwo == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionThree();
        callQuestTwo = false;
        plusTotal();
    }
    else if (callQuestThree == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionFour();
        callQuestThree = false;
        plusTotal();
    }
    else if (callQuestFour == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionFive();
        callQuestFour = false;
        plusTotal();
    }
    else if (callQuestFive == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionSix();
        callQuestFive = false;
        plusTotal();
    }
    else if (callQuestSix == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionSeven();
        callQuestSix = false;
        plusTotal();
    }
    else if (callQuestSeven == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionEight();
        callQuestSeven = false;
        plusTotal();
    }
    else if (callQuestEight == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionNine();
        callQuestEight = false;
        plusTotal();
    }
    else if (callQuestNine == true) {
        x = 0;
        clearCanvas();
        resetColors();
        randomQuestionTen();
        callQuestNine = false;
        plusTotal();
    }
    // else if (callQuestTen == true) {
    //     youWin();
    //     callQuestTen = false;
    //     youHaveWon = true;
    //     plusTotal();
    // }
    else if (youHaveWon == true) {
        plusTotal();
        reloadProgram();
    }
}
// target the canvas element
var canvas = document.getElementById("timerCanvas");
// get the 2d context of the canvas and save it in a variable
var ctx = canvas.getContext("2d");
// clear the canvas 
// ctx.clearRect(0, 0, canvas.width, canvas.height);
canvas.width = 800;
canvas.height = 50;
// create a function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// create a variable to freeze the canvas
var freeze = false;
// store a variable for the x coordinates
var x = canvas.width / 30;
var block = canvas.width / 30;
// create a function to update the position of the square on the canvas
// set the color
ctx.fillStyle = '#0077B8';
function updateX() {
    // console.log(x);
    if (freeze == true) {
        return;
    }
    // change the color to red
    if (x > 600) {
        ctx.fillStyle = '#AE2021';
    }
    if (x < 600) {
        ctx.fillStyle = '#0077B8';
    }
    // draw the line
    ctx.fillRect(0, 0, x, 150);
    // update the x variable
    x += block;
}
// use the update function every second at 30fps
var canvasTimer = setInterval(updateX, 1000);


// target the mode button element
var modeBtn = document.getElementById("mode");
// set the default text to darkmode
modeBtn.innerText="darkmode";
// create a variable to the program knows what text to output
var darkmodeOn = true;
// target the body 
var element = document.body;

// create a variable to store what theme is being used
var modeSet;
// set the local storage
// localStorage.setItem("saved_theme");
// get the variable from the local storage
modeSet = localStorage.getItem("saved_theme");

function defaultTheme() {
// create an if statement to know what theme to load
if (modeSet == "dark") {
    modeBtn.innerText="LIGHT";
    darkmodeOn = false;
    element.classList = "dark-mode";
}
else if (modeSet == "light") {
    modeBtn.innerText="DARK";
    darkmodeOn = true;
    element.classList = "light-mode";
}
}

defaultTheme();

// create a function to swap to and from darkmode
function darkmode() {
    // create if statement to toggle dark mode on/off
    // turn darkmode on
    if (darkmodeOn) {
        // set theme to dark
        element.classList = "dark-mode";
        // change the button text
        modeBtn.innerText="LIGHT";
        // set variable to false
        darkmodeOn = false;
        // set the local storage variable
        modeSet = "dark";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
    // turn lightmode on
    else if (darkmodeOn == false) {
        // set the theme to light
        element.classList = "light-mode";
        // change the button text
        modeBtn.innerText="DARK";
        // set the variable to true
        darkmodeOn = true;
        // set the local storage variable
        modeSet = "light";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
}