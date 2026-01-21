const studentNames = students.slice(0, 20).map(x => `${x.firstName} ${x.lastName}`).join(', ');

document.querySelector(".task1 p").innerHTML = studentNames;