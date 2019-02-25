/*  ====================Business logic=====================*/
// function scoreDisplay(){
//  var numOfQuestions= 4;
//var scorePerQuestion =5

 $(document).ready(function(){
   $('butto#buttn').click(function() {
     $("form.details").slideUp();

$("#result").text('');
 var score = 0;
 var question1=parseInt($('input[name="q1"]:checked').val());
 var question2=parseInt($('input[name="q2"]:checked').val());
 var question3=parseInt($('input[name="q3"]:checked').val());
 var question4=parseInt($('input[name="q4"]:checked').val());

 var result = question1 + question2 + question3 + question4;

 document.getElementById('display').innerHTML = result;
 $("#result").text(scoreDisplay(score));
 event.preventDefault();

// var display = document.getElementById('display');
// display.innerHTML= "<h2>Your scores are " + score + " points out of " + numOfQuestions + "</h2>"

// alert("Your scores are " + score + " out of " + numOfQuestions);

  });
});
