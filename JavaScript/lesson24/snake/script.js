const height = 50;
const width = 40;
const length = 10;

const snake = new Array(length).fill().map((x, i) => i);
snake.reverse();

const divs = [];
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

// Create board
for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div');
    board.appendChild(div);
    divs.push(div);
}

drawSnake();

function drawSnake() {
    snake.forEach(num => {
        divs[num].classList.add('snake');
    });
}