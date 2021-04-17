const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear()
  let holidate = new Date("28 mar " + (currentYear));
  if (Math.floor((holidate - currentTime) / 1000) < 0) {
    holidate = new Date("28 mar " + (currentYear + 1));
    console.log("prob");
  }
  const totalsec = Math.floor((holidate - currentTime) / 1000);
  const days = Math.floor(totalsec / 3600 / 24);
  const hours = Math.floor(totalsec / 3600) % 24;
  const min = Math.floor(totalsec / 60) % 60;
  const sec = Math.floor(totalsec) % 60;
  console.log(currentTime);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(min);
  secondsEl.innerHTML = formatTime(sec);
}
countdown();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
