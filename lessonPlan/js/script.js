const timeDisplay = document.getElementById("date");
const time2 = "20:40:00".split(":");

function timeDiff(time1, time2) {
  hour = time1[0] - time2[0]
  minute = time1[1] - time2[1]
  second = time1[2] - time2[2]

  if (second < 0) {
    minute -= 1;
    second += 60;
  }
  if (minute < 0) {
    hour -= 1;
    minute += 60;
  }
  // if (hour < 0) {
  //   hour *= -1;
  // }

  // console.log(hour, minute, second)
  return (`${hour}:${minute}:${second}`)
}

function updateDateTime() {
  const currentDate = new Date();
  // let hour = String(currentDate.getHours());
  // let minute = String(currentDate.getMinutes());
  // let second = String(currentDate.getSeconds());

  
  let timeArray = [
    String(currentDate.getHours()),
    String(currentDate.getMinutes()),
    String(currentDate.getSeconds()),
  ];
  
  timeArray = timeArray.map(digits => (digits.length === 1 ? '0' + digits : digits))
  
  // timeDiff(timeArray, time2)
  let currentTime = timeArray.join(":")
  // timeDisplay.textContent = currentTime;
  timeDisplay.textContent = timeDiff(timeArray, time2);
}

updateDateTime();
setInterval(updateDateTime, 1000);




