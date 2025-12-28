function welcome() {
    alert("ברוכים הבאים לאתר שלי!");
}

function welcome2() {
    let un = document.getElementById("username").value;

    alert("ברוך הבא " + un + "!!!");
}

function multi50() {
    let num = document.getElementById("num1").value;

    alert(num * 50);
}

function multi() {
    let n1 = document.getElementById("num2").value;
    let n2 = document.getElementById("num3").value;

    alert(n1 * n2);
}

function plus() {
    let n1 = +document.getElementById("num4").value;
    let n2 = +document.getElementById("num5").value;

    alert(n1 + n2);
}

function changeColor() {
    let bg = document.getElementById("color").value;
    document.body.style.backgroundColor = bg;
}