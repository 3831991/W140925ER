let students = [
    "שרוני ישי",
    "אבו פרחה עובידה",
    "אור אלון",
    "אלוני ניצן",
    "ביסמוט אהרון",
    "בן-אמו רוני",
    "בנסיאנו איילה",
    "גולן רוני",
    "גורביץ אלכסנדר",
    "גרבר פבל",
    "דומב יארוסלב",
    "דנדיס יחיא",
    "זייגמן בוריס",
    "חיימוב ארז",
    "כהן שמעון",
    "מטר פרנסיס",
    "סינקביץ` ולידיסלב",
    "פנאדקה מוחמד",
    "ציפרפל מקסים",
    "קאסם לין",
    "רבינוביץ׳ מקסים",
    "רג`ואן ליאור",
    "רוזנבלום איתמר",
    "רזניק מקסים",
    "שולי אחלאם",
    "שלמה אינגבר דניאל",
];

function showStudents() {
    const ul = document.querySelector('.frame>ul');
    ul.innerHTML = "";

    for (const s of students) {
        const li = document.createElement('li');
        li.innerText = s;
        ul.appendChild(li);
    }
}

showStudents();

function random() {
    const arr = [];
    const len = students.length;

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * students.length);

        arr.push(students[rand]);
        students.splice(rand, 1);
    }

    students = arr;
    showStudents();
}

function raffle() {
    const rand = Math.floor(Math.random() * students.length);

    alert(students[rand]);
}

function sortASC() {
    students.sort();
    showStudents();
}

function sortDESC() {
    students.sort();
    students.reverse();
    showStudents();
}