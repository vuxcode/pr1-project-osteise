// create variables and add the buttons
var question = document.getElementById("qOneInner");
var optA = document.getElementById("optAInner");
var optB = document.getElementById("optBInner");
var optC = document.getElementById("optCInner");
var optD = document.getElementById("optDInner");

var submitButton = document.getElementById("submitInner");
submitButton.innerText="Press the option you think is correct\n to submit your answer!";


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
} 

// disable submit button
//submit.disabled = true;
// control wich question will be asked
questOne();

// create function to check option A
function checkAnswerA() {
    if (optA == false) {
        console.log("That's incorrect..");
        wrongColor('#AE2021');
        submit.innerText="That is incorrect..";
    }
    else {
    console.log("That's correct!");
    correctColor('#7ABB6C');
    submit.innerText="That is correct!";
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
        console.log("That's incorrect..");
        wrongColor('#AE2021');
        submit.innerText="That is incorrect.."
    }
    else {
    console.log("That's correct!");
    correctColor('#7ABB6C');
    submit.innerText="That is correct!";
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
        submit.innerText="That is incorrect.."
    }
    else {
        console.log("That's correct!");
        correctColor('#7ABB6C');
        submit.innerText="That is correct!";
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
        submit.innerText="That is incorrect..";
    }
    else {
        console.log("That's correct!");
        correctColor('#7ABB6C');
        submit.innerText="That is correct!";
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

// create a function to change the submit button to green if the answer is correct
function correctColor(newColorGreen) {
    // find the element that controls the button style
    var changeCorrectColor = document.getElementById("submit");
    // update the background color of the button
    changeCorrectColor.style.background = newColorGreen;
}
