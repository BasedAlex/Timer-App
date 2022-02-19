'use strict';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');
const hiddenEl = document.getElementsByClassName('.hidden');
const hid = document.getElementById('hid');

const eldenRing = '25 Feb 2022 00:00:00 GMT+0300';

function countdown() {
  const eldenRingDate = new Date(eldenRing);
  const currentDate = new Date();
  // console.log(eldenRingDate - currentDate);

  const totalSeconds = (eldenRingDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  let timer = eldenRingDate - currentDate;
  console.log(timer / 1000);

  const eldenRingout = function () {
    if (timer <= 0) {
      daysEl.innerHTML =
        hoursEl.innerHTML =
        minutesEl.innerHTML =
        secondsEl.innerHTML =
          '00';
      hid.classList.remove('hidden');
    }
  };

  eldenRingout();
}

function formatTime(time) {
  return time < 10 && time >= 0 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

// const startDate = new Date();
// const startDateFormat = startDate.toLocaleString();
// console.log(startDate.toLocaleString()); hiddenEl.classlist.remove('hidden')
// const endDate = '2022-02-25';
// const endDateFormat = new Date(endDate);
// console.log(endDateFormat.toLocaleString());

// '2022-02-15';

// const diffInMs = new const diffDays = endDateFormat - startDateFormat;
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// const diffinHours = diffInMs % (1000 * 60 * 60);
// const diffinMinutes = diffInMs / (1000 * 60);
// const diffinSeconds = Math.floor(diffInMs / 1000);

// console.log(diffInDays);
// // console.log(diffDays);
// console.log(diffinHours);
// console.log(diffinMinutes);
// console.log(diffinSeconds);Date(endDate) - new Date(startDate);
