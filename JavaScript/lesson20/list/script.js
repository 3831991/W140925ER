const studentNames = students.slice(0, 20).map(x => `${x.firstName} ${x.lastName}`).join(', ');

document.querySelector(".task1 p").innerHTML = studentNames;

const studentNamesLast20 = students.slice(-20).map((x, i) => `${i + 1}. ${x.firstName} ${x.lastName}`).join('<br>');

document.querySelector(".task2 p").innerHTML = studentNamesLast20;

// יצרנו עותק של המערך
// עשינו מיון בסדר אקראי
// לקחנו 20 סטודנטים
// הפכנו למערך של שמות מלאים
// חיברנו בפסיקים
const randomStudents = [...students]
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 20)
                            .map(x => `${x.firstName} ${x.lastName}`)
                            .join(', ');

document.querySelector(".task3 p").innerHTML = randomStudents;

// 30 סטודנטים
// היות והשתמשנו באינדקסים, אם הערך חיובי (אי זוגי) - צבענו אותו
const colorStudents = students.slice(0, 30).map((x, i) => {
    if (i % 2) {
        return `<mark>${x.firstName}</mark>`;
    } else {
        return `${x.firstName}`;
    }
}).join('<br>');

document.querySelector(".task4 p").innerHTML = colorStudents;

// הפעלת אירוע על תיבת החיפוש
// מסננים את כל האובייקטים ששם הפרטי עונה על מילת החיפוש
// מציגים את אורך המערך המסונן (כמות התוצאות)
document.querySelector(".task5 input").addEventListener("input", ev => {
    const search = ev.target.value;

    if (search) {
        const len = students.filter(x => x.firstName.includes(search)).length;
        document.querySelector(".task5 p").innerHTML = len;
    } else {
        document.querySelector(".task5 p").innerHTML = '';
    }
});

students.sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
});