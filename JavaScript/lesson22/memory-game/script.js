const fruits = [
    { id: 1, name: 'תפוח', icon: '🍎' },
    { id: 2, name: 'בננה', icon: '🍌' },
    { id: 3, name: 'תפוז', icon: '🍊' },
    { id: 4, name: 'אבטיח', icon: '🍉' },
    { id: 5, name: 'ענבים', icon: '🍇' },
    { id: 7, name: 'רימון', icon: '🍎' },
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

const cards = [];

function newGame() {
    fruits.forEach(f => {
        cards.push({ ...f }, { ...f })
    });

    console.log(cards);
}

newGame();