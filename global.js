var correct = document.getElementById("success");
var incorrect = document.getElementById("fail");

var currentPage = 1;

function change_question() {
  if (currentPage == 1) {
    question1.className = "visible";
    question2.className = "hide";
    question3.className = "hide";
    current += 1;
  } else if (currentPage == 2) {
    question1.className = "hide";
    question2.className = "visible";
    question3.className = "hide";
    current += 1;
  } else if (currentPage == 3){
    question1.className = "hide";
    question2.className = "hide";
    question3.className = "visible";
  }

  function check_answer1() {
    var input_question1 = document.getElementById("question1_anwer").value;
  
    if (input_question1 == 2) {
      correct.className = "visible";
    } else {
      incorrect.className = "visible";
    }
  }
  
  function check_answer2() {
    var input_question2 = document.getElementById("question2_anwer").value;
  
    if (input_question2 == 4) {
      correct.className = "visible";
    } else {
      incorrect.className = "visible";
    }
  }
  
  function check_answer3() {
    var input_question3 = document.getElementById("question3_anwer").value;
  
    if (input_question3 == 1) {
      correct.className = "visible";
    } else {
      incorrect.className = "visible";
    }
  }

  document.getElementById("next_button").onclick = change_question;
  
  document.getElementById("question1_submit").onclick = check_answer1;
  document.getElementById("question2_submit").onclick = check_answer2;
  document.getElementById("question3_submit").onclick = check_answer3;

