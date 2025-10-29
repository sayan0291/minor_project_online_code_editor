window.addEventListener('DOMContentLoaded', function(){
    const loginbutton = document.querySelector('#log-in');
    const logoutbutton = document.querySelector('#log-out');
    let logout = document.querySelector('#toogle-log-out');
    let login = document.querySelector('#toogle-log-in');
    // const username = document.querySelector('.username');
    // const email = document.querySelector('.email');
    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // username.textContent = `Username: ${currentUser.username}`
    // email.textContent = `Email: ${currentUser.email}`
    
    if(isLoggedIn === 'true'){
        login.classList.remove('active');
        logout.classList.add('active');
        const username = document.querySelector('.activeuser')
        username.innerHTML = currentUser.username;
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
        window.location.href = "/login.html";
    });
});