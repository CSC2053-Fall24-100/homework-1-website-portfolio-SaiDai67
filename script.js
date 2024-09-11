const button = document.getElementById('toggle-schedule');
const container = document.getElementById('schedule-container');
button.addEventListener('click', function () {    
    if (container.style.display == "none") {
        container.style.display = "block";
        button.textContent = "Hide Schedule";
    } else {
        container.style.display = "none";
        button.textContent = "Show Schedule";
    }
});

