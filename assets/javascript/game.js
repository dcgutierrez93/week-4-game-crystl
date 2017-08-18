// Variables for the game.
var wins = 0;
var losses = 0;
var totalScore = 0;

var number = Math.floor((Math.random() * 100) + 19);

var diamond = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var ruby = Math.floor((Math.random() * 12) + 1);
var saphire = Math.floor((Math.random() * 12) + 1);

var updateTotalScore = function () {
  $('#totalScore').empty();
  $('#totalScore').append(totalScore);

  $('#wins').empty();
  $('#wins').append(wins);

  $('#losses').empty();
  $('#losses').append(losses);
}

var restart = function () {
  totalScore = 0;
  number = Math.floor((Math.random() * 100) + 19);

  $('#totalScore').empty();
  $('#totalScore').append(totalScore);

  var diamond = Math.floor((Math.random() * 12) + 1);
  var emerald = Math.floor((Math.random() * 12) + 1);
  var ruby = Math.floor((Math.random() * 12) + 1);
  var saphire = Math.floor((Math.random() * 12) + 1);

  updateTotalScore();
}

var game = function () {
  if (totalScore == number) {
    wins++;
    alert("You Win!");
    restart();
  } else if (totalScore > number) {
    losses++;
    alert("You Lost!");
    restart();
  } else {
    updateTotalScore();
  }
}

$('#totalScore').append(totalScore);
$('#number').append(number);

$(document).ready(function () {
  $('#diamond').click(function () {
    totalScore = totalScore + diamond;
    game();
  })

  $('#emerald').click(function () {
    totalScore = totalScore + emerald;
    game();
  })

  $('#ruby').click(function () {
    totalScore = totalScore + ruby;
    game();
  })

  $('#saphire').click(function () {
    totalScore = totalScore + saphire;
    game();
  })
});
