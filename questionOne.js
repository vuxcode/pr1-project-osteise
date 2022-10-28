/* trying to prevent the user from refreshing
const onConfirmRefresh = function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave page?";
}
*/
//window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });

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

// create a random function generator to choose a random question
function randomQuestion() {
    // create the random variable
    var random = Math.floor(Math.random() * 10);
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
    // use the function to turn the button green
    ifWrongA('#0F5132');
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
    // use the function to turn the button green
    ifWrongB('#0F5132');
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
        ifWrongC('#0F5132');
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
        ifWrongD('#0F5132');
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
