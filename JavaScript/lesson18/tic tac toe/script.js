const board = document.querySelector(".board");
let isX = true;

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.addEventListener("click", function(ev) {
        if (ev.target.innerText) {
            return;
        }

        if (isX) {
            ev.target.innerText = "X";
        } else {
            ev.target.innerText = "O";
        }

        isX = !isX;
    });

    board.appendChild(div);
}