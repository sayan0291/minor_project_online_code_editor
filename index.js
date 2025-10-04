const loginout = document.querySelector('.login-out');
const userloginout = document.querySelector('.user')

loginout.addEventListener('click', function(){
    userloginout.classList.remove('active')
    userloginout.classList.add('active')
    window.location.replace("login.html")
})
