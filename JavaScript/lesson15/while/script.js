function showAsterisks() {
    const asterisks = [];
    let i = 0;

    while (i < 10) {
        asterisks.push("*");
        i++;
    }

    document.querySelector("#output1").innerHTML = asterisks.join("<br>");
}