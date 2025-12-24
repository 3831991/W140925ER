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

function task5() {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
}

function task5_b() {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
}

function sum() {
    const n1 = +document.getElementById("num1").value;
    const n2 = +document.getElementById("num2").value;
    
    // const result = n1 + " + " + n2 + " = " + (n1 + n2);
    const result = `${n1} + ${n2} = ${n1 + n2}`;

    document.getElementById("output3").innerHTML = result;
}

function task6() {
    const n1 = +document.getElementById("num3").value;
    const n2 = +document.getElementById("num4").value;
    const op = document.getElementById("op").value;

    if (op == '+') {
        
    } else if (op == '-') {

    }
}