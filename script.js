let stopwatchInterval;
let timerInterval;
let stopwatchRunning = false;

function startStop() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        document.getElementById("startStopBtn").textContent = "Start";
        stopwatchRunning = false;
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        document.getElementById("startStopBtn").textContent = "Stop";
        stopwatchRunning = true;
    }
}

function updateStopwatch() {
    let stopwatch = document.getElementById("stopwatch");
    let time = stopwatch.textContent.split(":");
    let seconds = parseInt(time[2]);
    let minutes = parseInt(time[1]);
    let hours = parseInt(time[0]);

    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    stopwatch.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function reset() {
    clearInterval(stopwatchInterval);
    document.getElementById("stopwatch").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
    stopwatchRunning = false;
}

function startTimer() {
    let timerInput = document.getElementById("timerInput").value;
    let time = timerInput.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    timerInterval = setInterval(function() {
        if (seconds <= 0 && minutes <= 0 && hours <= 0) {
            clearInterval(timerInterval);
            alert("Timer Complete!");
            return;
        }

        if (seconds <= 0) {
            seconds = 59;
            if (minutes <= 0) {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                }
            } else {
                minutes--;
            }
        } else {
            seconds--;
        }

        document.getElementById("timerInput").value = 
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

