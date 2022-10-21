// create variables
var question = document.getElementById("qOneInner");
var optA = document.getElementById("optAInner");
var optB = document.getElementById("optBInner");
var optC = document.getElementById("optCInner");
var optD = document.getElementById("optDInner");

// create a function
function questOne() {
    // create the question output
    var q1 = ("What song is not made by Michael Jackson?");
    question.innerText=q1;
    // create the option outpus
    var opt1 = ["Thriller", "Billie Jean", "Born to Run", "Beat It"];
    optA.innerText=opt1[0];
    optB.innerText=opt1[1];
    optC.innerText=opt1[2];
    optD.innerText=opt1[3];
    
    var correctAnswer = opt1[2];
    
}

questOne();