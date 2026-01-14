const task1 = document.querySelector(".task1");

task1.querySelector("input").addEventListener("keyup", function(ev) {
    const num = +task1.querySelector("input").value;
    const output = task1.querySelector("p");

    if (ev.key == 'Enter') {
        if (isPrime(num)) {
            output.innerHTML = "ראשוני";
            output.style.color = "blue";
        } else {
            output.innerHTML = "פריק";
            output.style.color = "purple";
        }
    } else {
        output.innerHTML = "";
    }
});

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}