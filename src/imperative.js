export default function logClockTime() {
  ///return getClockTime();
  console.clear();
  console.log(`${getClockTime()}`);
}

function getClockTime() {
  var date = new Date();
  /// serialize the clock time
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  };
  /// convert time to civilian time
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }

  if (time.minumtes < 10) {
    time.minutes = "0" + time.minutes;
  }

  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}
