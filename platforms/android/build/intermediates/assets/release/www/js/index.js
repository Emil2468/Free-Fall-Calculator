/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var buttonPress = 0;

var endSpeedButton = document.getElementById("endSpeedButton");
var heightButton = document.getElementById("heightButton");
var timeButton = document.getElementById("timeButton");
var infoButton = document.getElementById("infoButton");

var writeHere = document.getElementById("writeHere");
var value = document.getElementById("value");
var enter = document.getElementById("enter");

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
    writeHere.innerHTML = "Enter the end speed of the object here, in meters per second";
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
        heightRes.innerHTML = "The object has falen (" + value.value + " / 9.82)^2 * 0.5 * 9.82 = " + (Math.pow((value.value / 9.82), 2) * 0.5 * 9.82).toFixed(4) + " meters";
        timeRes.innerHTML = "The object has falen in (" + value.value + " / 9.82) = " + (value.value / 9.82).toFixed(4) + " seconds";
    }
    if (buttonPress == 2) {
        endSpeedRes.innerHTML = "The object's end speed is sqrt(" + value.value + " / (0.5 * 9.82)) * 9.82 = " + (Math.sqrt(value.value / (0.5 * 9.82)) * 9.82).toFixed(4) + " m/s (" + ((Math.sqrt(value.value / (0.5 * 9.82)) * 9.82) * 3.6).toFixed(4) + " km/t)";
        timeRes.innerHTML = "The object has falen in sqrt(2 * " + value.value + " / 9.82) = " + (Math.sqrt(2 * value.value / 9.82)).toFixed(4) + " seconds";
    }
    if (buttonPress == 3) {
        endSpeedRes.innerHTML = "The object's end speed is " + value.value + " * 9.82 = " + (value.value * 9.82).toFixed(4) + " m/s (" + ((value.value * 9.82)*3.6).toFixed(4) + " km/t)";
        heightRes.innerHTML = "The object has falen 0.5 * 9.82 * " + value.value + "^2 = " + (0.5 * 9.82 * Math.pow(value.value, 2)).toFixed(4) + " meters";
    }
}

function infoButtonClick() {
    heightRes.innerHTML = "";
    timeRes.innerHTML = "";
    endSpeedRes.innerHTML = "";
    value.hidden = true;
    enter.hidden = true;

    writeHere.innerHTML = "This is a tool you can use to calculate how far, fast or for how long an object has falen, based on these three factors." + 
        "This tool does not take air resistance into acount or terminal velocity, the gravitational pull has been set to 9.82 m/s^2. All you have to do is to pick the " +
        "factor you know from the ones above, and write the number in the apearing text field.";

}

function keyPress(e) {
    if (e.keyCode == 13) {
        enterClick();
    }
}
