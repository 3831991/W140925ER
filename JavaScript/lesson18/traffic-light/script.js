const redElem = document.querySelector(".red");
const yellowElem = document.querySelector(".yellow");
const greenElem = document.querySelector(".green");
let isIntervalActive = false;
let intervalId;
let timeoutId;

function trafficError(btn) {
    const elem = document.querySelector('.yellow2');

    if (isIntervalActive) {
        clearInterval(intervalId);
        elem.classList.remove("active");

        if (btn) {
            btn.innerText = "הפעל";
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        }
    } else {
        intervalId = setInterval(function() {
            elem.classList.toggle("active");
        }, 500);
        
        if (btn) {
            btn.innerText = "עצור";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
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
    timeoutId = setTimeout(redAndYellow, 1000 * 5);
}

function redAndYellow() {
    lightOff();
    redElem.classList.add('active');
    yellowElem.classList.add('active');
    timeoutId = setTimeout(green, 1000 * 1.5);
}

function green() {
    lightOff();
    greenElem.classList.add('active');
    timeoutId = setTimeout(yellow, 1000 * 4);
}

function yellow() {
    lightOff();
    yellowElem.classList.add('active');
    timeoutId = setTimeout(red, 1000);
}

function stopTraffic() {
    clearTimeout(timeoutId);
}

trafficError();
red();