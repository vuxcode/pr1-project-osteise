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
    console.log(total);
}
// create function to get the saved total score
function getScore() {
    // get the score from the local storage
    total = localStorage.getItem("saved_total");
    // display the current total score
    console.log(total);
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
    console.log(lastScore);
}
// load the highscore when the program loads
getLastScore();

// create a variable to store the highest score
var highscore;

// create a function with an if-statement to check if the lastscore is higher than the highscore
function checkHighscore() {
    // get the saved highscore value from the local storage
    highscore = localStorage.getItem("saved_highscore");
    // if the last score is higher than the highscore, make it the new highscore
    if (lastScore > highscore) {
        highscore = lastScore;
        // store the new highscore in the local storage
        localStorage.setItem("saved_highscore", highscore);
    }
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
    
    hint = "'Born to Run' is featured on an album called just that, 'Born to Run'.\nBut is it really made by Michael Jackson?";

    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;

    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[2];
    
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
    
    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;

    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];

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

    // change the variable to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;

    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[0];
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

    // change the variable to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;

    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[0];
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

    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = true;
    optD = false;

    // update the correctOpt to output the correct answer in submit button
    correctOpt = opt1[2];
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

    // change the variable to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;

    // update the correctOpt to output the correct answer if wrong answer is selected
    correctOpt = opt1[3];
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

    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;

    // update the correctOpt output to the correct answer
    correctOpt = opt1[0];
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

    // change the variable to true or false
    optA = false;
    optB = true;
    optC = false;
    optD = false;

    // update the correctOpt output to be the correct answer
    correctOpt = opt1[1];
}

// create the question number nine function
function questNine() {
    // create the question output
    var q1 = ("What song is not made by Lady Gaga?");
    // output the question
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Bad Romance", "Alejandro", "The Edge of Glory", "Roar"];
    //output the array in the option buttons
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];

    // change the variable to true or false
    optA = false;
    optB = false;
    optC = false;
    optD = true;

    // update the correctOpt output to be the correct answer
    correctOpt = opt1[3];
}

function questTen() {
    // create the question output
    var q1 = ("What song is not made by Britney Spears?");
    // output the question
    question.innerText=q1;
    // create the option outputs in an array
    var opt1 = ["Gimme, Gimme, Gimme", "Toxic", "Oops!... I Did it Again", "... Baby One More Time"];
    // output the array in the option boxes
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];

    // change the variables to true or false
    optA = true;
    optB = false;
    optC = false;
    optD = false;

    // update the correctOpt output to be the correct answer
    correctOpt = opt1[0];
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
    }

// run the first random function generator when the program loads
randomQuestion();


// create function to check option A
function checkAnswerA() {
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
    // if the answer is correct
    else {
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
    else {
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
    else {
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
    else {
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

/*
*/

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
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
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
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = true;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[1];
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
    
    
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
}

function questFourTwo() {
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
    
    
    // change the variables to the correct/incorrect answers
    optA = false;
    optB = false;
    optC = false;
    optD = true;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[3];
}


function randomQuestionTwo() {    
    // change the level number to 2
    var levelNumber = ("Question 2");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 2
    var random = Math.floor(Math.random() * 4);
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
        
    }
}








// QUESTION NUMBER THREE


function questOneThree() {
    // create the question output
    var q1 = ("HEJ");
    question.innerText=q1;
    
    // create the option outputs
    var opt1 = ["Rätt", "Fel", "Fel", "Fel"];
    // update the outputs
    optAInner.innerText=opt1[0];
    optBInner.innerText=opt1[1];
    optCInner.innerText=opt1[2];
    optDInner.innerText=opt1[3];
    
    
    // change the variables to the correct/incorrect answers
    optA = true;
    optB = false;
    optC = false;
    optD = false;
    
    //update correctOpt with the correct option to output when incorrect option is chosen
    correctOpt = opt1[0];
}

// create random question generator for question three

function randomQuestionThree() {    
    // change the level number to 3
    var levelNumber = ("Question 3");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 3
    var random = Math.floor(Math.random() * 1);
    callQuestThree = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneThree();
            break;
    }
}




// QUESTION FOUR

function questOneFour() {
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

function randomQuestionFour() {    
    // change the level number to 4
    var levelNumber = ("Question 4");
    // find the element
    level.innerText=levelNumber;
    // create the randomizer for question 4
    var random = Math.floor(Math.random() * 1);
    callQuestFour = true;

    // put in the question functions
    switch(random) {
        case 0:
            questOneFour();
            break;
    }
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
}




// create a function to reload the program if the answer is wrong
function reloadProgram() {
    document.location.reload();
}

function callNextQuestion() {
    if (incorrect) {
        reloadProgram();
        plusTotal();
    }
    else if (callQuestOne == true) {
        resetColors();
        randomQuestionTwo();
        callQuestOne = false;
        plusTotal();
    }
    else if (callQuestTwo == true) {
        resetColors();
        randomQuestionThree();
        callQuestTwo = false;
        plusTotal();
    }
    else if (callQuestThree == true) {
        resetColors();
        randomQuestionFour();
        callQuestThree = false;
        plusTotal();
    }
    else if (callQuestFour == true) {
        resetColors();
        randomQuestionFive();
        callQuestFour = false;
        plusTotal();
    }
    else if (callQuestFive == true) {
        resetColors();
        randomQuestionSix();
        callQuestFive = false;
        plusTotal();
    }
    else if (callQuestSix == true) {
        resetColors();
        randomQuestionSeven();
        callQuestSix = false;
        plusTotal();
    }
    else if (callQuestSeven == true) {
        resetColors();
        randomQuestionEight();
        callQuestSeven = false;
        plusTotal();
    }
    else if (callQuestEight == true) {
        resetColors();
        randomQuestionNine();
        callQuestEight = false;
        plusTotal();
    }
    else if (callQuestNine == true) {
        resetColors();
        randomQuestionTen();
        callQuestNine = false;
        plusTotal();
    }
}