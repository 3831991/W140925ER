const grades = [93, 43, 57, 43, 98, 98, 78, 59, 49, 90, 55, 49, 44, 62, 80, 56, 91, 90, 99, 65];

function sum() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.querySelector("#output1").innerText = res;
}

function avg() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.querySelector("#output2").innerText = (res / grades.length).toFixed(2);
}

// function showSpecialAsterisks() {
//     document.querySelector("#output3").innerHTML = "";

//     for (let y = 1; y <= 10; y++) {
//         for (let x = 0; x < y; x++) {
//             document.querySelector("#output3").innerHTML += "*";
//         }

//         document.querySelector("#output3").innerHTML += "<br>";
//     }
// }

function showSpecialAsterisks() {
    const arr = [];

    for (let y = 1; y <= 10; y++) {
        let asterisks = '';

        for (let x = 0; x < y; x++) {
            asterisks += "*";
        }

        arr.push(asterisks);
    }

    document.querySelector("#output3").innerHTML = arr.join('<br>');
}

function showSpecialAsterisks10() {
    const arr = [];

    for (let y = 1; y <= 10; y++) {
        let asterisks = '';

        for (let x = 0; x < 10; x++) {
            asterisks += "*";
        }

        arr.push(asterisks);
    }

    document.querySelector("#output4").innerHTML = arr.join('<br>');
}

function colors() {
    
}