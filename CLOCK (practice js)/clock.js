const morning = 6;
const noon = 12;
const evening = 17;
const night = 20;

const showCurrentTime = function() {

    const clock = document.getElementById("clock");
    const currentTime = newDate();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const meridian = "AM";

        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = noon - 12;
        }
        if (minutes > 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
const clockTime = hours + " : " + minutes + " : " seconds + "  " + meridian;

clock.innerText = clockTime;
}
