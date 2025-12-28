function task1() {
    const task = document.querySelector("#task1");
    const n = +task.querySelector("input").value;
    const output = task.querySelector("span");

    if (n % 2) {
        output.innerText = "אי זוגי";
        output.className = "odd";
    } else {
        output.innerText = "זוגי";
        output.className = "even";
    }
}

function task2() {
    const task = document.querySelector("#task2");
    const input = task.querySelector("input");
    const output = task.querySelector("span");
    output.innerText = "";
    let n = +input.value;

    if (n < 0 || n > 100) {
        output.innerText = "לא להגזים!!!";
        input.style.backgroundColor = "gray";
    } else if (n <= 40) {
        input.style.backgroundColor = "red";
    } else if (n <= 60) {
        input.style.backgroundColor = "orange";
    } else if (n <= 80) {
        input.style.backgroundColor = "blue";
    } else if (n <= 100) {
        input.style.backgroundColor = "green";
    }
}