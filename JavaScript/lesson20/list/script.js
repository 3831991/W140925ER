const ul = document.querySelector("ul");
const tasks = [
    { subject: 'לקנות חלב', checked: true },
    { subject: 'להכין קפה', checked: false },
    { subject: 'לתרגל 8 שעות בשבוע', checked: false },
];

/**
 * יצירת אלמנט ב-HTML
 * @param {*} obj { subject: string; checked: boolean }
 */
function createTask(obj, i) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const remove = document.createElement("span");

    // אם המשימה בוצעה, מסמנים אותה בהתאם
    if (obj.checked) {
        li.classList.add("checked");
        input.checked = true;
    }

    // מאפשר לערוך
    div.contentEditable = true;

    input.type = "checkbox";
    // כל שינוי בסטטוס המשימה
    input.addEventListener("change", ev => {
        obj.checked = ev.target.checked;
        li.classList.toggle("checked");
    });

    div.innerHTML = obj.subject;
    // מעקב אחר שינויים בתוכן המשימה
    div.addEventListener("input", ev => {
        obj.subject = ev.target.innerText;
    });

    div.addEventListener("keydown", ev => {
        const { key } = ev;

        if (key == 'ArrowDown') {
            if (i != tasks.length - 1) {
                ul.children[i + 1].querySelector('div').focus();
            }
        } else if (key == 'ArrowUp') {
            if (i) {
                ul.children[i - 1].querySelector('div').focus();
            }
        } else if (key == 'Enter') {
            // אם נמצאים במשימה האחרונה, שזה יוסיף משימה חדשה
        } else if (key == 'Backspace') {
            // אם אין תוכן במשימה, שימחק אותה
        }
    });

    // לחצן מחיקה
    remove.innerText = 'X';
    remove.className = "remove";
    remove.addEventListener("click", () => {
        tasks.splice(i, 1);
        li.remove();
    });

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
    createTask(obj, tasks.length - 1);
}

// מפעיל את הפונקציה של הוספת משימה על כל אובייקט במערך
tasks.forEach(createTask);