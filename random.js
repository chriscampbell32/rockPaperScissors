$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];
  var round = "";
  var userScore = 0;
  var cpuScore  = 0;
  var draws = o;

  //if-else outcomes. 
  if (userChoice === cpuChoice) {
    $("#gameMsg").html(tieMsg);
    draws++;
    $("#draws").html(draws);
    return tieMsg;
  } else if (userChoice === "rock") {
    if (cpuChoice === "scissors") {
      $("#gameMsg").html(rockWinner);
      userScore++;
      $(".userScore").html(userScore);
        return rockWinner;
      } else {
        $("#gameMsg").html(paperWinner);
        cpuScore++;
        $(".cpuScore").html(cpuScore);
        return paperWinner;   
      }
    } else if (userChoice === "paper") {
      if (cpuChoice === "rock") {
        $("#gameMsg").html(paperWinner);
        userScore++;
        $(".userScore").html(userScore);
        return paperWinner; 
      } else {
        $("#gameMsg").html(scissorWinner);
        cpuScore++;
        $(".cpuScore").html(cpuScore);
        return scissorWinner;
      }
    } else {
      if (userChoice === "scissors") {
        if (cpuChoice === "paper") {
          $("#gameMsg").html(scissorWinner);
          userScore++;
          $(".userScore").html(userScore);
          return scissorWinner;
        } else {
          $("#gameMsg").html(rockWinner);
          cpuScore++;
          $(".cpuScore").html(cpuScore);
          return rockWinner;
        }
      }
    }
  }
 
}); 
  

