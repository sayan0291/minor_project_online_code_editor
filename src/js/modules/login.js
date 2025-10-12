const loginbutton = document.querySelector('#log-in');
const logoutbutton = document.querySelector('#log-out');
const logout = document.querySelector('#toogle-log-out');
const login = document.querySelector('#toogle-log-in');

window.addEventListener('DOMContentLoaded',function (){
    let lastview = this.localStorage.getItem('lastview')

    if(lastview){
        logout.classList.remove('active');
        login.classList.add('active');
    }

})

logoutbutton.addEventListener('click', function(){
    logout.classList.remove('active');
    login.classList.add('active');

    localStorage.setItem('lastview','manageuser')
})

loginbutton.addEventListener('click',function(){
    window.location.replace('login.html');
})