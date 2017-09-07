var isrunning = false;
var timerID;
var speed = 3000;
var isslow = true;
var duration = 500;

$(document).ready( function () {

  $("#exploit").on("change", function () {
      if (isrunning) {
        clearInterval(timerID);
        $(".myslider").prop("disabled", false)
        isrunning = false;

        $("#startstop").text("Start")
        $("#reset").prop("disabled", false)
      }
  mode = "exploit"
  console.log(mode)
  reset();
  })

  $("#avm").on("change", function () {
      if (isrunning) {
        clearInterval(timerID);
        $(".myslider").prop("disabled", false)
        isrunning = false;
        $("#startstop").text("Start")
        $("#reset").prop("disabled", false)
      }

      mode = "avm"
      console.log(mode)
      reset();
  })


  /*$("#exploit") {
      mode = "exploit"
      $(this).prop(disabled, true)
      $("#avm").prop(disabled, false)
      $(this).toggle()
    }*/


  $("#startstop").on("click", function () {
    if (isrunning == false) {
      isrunning = true;
      $(this).text("Stop")
      $("#reset").prop("disabled", true)

      rewiringProbability = $("#rewiring").val();
      deltaT = $("#deltat").val();
      speedIndicator = $("#speedslider").val();

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

        if ( mode == "avm") {speed = 20; }
        else { speed = 5 };
        duration = 0;
      }

      $(".myslider").prop("disabled", true)

      updateDynamics()
      timerID = setInterval(updateDynamics, speed);
    }
    else {
      clearInterval(timerID);
      isrunning = false;
      $(this).text("Start")
      $("#reset").prop("disabled", false)
      $(".myslider").prop("disabled", false)
    }
  });

  $("#reset").on("click", function() {
    reset();
  });

});