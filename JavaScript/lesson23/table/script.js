const tbody = document.querySelector("tbody");

const setTickets = tickets => {
    tickets.forEach((ticket, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${moment(ticket.createTime).format("DD/MM/YY")}</td>
            <td>${ticket.fullName}</td>
            <td>${ticket.phone}</td>
            <td>${ticket.email}</td>
            <td>${ticket.message}</td>
        `;

        tbody.appendChild(tr);
    });
}

fetch("https://api.shipap.co.il/contact")
.then(res => res.json())
.then(setTickets);