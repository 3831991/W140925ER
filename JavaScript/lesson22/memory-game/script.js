const fruits = [
    { id: 1, name: 'תפוח', icon: '🍎' },
    { id: 2, name: 'בננה', icon: '🍌' },
    { id: 3, name: 'תפוז', icon: '🍊' },
    { id: 4, name: 'אבטיח', icon: '🍉' },
    { id: 5, name: 'ענבים', icon: '🍇' },
    { id: 8, name: 'תמר', icon: '🌴' },
    { id: 9, name: 'זית', icon: '🫒' },
    { id: 10, name: 'אגס', icon: '🍐' },
    { id: 11, name: 'אפרסק', icon: '🍑' },
    { id: 12, name: 'אננס', icon: '🍍' },
    { id: 13, name: 'מנגו', icon: '🥭' },
    { id: 14, name: 'דובדבן', icon: '🍒' },
    { id: 15, name: 'תות', icon: '🍓' },
    { id: 16, name: 'לימון', icon: '🍋' },
    { id: 17, name: 'קיווי', icon: '🥝' },
    { id: 18, name: 'מלון', icon: '🍈' },
];

const board = document.querySelector(".board");
const cards = [];

function newGame() {
    fruits.forEach(f => {
        cards.push({ ...f }, { ...f });
    });

    cards.sort(() => Math.random() - 0.5);

    cards.forEach(c => {
        const divCard = document.createElement("div");
        divCard.className = 'card';
        divCard.innerHTML = `<i>${c.icon}</i>
                             <p>${c.name}</p>`;

        divCard.addEventListener("click", ev => {
            if (c.show) {
                return;
            }

            const shown = cards.filter(x => x.show);

            if (shown.length <= 1) {
                c.show = true;
                ev.target.classList.add('show');
            } else {
                return;
            }

            // const prev = shown[0];
            const [prev] = shown;

            if (shown.length == 1) {

                if (prev.id == c.id) {
                    
                } else {
                    setTimeout(() => {
                        c.show = false;
                        prev.show = false;

                        prev.elem.classList.remove('show');
                        ev.target.classList.remove('show');
                    }, 1000);
                }
            }
        });

        c.elem = divCard;
        board.appendChild(divCard);
    });
}

newGame();

window.addEventListener("mousedown", ev => ev.preventDefault());