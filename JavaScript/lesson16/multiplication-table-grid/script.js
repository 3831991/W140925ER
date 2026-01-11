function createTable() {
    const table = document.querySelector("table");

    for (let y = 1; y <= 10; y++) {
        const tr = document.createElement("tr");

        for (let x = 1; x <= 10; x++) {
            const td = document.createElement("td");
            td.innerText = x * y;
            td.setAttribute("operation", `${y} x ${x} = ${y * x}`)
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

createTable();