

document.querySelector('.main__form-btn').addEventListener('click', () => {
    document.querySelector('.main__popup').classList.add('active');
    document.querySelector('.main__popup-text').innerHTML= 
    'Login; Email, Pwd; Url Query Parameters Url Query parameters are provided when page is loaded'
});

document.querySelector('.main__login-create').addEventListener('click', (link) => {
    link.preventDefault();
    document.querySelector('.main__popup').classList.add('active');
    document.querySelector('.main__popup-text').innerHTML='Create Account';
    
});

document.querySelector('.main__login-forgot').addEventListener('click', (link) => {
    link.preventDefault();
    document.querySelector('.main__popup').classList.add('active');
    document.querySelector('.main__popup-text').innerHTML='Forgot Password';
});

document.querySelector('.main__login-google').addEventListener('click', (link) => {
    link.preventDefault();
    document.querySelector('.main__popup').classList.add('active');
    document.querySelector('.main__popup-text').innerHTML=
    ' “Google Login - Url Query Parameters” Url Query parameters are provided when page is loaded ';
});

document.querySelector('.footer__link').addEventListener('click', (link) => {
    link.preventDefault();
    document.querySelector('.main__popup').classList.add('active');
    document.querySelector('.main__popup-text').innerHTML=
    '“Gamanet Login; Url Query Parameters” Url Query parameters are provided when page is loaded';
});




/// Button close popup
document.querySelector('.main__popup-btn').addEventListener('click', () => {
    document.querySelector('.main__popup').classList.remove('active');
    document.querySelector('.main__popup-text').innerHTML="";
})





