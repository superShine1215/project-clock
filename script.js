const html = document.querySelector("html");
const toggleBtn = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
// const dayEl = document.querySelector(".day");

toggleBtn.addEventListener("click", (e) => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleBtn.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    toggleBtn.innerHTML = "Light Mode";
  }
});

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const months = time.getMonth();
  const days = time.getDay();
  const date = time.getDate();
  const hoursMod = hours >= 13 ? hours % 12 : hours;

  const ampm = hours >= 13 ? "PM" : "AM";

  const secAng = 6 * seconds;
  const minAng = 6 * (minutes + seconds / 60);
  const hourAng = 30 * (hours + minutes / 60);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourAng}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minAng}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secAng}deg)`;

  //   hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     hours,
  //     0,
  //     12,
  //     0,
  //     360
  //   )}deg)`;
  //   minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     minutes,
  //     0,
  //     60,
  //     0,
  //     360
  //   )}deg)`;
  //   secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
  //     seconds,
  //     0,
  //     60,
  //     0,
  //     360
  //   )}deg)`;

  timeEl.innerHTML = `${hoursMod < 10 ? "0" + `${hoursMod}` : `${hoursMod}`}:${
    minutes < 10 ? "0" + `${minutes}` : `${minutes}`
  }:${seconds < 10 ? "0" + `${seconds}` : `${seconds}`} ${ampm}`;

  dateEl.innerHTML = `${day[days]}, ${month[months]} <span class="day">${date}</span>`;
}

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

setTime();
setInterval(setTime, 1000);
