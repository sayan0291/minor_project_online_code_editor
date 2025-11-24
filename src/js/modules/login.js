export function logincontrol(){
    const logoutbutton = document.querySelector('#log-out');
    let desktoplogin = document.querySelector('#desktop-log-in');
    let mobilelogin = document.querySelector('#mobile-log-in');
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const activeuser = document.querySelector('.activeuser');
    const desktopuserview = document.querySelector('#desktopuserview');
    const mobileuserview = document.querySelector('#mobileuserview');

    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    

    function view(){
        desktoplogin.style.display = "block";
        mobilelogin.style.display = "block";
        desktopuserview.style.display = "none";
        mobileuserview.style.display = "none";
    }
    
    
    if(isLoggedIn === 'true'){
        desktoplogin.style.display = "none";
        mobilelogin.style.display = "none";
        username.textContent = `${currentUser.username}`
        email.textContent = `${currentUser.email}`
    }else {
        view();
    }

    
    logoutbutton.addEventListener('click', function(){
        localStorage.setItem('isLoggedIn', 'false');
        view();
        localStorage.setItem('currentUser', null);
        window.location.replace('#homepage');
    });

    login.addEventListener('click', function(){
        window.location.href = "login.html";
    });
};