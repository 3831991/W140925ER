const ul = document.querySelector("ul");
const tasks = [
    { subject: 'לקנות חלב', checked: true },
    { subject: 'להאכיל את התרנגולות', checked: true },
    { subject: 'לנקות את הבית', checked: false },
];

/**
 * יצירת אלמנט ב-HTML
 * @param {*} obj { subject: string; checked: boolean }
 */
function createTask(obj) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const remove = document.createElement("span");

    if (obj.checked) {
        li.classList.add("checked");
        input.checked = true;
    } else {
        div.contentEditable = true;
    }

    input.type = "checkbox";
    input.addEventListener("change", ev => {
        obj.checked = ev.target.checked;
        li.classList.toggle("checked");
    });

    div.innerHTML = obj.subject;
    div.addEventListener("input", ev => {
        obj.subject = ev.target.innerText;
    });

    remove.innerText = 'X';
    remove.className = "remove";

    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(remove);

    ul.appendChild(li);
}

function newTask() {
    const obj = {
        subject: '',
        checked: false,
    };

    tasks.push(obj);
    createTask(obj);
}

tasks.forEach(createTask);