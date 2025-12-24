let counter = 1;
let counter2 = 1;

function task1() {
    document.getElementById("counter").innerHTML = ++counter;
}

function task2() {
    document.getElementById("counter2").innerHTML = ++counter2;
    document.getElementById("counter2").style.fontSize = (12 + counter2) + 'px';
}