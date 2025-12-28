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
    
}