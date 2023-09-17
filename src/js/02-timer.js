import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTable = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]')
startBtn.disabled = true;

// ячейки таймера
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        //якщо дата в минулому
        if (selectedDates[0].getTime() <= Date.now()) {
            alert("Please choose a date in the future");
            startBtn.disabled = true;
            return;
        }
        //якщо дата в майбутньому
        startBtn.disabled = false;
    }
};

flatpickr(dateTable, options);

//натискання на старт
startBtn.addEventListener('click', onClick);

function onClick(evt) {
    
    // таймер почався
    const timerId = setInterval(() => {
        const currentTime = Date.now()
        const selectedDates = new Date(dateTable.value).getTime();// дата з інпута
        const difference = selectedDates - currentTime;//час таймера
        const { days, hours, minutes, seconds } = convertMs(difference);

        function addLeadingZero(value) {
            return value.toString().padStart(2,'0')
        }

        daysField.textContent = addLeadingZero(days);
        hoursField.textContent = addLeadingZero(hours);
        minutesField.textContent = addLeadingZero(minutes);
        secondsField.textContent = addLeadingZero(seconds);

        //коли час вийшов
        if (difference <= 1) {
            clearInterval(timerId);
            daysField.textContent = '00';
            hoursField.textContent = '00';
            minutesField.textContent = '00';
            secondsField.textContent = '00';
            startBtn.disabled = true;
        }
    }, 1000)

};

// рахує час для таймера
function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

