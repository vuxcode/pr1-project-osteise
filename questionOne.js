// create variables and add the buttons
var question = document.getElementById("qOneInner");
var optA = document.getElementById("optAInner");
var optB = document.getElementById("optBInner");
var optC = document.getElementById("optCInner");
var optD = document.getElementById("optDInner");

// create variable to output the correct answer when a wrong answer is picked
var correctOpt;

// create the submit button element
var submitButton = document.getElementById("submitInner");
// create the default text to the submit button
submitButton.innerText="Press the button that you think is the correct answer!";
// disable submit button
submit.disabled = true;


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

// create a random function generator to choose a random question
function randomQuestion() {
    // create the random variable
    var random = Math.floor(Math.random() * 3);
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
        }
    }

// run the random function generator
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
        // change the text of the submit button
        submitInner.innerText="That is incorrect..\nThe correct answer is " +  "'" + correctOpt + "'..";
    }
    // if the answer is correct
    else {
    console.log("That's correct!");
    correctColor('#0F5132');
    submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
    // enable the submit button
    submit.disabled = false;
    }
// disable ALL the option buttons
optionA.disabled = true;
optionB.disabled = true;
optionC.disabled = true;
optionD.disabled = true;
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
        // change the text of the submit button
        submitInner.innerText="That is incorrect..\nThe correct answer is " +  "'" + correctOpt + "'..";
    }
    else {
    // check it so that the button is working
    console.log("That's correct!");
    // update the color of the submit button
    correctColor('#0F5132');
    // change the text of the submit button
    submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
    // enable the submit button
    submit.disabled = false;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
}

// create function to check option C
function checkAnswerC() {
    if (optC == false) {
        console.log("That's incorrect..");
        wrongColor('#AE2021');
        wrongColorC('#AE2021');
        findAnswer();
        submitInner.innerText="That is incorrect..\nThe correct answer is " +  "'" + correctOpt + "'..";
    }
    else {
        console.log("That's correct!");
        correctColor('#0F5132');
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
}

// create function to check option D
function checkAnswerD() {
    if (optD == false) {
        console.log("That's incorrect..");
        wrongColor('#AE2012');
        wrongColorD('#AE2021');
        findAnswer();
        submitInner.innerText="That is incorrect..\nThe correct answer is " +  "'" + correctOpt + "'..";
    }
    else {
        console.log("That's correct!");
        correctColor('#0F5132');
        submitInner.innerText="'" + correctOpt + "' is correct!\n Press this button to move to the next question!";
        // enable the submit button
        submit.disabled = false;
    }
    // disable ALL the option buttons
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
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
    if (optA == true) {
        ifWrongA('#0F5132');
    }
    else if (optB == true) {
        ifWrongB('#0F5132');
    }
    else if (optC == true) {
        ifWrongC('#0F5132');
    }
    else if (optD == true) {
        ifWrongD('#0F5132');
    }
}