var correct = document.getElementById("success");
var incorrect = document.getElementById("fail");

var score = 0;
var percent = (score/4) * 100;

function show_question1() {
    question1.className = "visible";
    question2.className = "hide";
    question3.className = "hide";
    question4.className = "hide";
    correct.className = "hide";
    incorrect.className = "hide";
  } 
  
function show_question2(){
    question1.className = "hide";
    question2.className = "visible";
    question3.className = "hide";
    question4.className = "hide";
    correct.className = "hide";
    incorrect.className = "hide";
  }
function show_question3(){
    question1.className = "hide";
    question2.className = "hide";
    question3.className = "visible";
    question4.className = "hide";
    correct.className = "hide";
    incorrect.className = "hide";
  } 
function show_question4(){
    question1.className = "hide";
    question2.className = "hide";
    question3.className = "hide";
    question4.className = "visible";
    correct.className = "hide";
    incorrect.className = "hide";
  }

  function check_answer1() {
    var input_question1 = document.getElementById("question1_answer").value;
  
    if (input_question1 == 2) {
      score++;
      correct.className = "visible";
    } else  
      incorrect.className = "visible";
    }
    
  
  function check_answer2() {
    var input_question2 = document.getElementById("question2_answer").value;
  
    if (input_question2 == 4) {
      score++;
      console.log(score)
      correct.className = "visible";
    } else 
      incorrect.className = "visible";
    }
  
  
  function check_answer3() {
    var input_question3 = document.getElementById("question3_answer").value;
  
    if (input_question3 == 1) {
      score++
      correct.className = "visible";
    } else 
      incorrect.className = "visible";
    }

  
  function check_answer4() {
    var input_question4 = document.getElementById("question4_answer").value;
  
    if (input_question4 == 3) {
      score++
      correct.className = "visible";
    } else
      incorrect.className = "visible";
    }
    
    function reset_message(){
      correct.className = "hide";
      incorrect.className = "hide";
    }

  
  show_question1();
  
  document.getElementById("question1_submit").onclick = check_answer1;
  document.getElementById("question2_submit").onclick = check_answer2;
  document.getElementById("question3_submit").onclick = check_answer3;
  document.getElementById("question4_submit").onclick = check_answer4;
  
  document.getElementById("next_button1").onclick = show_question2;  
  document.getElementById("next_button2").onclick = show_question3;  
  document.getElementById("next_button3").onclick = show_question4;      

  document.getElementById("total_result").innerText = ("You answered " + score + " of 5 questions correctly, good for " + percent + "%!");