function random(min, max) {
    // טווח המספרים שיש להגריל (כולל המינימום והמקסימום)
    const range = max - min + 1;
    const rand = Math.random() * range;

    return Math.floor(rand) + min;
}

function task1() {
    document.querySelector(".output1").innerHTML = random(1, 50);
}

function task2() {
    const num = +document.querySelector(".num1").value;
    document.querySelector(".output2").innerHTML = random(1, num);
}
