const grades = [93, 43, 57, 43, 98, 98, 78, 59, 49, 90, 55, 49, 44, 62, 80, 56, 91, 90, 99, 65];

function sum() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    document.querySelector("#output1").innerHTML = res;
}