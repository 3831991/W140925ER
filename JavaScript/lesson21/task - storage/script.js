const ul = document.querySelector("ul");
const tasks = [];

const tasksSaved = localStorage.getItem("tasks");

if (tasksSaved) {
    tasks.push(...JSON.parse(tasksSaved));
}

/**
 * יצירת אלמנט ב-HTML
 * @param {*} obj { id: number; subject: string; checked: boolean }
 */
function createTask(obj) {
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
        saveData();
    });

    div.innerHTML = obj.subject;
    // מעקב אחר שינויים בתוכן המשימה
    div.addEventListener("input", ev => {
        obj.subject = ev.target.innerText;
        saveData();
    });

    div.addEventListener("keydown", ev => {
        const { key } = ev;
        const i = tasks.findIndex(x => x.id == obj.id);

        if (key == 'ArrowDown') {
            // אם לא נמצאים במשימה האחרונה - רד למשימה הבאה
            if (i != tasks.length - 1) {
                ul.children[i + 1].querySelector('div').focus();
            }
        } else if (key == 'ArrowUp') {
            // אם לא נמצאים במשימה הראשונה - עלה למשימה הקודמת
            if (i) {
                ul.children[i - 1].querySelector('div').focus();
            }
        } else if (key == 'Enter') {
            // אם לחצנו על אנטר - זה מבטל את פעולת ברירת המחדל של האירוע (-שורה חדשה)
            ev.preventDefault();

            // אם זה המשימה האחרונה - תוסיף
            if (i == tasks.length - 1) {
                newTask();
            }
            // אחרת - רד למשימה הבאה
            else {
                ul.children[i + 1].querySelector('div').focus();
            }
        } else if (key == 'Backspace') {
            // אם אין טקסט במשימה - תמחק אותה
            if (div.innerText.trim() == '') {
                removeTask(obj, li);

                // אם זו לא המשימה הראשונה - תעלה למשימה הקודמת
                if (i > 0) {
                    ul.children[i - 1].querySelector('div').focus();
                }
            }
        }
    });

    // לחצן מחיקה
    remove.innerText = 'X';
    remove.className = "remove";
    remove.addEventListener("click", () => {
        removeTask(obj, li);
    });

    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(remove);

    ul.appendChild(li);
    // לאחר שנוספה המשימה - תשים שם את הסמן
    div.focus();
}

function newTask() {
    const ids = tasks.map(x => x.id);

    const obj = {
        id: Math.max(...ids) + 1,
        subject: '',
        checked: false,
    };

    tasks.push(obj);
    createTask(obj);
    saveData();
}

function removeTask(obj, li) {
    const i = tasks.findIndex(x => x.id == obj.id);
    tasks.splice(i, 1);
    li.remove();
    saveData();
}

function saveData() {
    const tasksSaved = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksSaved);
}

// מפעיל את הפונקציה של הוספת משימה על כל אובייקט במערך
tasks.forEach(createTask);

if (!tasks.length) {
    for (let i = 0; i < 3; i++) {
        newTask();
    }
}