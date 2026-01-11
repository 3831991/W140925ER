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

function task3() {
    const length = +document.querySelector(".length").value;
    const max = +document.querySelector(".max").value;
    const ul = document.querySelector(".output3");
    ul.innerHTML = '';
    
    for (let i = 0; i < length; i++) {
        const li = document.createElement("li");
        li.innerText = random(1, max);
        ul.appendChild(li);
    }
}

// function task3() {
//     const length = +document.querySelector(".length").value;
//     const max = +document.querySelector(".max").value;
//     const arr = [];

//     for (let i = 0; i < length; i++) {
//         arr.push(`<li>${random(1, max)}</li>`);
//     }

//     document.querySelector(".output3").innerHTML = arr.join("");
// }

const chars = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","ך","ם","ן","ף","ץ"];
