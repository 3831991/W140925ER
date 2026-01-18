const redElem = document.querySelector(".red");
const yellowElem = document.querySelector(".yellow");
const greenElem = document.querySelector(".green");
let isIntervalActive = false;
let intervalId;

function trafficError() {
    const elem = document.querySelector('.yellow2');

    if (isIntervalActive) {
        clearInterval(intervalId);
        elem.classList.remove("active");
    } else {
        intervalId = setInterval(function() {
            elem.classList.toggle("active");
        }, 500);
    }
    
    isIntervalActive = !isIntervalActive;
}

function lightOff() {
    redElem.classList.remove('active');
    yellowElem.classList.remove('active');
    greenElem.classList.remove('active');
}

function red() {
    lightOff();
    redElem.classList.add('active');
    setTimeout(redAndYellow, 1000 * 5);
}

function redAndYellow() {
    lightOff();
    redElem.classList.add('active');
    yellowElem.classList.add('active');
    setTimeout(green, 1000 * 1.5);
}

function green() {
    lightOff();
    greenElem.classList.add('active');
    setTimeout(yellow, 1000 * 4);
}

function yellow() {
    lightOff();
    yellowElem.classList.add('active');
    setTimeout(red, 1000);
}

trafficError();
red();