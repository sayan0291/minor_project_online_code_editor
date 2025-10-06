const loginbutton = document.querySelector('#log-in')
const logoutbutton = document.querySelector('#log-out')
const logout = document.querySelector('#toogle-log-out')
const login = document.querySelector('#toogle-log-in')
const dropdownitems = document.querySelector('.dropdown-item')
const languagedetails = document.querySelector('#maincontainerid')
const coderunspace = document.querySelector('#codespaceid')
const vanish = document.querySelector('.scrolesection')
const logo = document.querySelector('.logo')

document.addEventListener('DOMContentLoaded',function(e){
    const lastview = localStorage.getItem('lastview')
    const lastview1 = localStorage.getItem('lastview1')
    
    if(lastview){
        if(lastview === 'codespace'){
            vanish.style.display = "none"
            coderunspace.style.display = "block"
        }
        else if(lastview === 'homepage'){
            coderunspace.style.display = "none";
            vanish.style.display = "block";
        }
    }
    
    if(lastview1 === 'logout'){
        logout.classList.remove('active');
        login.classList.add('active')
    }

})

logoutbutton.addEventListener('click', function(){
    logout.classList.remove('active');
    login.classList.add('active')

    localStorage.setItem('lastview1','logout')
})

loginbutton.addEventListener('click',function(){
    window.location.replace('login.html')
})

logo.addEventListener('click',function(){
    coderunspace.style.display = "none";
    vanish.style.display = "block";

    localStorage.setItem('lastview','homepage')
})

dropdownitems.addEventListener('click',function (e){
    vanish.style.display = "none";
    coderunspace.style.display = "block";
    
    localStorage.setItem('lastview','codespace')
})
