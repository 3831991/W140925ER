const studentNames = students.slice(0, 20).map(x => `${x.firstName} ${x.lastName}`).join(', ');

document.querySelector(".task1 p").innerHTML = studentNames;

const studentNamesLast20 = students.slice(-20).map((x, i) => `${i + 1}. ${x.firstName} ${x.lastName}`).join('<br>');

document.querySelector(".task2 p").innerHTML = studentNamesLast20;
