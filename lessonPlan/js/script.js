const timeDisplay = document.getElementById("date");
const time2 = "12:07:58".split(":");

function timeDiff(earlyTime, lateTime) {
  hour = earlyTime[0] - lateTime[0]
  minute = earlyTime[1] - lateTime[1]
  second = earlyTime[2] - lateTime[2]

  if (second < 0) {
    minute -= 1;
    second += 60;
  }
  if (minute < 0) {
    hour -= 1;
    minute += 60;
  }
  // if (hour < 0) {
  //   hour = hour + 24 + 1;
  //   minute = 60 - minute - 1
  //   second = 60 - second
  // }

  // console.log(hour, minute, second)
  return (`${hour}:${minute}:${second}`)
}

function updateDateTime() {
  const currentDate = new Date();
  
  let timeArray = [
    String(currentDate.getHours()),
    String(currentDate.getMinutes()),
    String(currentDate.getSeconds()),
  ];
  
  timeArray = timeArray.map(digits => (digits.length === 1 ? '0' + digits : digits))
  
  let currentTime = timeArray.join(":")
  // timeDisplay.textContent = currentTime;
  timeDisplay.textContent = timeDiff(timeArray, time2);
}

updateDateTime();
setInterval(updateDateTime, 1000);




