const logo = document.querySelector('.logo');
const mainpage = document.querySelector('.scrolesection');
const body = document.querySelector('body')

let user = JSON.parse(localStorage.getItem('userarray')) || [];



function showSection() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");

    let hash = window.location.hash || "#homepage";

    let checkhash = document.querySelector(hash);
    if(!checkhash){
        alert(`The Section is not available ${checkhash}`);
        hash = "#homepage";
        checkhash = document.querySelector(hash);

        window.history.replaceState(null,null,"#homepage");
    }
    else{
        checkhash.style.display = "block";
    }
}

window.addEventListener('hashchange',function (e){
    if(e.newURL !== e.oldURL){
        showSection();
    }
})

window.addEventListener('load', function() {
    showSection();
});
