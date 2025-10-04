const loginbutton = document.querySelector('#log-in')
const logoutbutton = document.querySelector('#log-out')
const logout = document.querySelector('#toogle-log-out')
const login = document.querySelector('#toogle-log-in')

logoutbutton.addEventListener('click', function(){
    logout.classList.remove('active');
    login.classList.add('active')
})

loginbutton.addEventListener('click',function(){
    window.location.replace('login.html')
})
