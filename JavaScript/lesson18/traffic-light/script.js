const redElem = document.querySelector(".red");
const yellowElem = document.querySelector(".yellow");
const greenElem = document.querySelector(".green");
let isIntervalActive = false;
let isTimeoutActive = false;
let intervalId;
let timeoutId;

function trafficError(btn) {
    const elem = document.querySelector('.yellow2');

    // עצירת הרמזור
    if (isIntervalActive) {
        // עוצרים את האינטרבל
        clearInterval(intervalId);
        // מבטלים את הצהוב
        elem.classList.remove("active");

        // משנים את הכותרת שעל הלחצן
        if (btn) {
            btn.innerText = "הפעל";
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        }
    }
    // הפעלת הרמזור
    else {
        // מפעילים את האינטרבל
        intervalId = setInterval(function() {
            // כל חצי שנייה הוא מוסיף/מורדי את הקלאס
            elem.classList.toggle("active");
        }, 500);
        
        // משנים את הכותרת שעל הלחצן
        if (btn) {
            btn.innerText = "עצור";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    }

    // משנים את המשתנה הבוליאני - true/false
    isIntervalActive = !isIntervalActive;
}

// מכבה את הרמזור
function lightOff() {
    redElem.classList.remove('active');
    yellowElem.classList.remove('active');
    greenElem.classList.remove('active');
}

// הפעלת הצבע האדום
function red() {
    lightOff();
    redElem.classList.add('active');
    // קריאה מתוזמנת לצהוב והאדום
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

function traffic(btn) {
    if (isTimeoutActive) {
        clearTimeout(timeoutId);
        lightOff();

        // משנים את הכותרת שעל הלחצן
        if (btn) {
            btn.innerText = "הפעל";
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        }
    } else {
        red();

        // משנים את הכותרת שעל הלחצן
        if (btn) {
            btn.innerText = "עצור";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    }

    isTimeoutActive = !isTimeoutActive;
}

trafficError();
traffic();