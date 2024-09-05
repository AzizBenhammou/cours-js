document.addEventListener('DOMContentLoaded', function() {
   
let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTimer() {
    const currentTime = Date.now();
    const timeDifference = currentTime - startTime + elapsedTime;
    const minutes = Math.floor(timeDifference / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    timerElement.textContent = 
        ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
}

startButton.addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now();
        timer = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener('click', function() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timerElement.textContent = '00:00';
});

});