const search = document.querySelector("input[type=search]");

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

function showStudents(word) {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    for (const s of students) {
        if (!word || s.includes(word)) {
            const li = document.createElement("li");
            li.innerHTML = s.replaceAll(word, `<mark>${word}</mark>`);
            ul.appendChild(li);
        }
    }
}

showStudents();

search.addEventListener("input", function(ev) {
    const word = ev.target.value;
    showStudents(word);
});