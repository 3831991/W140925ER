function errorStart() {
    const elem = document.querySelector('.yellow2');

    setInterval(function() {
        elem.classList.toggle("active");
    }, 500);
}

errorStart();