var isrunning = false;
var timerID;
var speed = 3000;
var isslow = true;
var duration = 500;

$(document).ready( function () {

  $("#startstop").on("click", function () {
    if (isrunning == false) {
      isrunning = true;
      $(this).text("Stop")
      $("#reset").prop("disabled", true)
      rewiringProbability = $("#rewiring").val();

      speedIndicator = $("#speed").val();
      if (speedIndicator == 1) {
        isslow = true;
        speed = 3000;
        duration = 500;
      }
      if (speedIndicator == 2) {
        isslow = true;
        speed = 300;
        duration = 50;
      }
      if (speedIndicator == 3) {
        isslow = false;
        speed = 10;
        duration = 0;
      }

      $("#rewiring").prop("disabled", true)
      $("#speed").prop("disabled", true)

      updateDynamics()
      timerID = setInterval(updateDynamics, speed);
    }
    else {
      clearInterval(timerID);
      isrunning = false;
      $(this).text("Start")
      $("#reset").prop("disabled", false)
      $("#rewiring").prop("disabled", false)
      $("#speed").prop("disabled", false)
    }
  });

  $("#reset").on("click", function() {
    reset();
  });

});
