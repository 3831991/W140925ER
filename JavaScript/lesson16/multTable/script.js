function createTable() {
    const table = document.querySelector("table");

    for (let y = 0; y < 10; y++) {
        const tr = document.createElement("tr");

        for (let x = 0; x < 10; x++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

createTable();