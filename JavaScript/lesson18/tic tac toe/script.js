const board = document.querySelector(".board");
let isX = true;
let gameOver = false;

const options = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");

    div.addEventListener("click", ev => {
        if (gameOver || ev.target.innerText) {
            return;
        }

        if (isX) {
            ev.target.innerText = "X";
        } else {
            ev.target.innerText = "O";
        }

        isX = !isX;
        check();
    });

    board.appendChild(div);
}

function winner(player, arr) {
    const divs = board.querySelectorAll("div");
    arr.forEach(n => divs[n].classList.add('bg'));
    gameOver = true;
}

function check() {
    const divs = board.querySelectorAll("div");

    for (const arr of options) {
        if (arr.every(n => divs[n].innerText == 'X')) {
            winner("X", arr);
            break;
        } else if (arr.every(n => divs[n].innerText == 'O')) {
            winner("O", arr);
            break;
        }
    }
}