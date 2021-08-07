window.addEventListener('DOMContentLoaded', () => {

    //Declearing counter variables
    let hours = 00
    let minutes = 00
    let seconds = 00
    let miliseconds = 00

    let hoursContent = document.getElementById('hrs')
    let minuteContent = document.getElementById('min')
    let secondsContent = document.getElementById('secs')
    let milsecondsContent = document.getElementById('milsec')

    let startBtn = document.getElementById('btn-start')
    let pauseBtn = document.getElementById('btn-pause')
    let resetBtn = document.getElementById('btn-reset')

    let Interval

    // Declearing Button Functions

    //Start Countdown Function
    startBtn.onclick = () => {
        console.log("Start");
        clearInterval(Interval)
        Interval = setInterval(countdown, 15)
    }


    //Pause Countdown Function
    pauseBtn.onclick = () => {
        console.log("Paused");
        clearInterval(Interval)

    }
    //Reset Countdown Function
    resetBtn.onclick = () => {
        console.log("Reset");
        clearInterval(Interval)
        hours = '0' + 0
        minutes = '0' + 0
        seconds = '0' + 0
        miliseconds = '0' + 0
        hoursContent.innerHTML = hours
        minuteContent.innerHTML = minutes
        secondsContent.innerHTML = seconds
        milsecondsContent.innerHTML = miliseconds
    }


    // Countdown Function
    function countdown() {

        //Miliseconds 
        miliseconds++
        if (miliseconds <= 9) {
            milsecondsContent.innerHTML = '0' + miliseconds
        }
        if (miliseconds > 9) {
            milsecondsContent.innerHTML = miliseconds
        }
        if (miliseconds > 99) {
            seconds++
            secondsContent.innerHTML = '0' + seconds
            miliseconds = 0
            milsecondsContent.innerHTML = '0' + 0
        }

        //Seconds
        if (seconds <= 9) {
            secondsContent.innerHTML = '0' + seconds
        }
        if (seconds > 9) {
            secondsContent.innerHTML = seconds
        }
        if (seconds > 60) {
            minutes++
            minuteContent.innerHTML = '0' + minutes
            seconds = 0
            secondsContent.innerHTML = '0' + 0
        }
        //Minutes
        if (minutes <= 9) {
            minuteContent.innerHTML = '0' + minutes
        }
        if (minutes > 9) {
            minuteContent.innerHTML = minutes
        }
        if (minutes > 60) {
            hour++
            hoursContent.innerHTML = '0' + hour
            minutes = 0
            minuteContent.innerHTML = '0' + 0
        }
    }



})