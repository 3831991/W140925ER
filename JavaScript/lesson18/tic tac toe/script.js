const board = document.querySelector(".board");

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.addEventListener("click", function(ev) {
        console.log(ev);
    });

    board.appendChild(div);
}