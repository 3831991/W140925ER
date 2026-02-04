const frame = document.querySelector(".frame");

const setTickets = tickets => {
    tickets.forEach(ticket => {
        const div = document.createElement("div");
        div.className = "ticket";

        div.innerHTML = `
            <header>
                <h2>${ticket.fullName}</h2>
                <span class="date">${moment(ticket.createTime).format("DD/MM/YY")}</span>
            </header>

            <p>${ticket.message}</p>

            <footer>
                ${ticket.phone}<br>${ticket.email}
            </footer>
        `;

        frame.appendChild(div);
    });
}

fetch("https://api.shipap.co.il/contact")
.then(res => res.json())
.then(setTickets);