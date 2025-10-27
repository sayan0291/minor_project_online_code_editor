import { codeeditor } from "../utils/codeeditor.js";
import { runCode } from "../utils/runcode.js";
import { formatErrorMessage } from "../utils/formaterrormessage.js";

const dropdownitems = document.querySelector('.dropdown-item');
const languagename = document.querySelector('#languagename');
const runbutton = document.querySelector('.fa-play')
let languagetext;

const languages = ["html-css-js","python","java","php","ruby","c","c++","kotlin","javascript"];

function loadSavedLanguage(){
    const saved = localStorage.getItem('selectlanguage');
    if(saved){
        languagetext = saved;
        languagename.textContent = saved;
        codeeditor(languagetext);
    }
}

function dropdown(){
    dropdownitems.addEventListener('click',function (e){
        const id = e.target.id;
        if(languages.includes(id)){
            languagetext = id;
            localStorage.setItem('selectlanguage',id);
            languagename.textContent = id;
            codeeditor(id);
            document.querySelector(".codespace").style.display = "block";
            document.querySelector(".codespace").scrollIntoView({ behavior: "smooth" });
        }
    });
}

runbutton.addEventListener('click',async function inputoutput(){
    const savedcode = localStorage.getItem('textcode');
    const saved = localStorage.getItem('selectlanguage');

    const result = await runCode(savedcode,saved)

    const output = document.querySelector("#output")
    
    if(result.stdout){
        output.innerHTML =(atob(result.stdout).replace(/\n/g,"<br>"));
    }
    if(result.stderr || result.compile_output){
        output.innerHTML = formatErrorMessage(atob(result.stderr || result.compile_output)).replace(/\n/g,"<br>");
    }
})

window.addEventListener('DOMContentLoaded', function(){
    loadSavedLanguage();
    dropdown();
});
