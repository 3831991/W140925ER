const students = [
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
    document.querySelector("#output1").innerText = students.join(", ");
}

function separateLineFn() {
    document.querySelector("#output2").innerHTML = students.join("<br>");
    // document.querySelector("#output2").innerText = '<p>' + students.join("</p><p>") + '</p>';
}

function showStudentsInList() {
    document.querySelector("#output3").innerHTML = '<li>' + students.join("</li><li>") + '</li>';
}

function showStudentByIndex(elem) {
    const i = +elem.value;

    document.querySelector("#output4").innerText = students[i] || "לא נמצא";
}

function showIndexByStudent(elem) {
    const name = elem.value;

    document.querySelector("#output5").innerText = students.indexOf(name);
}

function randomStudent() {
    const i = Math.floor(Math.random() * students.length);

    document.querySelector("#output6").innerText = students[i];
}