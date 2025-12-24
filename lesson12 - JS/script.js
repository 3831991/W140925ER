let counter = 1;
let counter2 = 1;

function task1() {
    document.getElementById("counter").innerHTML = ++counter;
}

function task2() {
    document.getElementById("counter2").innerHTML = ++counter2;
    document.getElementById("counter2").style.fontSize = (12 + counter2) + 'px';
}

function task3() {
    const answer = document.getElementById("answer").value;

    if (answer == "צהוב") {
        document.getElementById("output").innerHTML = "נכון 🍌";
    } else {
        document.getElementById("output").innerHTML = "לא נכון";
    }
}

function task4() {
    const city = document.getElementById("city").value;

    if (city == "קרית ארבע") {
        document.getElementById("output2").innerHTML = "✔️ נכון";
    } else {
        document.getElementById("output2").innerHTML = "❌ לא נכון";
    }
}