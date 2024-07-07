let startTime, updatedTime, difference, tInterval, running = false, lapCount = 0;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopBtn.innerHTML = "Pause";
        running = true;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerHTML = "Start";
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    startStopBtn.innerHTML = "Start";
    laps.innerHTML = "";
    lapCount = 0;
    running = false;
}

function lapTime() {
    if (running) {
        lapCount++;
        const lapTime = display.innerHTML;
        const lapElement = document.createElement('li');
        lapElement.innerHTML = `Lap ${lapCount}: ${lapTime}`;
        laps.appendChild(lapElement);
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', lapTime);
