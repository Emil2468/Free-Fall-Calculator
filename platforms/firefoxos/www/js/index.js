var buttonPress = 0;

var endSpeedButton = document.getElementById("endSpeedButton");
var heightButton = document.getElementById("heightButton");
var timeButton = document.getElementById("timeButton");
var infoButton = document.getElementById("infoButton");

var writeHere = document.getElementById("writeHere");
var value = document.getElementById("value");
var newValue;
var enter = document.getElementById("enter");
var enhed = document.getElementById("enhed");
var info = document.getElementById("info");

var endSpeedRes = document.getElementById("endSpeedRes");
var heightRes = document.getElementById("heightRes");
var timeRes = document.getElementById("timeRes");

endSpeedButton.onclick = function () { endSpeedButtonClick() };
heightButton.onclick = function () { heightButtonClick() };
timeButton.onclick = function () { timeButtonClick() };
infoButton.onclick = function () { infoButtonClick() };
enter.onclick = function () { enterClick() };
window.addEventListener("keypress", keyPress, true);



function endSpeedButtonClick () {
    writeHere.innerHTML = "Enter the end speed of the object here";
    info.innerHTML = "";
    value.value = "";
    enhed.hidden = false;
    value.hidden = false;
    enter.hidden = false;
    buttonPress -= buttonPress;
    buttonPress += 1;

    heightRes.innerHTML = "";
    timeRes.innerHTML = "";
    endSpeedRes.innerHTML = "";
   
}

function heightButtonClick() {
    writeHere.innerHTML = "Enter the height that the object has falen here, in meters";
    info.innerHTML = "";
    value.value = "";
    enhed.hidden = true;
    value.hidden = false;
    enter.hidden = false;
    buttonPress -= buttonPress;
    buttonPress += 2;

    heightRes.innerHTML = "";
    timeRes.innerHTML = "";
    endSpeedRes.innerHTML = "";

}

function timeButtonClick() {
    writeHere.innerHTML = "Enter the amount of time the object has falen, in seconds";
    info.innerHTML = "";
    value.value = "";
    enhed.hidden = true;
    value.hidden = false;
    enter.hidden = false;
    buttonPress -= buttonPress;
    buttonPress += 3;

    heightRes.innerHTML = "";
    timeRes.innerHTML = "";
    endSpeedRes.innerHTML = "";


}

function enterClick() {
    if (buttonPress == 1) {
        if (enhed.value == "km/h") {
            newValue = (value.value / 3.6).toFixed(4);
            info.innerHTML = value.value + " km/h is equal to " + newValue + " m/s"
        }
        else {
            newValue = value.value;
            info.innerHTML = "";
        }
        heightRes.innerHTML = "The object has falen (" + newValue + " / 9.82 m/s^2)^2 * 0.5 * 9.82 = " + (Math.pow((newValue / 9.82), 2) * 0.5 * 9.82).toFixed(4) + " meters";
        timeRes.innerHTML = "The object has falen in (" + newValue + " / 9.82) = " + (newValue / 9.82).toFixed(4) + " seconds";
    }
    if (buttonPress == 2) {
        endSpeedRes.innerHTML = "The object's end speed is sqrt(" + value.value + " / (0.5 * 9.82)) * 9.82 = " + (Math.sqrt(value.value / (0.5 * 9.82)) * 9.82).toFixed(4) + " m/s (" + ((Math.sqrt(value.value / (0.5 * 9.82)) * 9.82) * 3.6).toFixed(4) + " km/h)";
        timeRes.innerHTML = "The object has falen in sqrt(2 * " + value.value + " / 9.82) = " + (Math.sqrt(2 * value.value / 9.82)).toFixed(4) + " seconds";
    }
    if (buttonPress == 3) {
        endSpeedRes.innerHTML = "The object's end speed is " + value.value + " * 9.82 = " + (value.value * 9.82).toFixed(4) + " m/s (" + ((value.value * 9.82)*3.6).toFixed(4) + " km/h)";
        heightRes.innerHTML = "The object has falen 0.5 * 9.82 * " + value.value + "^2 = " + (0.5 * 9.82 * Math.pow(value.value, 2)).toFixed(4) + " meters";
    }
}

function infoButtonClick() {
    info.innerHTML = "";
    enhed.hidden = true;
    heightRes.innerHTML = "";
    timeRes.innerHTML = "";
    endSpeedRes.innerHTML = "";
    value.hidden = true;
    enter.hidden = true;

    writeHere.innerHTML = "This is a tool you can use to calculate how far, fast or for how long an object has falen, based on these three factors." + 
        "This tool does not take air resistance or terminal velocity  into acount, the gravitational pull has been set to 9.82 m/s^2. All you have to do is to pick the " +
        "factor you know from the ones above, and write the number in the apearing text field.";

}

function keyPress(e) {
    if (e.keyCode == 13) {
        enterClick();
    }
}
