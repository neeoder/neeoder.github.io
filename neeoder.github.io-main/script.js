const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const emailInputs = document.querySelectorAll('.input-box input[type="email"]');
const registerForm = document.querySelector('.register-form');

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

window.onload = () => {
    emailInputs.forEach(input => {
        const label = input.nextElementSibling;
        input.oninput = () => label.classList[input.value ? 'add' : 'remove']('stay-up');
    });
}

registerForm.onsubmit = (event) => {
    event.preventDefault();
    wrapper.classList.remove('active');
};
