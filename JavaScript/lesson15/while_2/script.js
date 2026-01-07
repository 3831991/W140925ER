const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

function sum() {
    let i = 0;
    let res = 0;

    while (i < grades.length) {
        res += grades[i];
        i++;
    }

    document.querySelector("#output1").innerHTML = res;
}