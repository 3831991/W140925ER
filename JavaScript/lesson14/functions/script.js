// פונקציה שמקבלת 3 מספרים ומחזירה סיכום שלהם
function sum(n1, n2, n3) {
    return n1 + n2 + n3;
}

// פונקציה המקבלת מספר ומחזירה את המספר כולל מע"מ
function calcVat(num) {
    return num * 1.18;
}

// פונקציה המקבלת שם פרטי ומשפחה, מחברת ביניהם ומחזירה
function fullName(fisrtName, lastName) {
    return `${fisrtName} ${lastName}`;
}

// פונקציה המקבלת 4 מספרים ומחזירה את הממוצע שלהם
function avg(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

function inputChange(elem) {
    elem.style.fontSize = elem.value + 'px';
    elem.style.backgroundColor = `hsl(${elem.value}deg 67.41% 39.01%)`;
    elem.style.color = 'white';
}