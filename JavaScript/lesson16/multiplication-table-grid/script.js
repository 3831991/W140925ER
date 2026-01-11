const frame = document.querySelector(".frame");

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        const div = document.createElement("div");
        div.innerText = x * y;
        div.setAttribute("operation", `${y} x ${x} = ${y * x}`)
        frame.appendChild(div);
    }
}