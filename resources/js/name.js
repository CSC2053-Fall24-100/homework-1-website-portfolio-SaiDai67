const nameButton = document.getElementById('add-name');
const heading = document.getElementById('heading-id');

nameButton.addEventListener('click', function () {    
    const name = prompt("Please enter your name:");
    heading.textContent = "Welcome, " + name + "!";
});
