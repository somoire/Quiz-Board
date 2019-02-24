/*  ====================Business logic=====================*/

$(document).ready(function() {

  $("form#fwaweru").submit(function(event){
  var q1 = $("input:radio[name=Hypertext Markup Language]:checked").val();
  var q2 = $("input:radio[name=J.S]:checked").val();
  var q3 = $("input:radio[name=Power point]:checked").val();
  var q4 = $("input:radio[name=Cascading Style Sheet]:checked").val();

  var youScore = parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4);
  $("#youScore").text("HI THERE! HERE'S YOU'RE SCORE: " +youScore + "%");

      //==== user Interface ====//
    })
  })
