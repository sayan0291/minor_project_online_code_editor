export function logincontrol(){
    const logoutbutton = document.querySelector('#log-out');
    let login = document.querySelector('#log-in');
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const activeuser = document.querySelector('.activeuser');
    const desktopuserview = document.querySelector('#desktopuserview');
    const mobileuserview = document.querySelector('#mobileuserview');

    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    activeuser.addEventListener('click',function () {
        location.href = "#user";
    })

    function view(){
        login.style.display = "block";
        desktopuserview.style.display = "none";
        mobileuserview.style.display = "none";
    }
    
    
    if(isLoggedIn === 'true'){
        login.style.display = "none"
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