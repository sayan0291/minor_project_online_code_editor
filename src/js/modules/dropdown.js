const dropdownitems = document.querySelector('.dropdown-item');
const coderunspace = document.querySelector('#codespaceid');
const languagename = document.querySelector('#languagename');
let languagetext;

const language = ["html-css-js","python","java","php","ruby","c","c++","Kotlin","javascript"];


function loadsavedlanguage(){
    const savedlanguage = localStorage.getItem('selectlanguage');
    if(savedlanguage){
        languagetext = savedlanguage;
        languagename.textContent = savedlanguage;
    }
}

function dropdown(){
    dropdownitems.addEventListener('click',function (e){
        language.forEach( (item) => {
            if(item === e.target.id){
                setlanguage(item);
                languagename.textContent = languagetext;
            }
        })
    })
}

function setlanguage(lang){
    localStorage.setItem('selectlanguage',lang);
    languagetext = lang;
}

function showlanguage(){
    const codespace = document.querySelector(".codespace");
    codespace.style.display = "none";

    let hash = window.location.hash; 

    document.querySelector(hash).style.display = "block";

    languagename.textContent = languagetext;
}

window.addEventListener('DOMContentLoaded', function(){
    loadsavedlanguage();
    dropdown();
    showlanguage();
});


window.addEventListener('hashchange',showlanguage)
window.addEventListener('load',showlanguage)