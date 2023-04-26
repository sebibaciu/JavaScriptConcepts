let timer = document.querySelector('#timer');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');
let seconds = 0;
let timerId;

startButton.addEventListener('click', function() {
  timerId = setInterval(function() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, 1000);
});

stopButton.addEventListener('click', function() {
  clearInterval(timerId);
});

resetButton.addEventListener('click', function() {
  clearInterval(timerId);
  seconds = 0;
  timer.textContent = '00:00:00';
});
