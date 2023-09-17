console.log('hohoho')
const start = document.querySelector('[data-start]')
const stop = document.querySelector('[data-stop]');
stop.disabled = true;
const body = document.querySelector('body');

//генерування кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId

//слухач на старт
start.addEventListener('click', onClick);
function onClick(evt) {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);

    if (timerId) {
        start.disabled = true;
        stop.disabled = false;
    }
};

stop.addEventListener('click', handler);
function handler(evt) {
    clearInterval(timerId);
    start.disabled = false;
    stop.disabled = true;
}

flatpickr(dateTable, options);