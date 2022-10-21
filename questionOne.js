
var question = document.getElementById("qOneInner");
var options = document.getElementById("optOneInner");


function questOne() {
    var example = ("What song is not made by Michael Jackson?");

    var opt1 = ["Thriller", "Billie Jean", "Born to Run", "Beat It"];
    var answer = [3];
    question.innerText=example;
}

questOne();