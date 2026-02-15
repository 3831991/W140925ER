const height = 50;
const width = 40;
const length = 10;
let direction = 'left';
let isGameOver;
let interval;
let bait;

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
    // ניקוי כל הקלאסים - לפני שמוסיפים קלאסים מעודכנים
    divs.forEach(div => div.classList.remove('snake', 'head', 'up', 'right', 'down', 'left', 'topLeftRadius', 'topRightRadius', 'bottomRightRadius', 'bottomLeftRadius'));

    snake.forEach((num, i) => {
        divs[num].classList.add('snake');

        // זה לצורך עיגול קצוות של כל הנחש
        // נושא קצת מורכב (תשאלו את ה-Gemini)
        const prev = snake[i + 1];
        const next = snake[i - 1];

        if (prev && next) {
            if ((next == num - 1 && prev == num + width) || (next == num + width && prev == num - 1)) {
                divs[num].classList.add('topLeftRadius');
            } else if ((next == num + width && prev == num + 1) || (prev == num + width && next == num + 1)) {
                divs[num].classList.add('topRightRadius');
            } else if ((next == num + 1 && prev == num - width) || (prev == num + 1 && next == num - width)) {
                divs[num].classList.add('bottomRightRadius');
            } else if ((next == num - 1 && prev == num - width) || (prev == num - 1 && next == num - width)) {
                divs[num].classList.add('bottomLeftRadius');
            }
        }
    });

    // מגדירים קלאס לראש הנחש
    const head = snake[0];
    divs[head].classList.add('head', direction);
}

function move(dir) {
    if (isGameOver) {
        return;
    }

    let head = snake[0];

    if (dir == 'left') {
        if (direction == 'right') {
            return;
        }

        head++;

        // אם הוא הגיע לקצה השמאלי, הראש החדש למעשה נמצא בצד ימין
        if (head % width == 0) {
            gameOver();
            return;
        }
    } else if (dir == 'right') {
        if (direction == 'left') {
            return;
        }

        head--;

        if ((head + 1) % width == 0) {
            gameOver();
            return;
        }
    } else if (dir == 'up') {
        if (direction == 'down') {
            return;
        }

        head -= width;

        if (head < 0) {
            gameOver();
            return;
        }
    } else if (dir == 'down') {
        if (direction == 'up') {
            return;
        }

        head += width;

        if (head > width * height) {
            gameOver();
            return;
        }
    }

    if (snake.includes(head)) {
        gameOver();
        return;
    }

    direction = dir;
    snake.unshift(head);
    snake.pop();
    drawSnake();

    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}

function gameOver() {
    isGameOver = true;
    clearInterval(interval);
    alert("איזה באסה 😥");
}

function setBait() {
    do {
        bait = Math.floor(Math.random() * width * height);
    } while (snake.includes(bait))

    divs.forEach(div => div.classList.remove('bait'));
    divs[bait].classList.add('bait');
}

window.addEventListener("keydown", ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'Escape': clearInterval(interval); break;
    }
});