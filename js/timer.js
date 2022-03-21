const timerBlock = document.querySelector('.timer__time');
const deadline = '2022-04-13';
let interval

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = Date.parse(deadline)
  const timeRemaining = (dateDeadline - date ) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)
  
  const fdays = days + ((days == 1 || days == 21 ) ? ' день ' : 
                (days == 2 || days == 3 || days == 4 || days == 22 || days == 23 || days == 24) ? ' дня ' : ' дней ')
  const fHours = hours < 10 ? '0' + hours : hours
  const fMinutes = minutes < 10 ? '0' + minutes : minutes
  const fSeconds = seconds < 10 ? '0' + seconds : seconds

  timerBlock.textContent = `${fdays}${fHours}:${fMinutes}:${fSeconds}`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};

updateClock();
interval = setInterval(updateClock, 500);
