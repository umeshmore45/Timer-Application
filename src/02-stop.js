let seconds = 0;
let minutes = 0;
let hours = 0;

//here we areassigning a default values
let interval = null;
let status = "stop";

//--------------
let secondsString = 0;
let minutesString = 0;
let hoursString = 0;

const stopWatch = () => {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // displaying added 0
  if (seconds < 10) {
    secondsString = `0${seconds}`;
  } else {
    secondsString = seconds;
  }

  if (minutes < 10) {
    minutesString = `0${minutes}`;
  } else {
    minutesString = minutes;
  }
  if (hours < 10) {
    hoursString = `0${hours}`;
  } else {
    hoursString = hours;
  }

  document.getElementById(
    "watch-display"
  ).innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
};

const startStop = () => {
  if (status == "stop") {
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startstop").innerHTML = "Stop";
    status = "start";
    playSound();
  } else {
    window.clearInterval(interval);
    document.getElementById("startstop").innerHTML = "Start";
    status = "stop";
    playSound();
  }
};

const rest = () => {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("startstop").innerHTML = "Start";
  document.getElementById("watch-display").innerHTML = `00:00:00`;
  status = "stop";
  playSound();
};
