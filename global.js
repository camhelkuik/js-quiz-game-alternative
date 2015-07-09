function showq1(){
  document.getElementById("question2").className = 'hide';
  document.getElementById("question3").className = 'hide';
  document.getElementById("question1").className = 'visible';
}

function showq2(){
  document.getElementById("question1").className = 'hide';
  document.getElementById("question3").className = 'hide';
  document.getElementById("question2").className = 'visible';
}

function showq3(){
  document.getElementById("question1").className = 'hide';
  document.getElementById("question2").className = 'hide';
  document.getElementById("question3").className = 'visible';
}

var score = 0;

showq1();

function given_answer(){
  return document.getElementById("answer1").value;
}

function is_correct_answer(answer1_text){
  if (answer1_text == 1){
    return true;
  } else {
   return false;
  }
}

function update_question_result(correct){
  if (correct){
    score++;
    return document.getElementById("question_result").innerText = "Success!";
  } else {
   return document.getElementById("question_result").innerText = "Wrong!";
  }
}

function process_answer_submission(){
  var user_answer = given_answer();
   update_question_result(is_correct_answer(user_answer));
}

document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = showq2;


function given_answer(){
  return document.getElementById("answer2").value;
}

function is_correct_answer(answer2_text){
  if (answer2_text == 2){
    return true;
  } else {
   return false;
  }
}

function update_question_result(correct){
  if (correct){
    score++;
    return document.getElementById("question_result").innerText = "Success!";
  } else {
   return document.getElementById("question_result").innerText = "Wrong!";
  }
}

function process_answer_submission(){
  var user_answer = given_answer();
   update_question_result(is_correct_answer(user_answer));
}

document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = showq3;

 // var percent= (score/5) * 100;
//  document.getElementById("total_result").innerText = ("You answered " + score + " of 5 questions correctly, good for " + percent + "%!");
