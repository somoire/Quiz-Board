/*  ====================Business logic=====================*/
function scoreDisplay(){
  var score= 0
  var numOfQuestions= 4;

 var question1=parseInt('input[name="q1"]:checked').value;
 var question2=parseInt('input[name="q2"]:checked').value;
 var question3=parseInt('input[name="q3"]:checked').value;
 var question4=parseInt('input[name="q4"]:checked').value;


 var output = document.getElementById('display').innerHTML;

 for(var i = 1; i <= numOfQuestions; i++){
   if(('question'+ 1) == '') {
    alert("answer all questions" + 1);
  }

for(var i = 1; i <= numOfQuestions; i++){
  if (('question' + 1) == "Pellentesque cursus justo") {
   score++;
  }
 }
}

 var display = document.getElementById('display');
 display.innerHTML= "<h2>Your scores are " + score + " points out of " + numOfQuestions + "</h2>"

 alert("Your scores are " + score + " out of " + numOfQuestions);

}
