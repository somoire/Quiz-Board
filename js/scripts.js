/*  ====================Business logic=====================*/
// function scoreDisplay(){
//  var numOfQuestions= 4;
//var scorePerQuestion =5


// $(document).ready(function(){
//   $("button#").click (function (event)
//
// $("#result").text('');
//  var score = 0;
//  var question1=parseInt($('input[name="q1"]:checked').val());
//  var question2=parseInt($('input[name="q2"]:checked').val());
//  var question3=parseInt($('input[name="q3"]:checked').val());
//  var question4=parseInt($('input[name="q4"]:checked').val());
//
//
//
//  var total = question1 + question2 + question3 + question4;
//
//  document.getElementById('display').innerHTML = result;
//  $("#result").text(percentage(score));
//  event.preventDefault();
//
//


 $(document).ready(function(){
   $("button#button1").click(function score(event){
     var marks = 0;
     $("input:radio[name=q1]:checked,input:radio[name=q2]:checked,input:radio[name=q3]:checked,input:radio[name=q4]:checked").each(function() {
         final = marks += parseInt($(this).val());
       total = (final/20)*100;
     });
    //document.getElementById("html-results").innerHTML = " your percentage score was " + total + "%";
    alert("your percentage score was " + total + "%");
  });
 });
 $("#story").show();
// var display = document.getElementById('display');
// display.innerHTML= "<h2>Your scores are " + score + " points out of " + numOfQuestions + "</h2>"

// alert("Your scores are " + score + " out of " + numOfQuestions);

//   });
// });
// $(document).ready(function() {
//   $('button#buttn').submit(function() {
//     $("form.details").slideUp();
//   })
// })
