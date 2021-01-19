var morning = 6;
var noon = 12;
var evening = 17;
var night = 20;

var showCurrentTime = function() {

    var clock = document.getElementById('clock');
    var currentTime = newDate();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

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
var clockTime = hours + " : " + minutes + " : " +  seconds + "  " + meridian;

clock.innerText = clockTime;
}