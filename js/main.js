// put the end date
let countDown = new Date(
  `Dec 31 ${new Date().getFullYear()} 23:59:59`
).getTime();
let counter = setInterval(() => {
  // put date now
  let dateNow = new Date().getTime();
  let defDate = countDown - dateNow;
  if (defDate < 0) {
    clearInterval(counter);
  } else {
    let days = Math.floor(defDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (defDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((defDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((defDate % (1000 * 60)) / 1000);
    document.querySelector(
      ".events .container .box .day-counter .days p:nth-of-type(1)"
    ).innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(
      ".events .container .box .day-counter .hours p:nth-of-type(1)"
    ).innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(
      ".events .container .box .day-counter .minutes p:nth-of-type(1)"
    ).innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(
      ".events .container .box .day-counter .seconds p:nth-of-type(1)"
    ).innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  }
}, 1000);
// animation on scroll
let skillsSection = document.getElementById("our-skills");
let spans = document.querySelectorAll(
  ".our-skills .content .skills .skill span"
);
// increase number
let statsSection = document.getElementById("stats");
let nums = document.querySelectorAll(".stats .container .content article h3");
let startFlag = false;
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  // animation on scroll to skills
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // increase number for stats section for once
  if (window.scrollY >= statsSection.offsetTop) {
    if (!startFlag) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    startFlag = true;
  }
};
