const logo = document.querySelector('.logo');
const mainpage = document.querySelector('.scrolesection');


function showSection() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    let hash = window.location.hash || "#homepage"; 

    document.querySelector(hash).style.display = "block";
}

window.addEventListener('hashchange',showSection)
window.addEventListener('load',showSection)
