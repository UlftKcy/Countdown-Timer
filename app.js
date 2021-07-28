const endCourse = new Date("12/12/2021");
const dayDigit = document.querySelector(".days-digit");
const hourDigit = document.querySelector(".hours-digit");
const minDigit = document.querySelector(".mins-digit");
const secDigit = document.querySelector(".seconds-digit");

function counterDownTime() {
  const endCourseDate = new Date(endCourse);
  const currentDate = new Date();
  const ms = endCourseDate - currentDate;
  const sec = Math.floor(ms / 1000);
  const seconds = Math.floor(ms / 1000) % 60;
  const mins = Math.floor(sec / 60) % 60;
  const hours = Math.floor(sec / 3600) % 24;
  const days = Math.floor(sec / 3600 / 24);

  dayDigit.innerHTML = days;
  hourDigit.innerHTML = hours;
  minDigit.innerHTML = mins;
  secDigit.innerHTML = seconds;
}
setInterval(counterDownTime, 1000);
counterDownTime();
