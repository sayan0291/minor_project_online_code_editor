import { scrolesection } from "./scrole-section.js";
import { animation } from "./animation.js";
import { logincontrol } from "./login.js";
const isLoggedIn = localStorage.getItem('isLoggedIn');


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
    }else if(window.location.hash === "#user" && isLoggedIn !== 'true'){
        alert("Needs Login First");
        window.location.replace('#homepage');
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
    scrolesection();
});


window.addEventListener('DOMContentLoaded',function (){
    showSection();
    animation();
    logincontrol();
    dropdown();
})