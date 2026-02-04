const ol = document.querySelector("ol");

const setTickets = tickets => {
    tickets.forEach((ticket, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <b>${ticket.fullName}</b> - 
            <span class="msg">${ticket.message}</span> 
            <small>[${moment(ticket.createTime).format("DD/MM")}]</small>
        `;

        ol.appendChild(li);
    });
}

fetch("https://api.shipap.co.il/contact")
.then(res => res.json())
.then(setTickets);