const grades = [93, 43, 57, 43, 98, 98, 78, 59, 49, 90, 55, 49, 44, 62, 80, 56, 91, 90, 99, 65];

function sum() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.querySelector("#output1").innerHTML = res;
}

function avg() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.querySelector("#output2").innerHTML = res / grades.length;
}

function showSpecialAsterisks10() {
    const arr = [];
    let asterisks = '';

    for (let x = 0; x < 10; x++) {
        asterisks += '*';
    }

    for (let y = 0; y < 10; y++) {
        arr.push(asterisks);
    }

    document.querySelector("#output3").innerHTML = arr.join('<br>');
}

function showSpecialAsterisks() {
    const arr = [];

    for (let y = 0; y < 10; y++) {
        let asterisks = '';

        for (let x = 0; x < y + 1; x++) {
            asterisks += '*';
        }

        arr.push(asterisks);
    }

    document.querySelector("#output4").innerHTML = arr.join('<br>');
}

// function showSpecialAsterisks() {
//     const arr = [];

//     for (let i = 0; i < 10; i++) {
//         arr.push('*'.repeat(i + 1));
//     }

//     document.querySelector("#output4").innerHTML = arr.join('<br>');
// }

function colors() {
    const output = document.querySelector("#output5");
    output.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const div = document.createElement('div');
        div.className = 'rectangle';
        div.style.backgroundColor = `hsl(${i * 50}deg 51.87% 47.25%)`;
        output.appendChild(div);
    }
}