async function addTicket(ev) {
    ev.preventDefault();

    const { email, phone, name, message } = ev.target;

    const obj = {
        email: email.value,
        phone: phone.value,
        fullName: name.value,
        message: message.value,
    };

    const res = await fetch(`https://api.shipap.co.il/contact`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(obj),
    });

    const ticket = await res.json();

    document.querySelector(".form-container").remove();

    const p = document.createElement("p");
    p.innerHTML = `${ticket.fullName}, פנייתך נשלחה בהצלחה..`;
    p.className = "alert";
    document.body.appendChild(p);
}