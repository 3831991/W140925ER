function showAsterisks() {
    const asterisks = [];
    let i = 0;

    while (i < 10) {
        asterisks.push("*");
        i++;
    }

    document.querySelector("#output1").innerHTML = asterisks.join("<br>");
}

function showNumbers() {
    let i = 1;
    const numbers = [];

    while (i <= 15) {
        numbers.push(i);
        i++;
    }

    document.querySelector("#output2").innerHTML = numbers.join("<br>");
}

function showRange() {
    let i = 10;
    const numbers = [];

    while (i <= 30) {
        numbers.push(i);
        i++;
    }

    document.querySelector("#output3").innerHTML = numbers.join(", ");
}