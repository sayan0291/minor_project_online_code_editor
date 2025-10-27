window.addEventListener('DOMContentLoaded', function(){
    const loginbutton = document.querySelector('#log-in');
    const logoutbutton = document.querySelector('#log-out');
    let logout = document.querySelector('#toogle-log-out');
    let login = document.querySelector('#toogle-log-in');
    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(isLoggedIn === 'true'){
        login.classList.remove('active');
        logout.classList.add('active');
    } else {
        logout.classList.remove('active');
        login.classList.add('active');
    }
    
    logoutbutton.addEventListener('click', function(){
        localStorage.setItem('isLoggedIn', 'false');
        
        logout.classList.remove('active');
        login.classList.add('active');
    });

    loginbutton.addEventListener('click', function(){
        window.location.href = "http://127.0.0.1:5500/login.html";
    });
});