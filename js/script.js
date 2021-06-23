let button = document.querySelector(".form__btn");

button.addEventListener('click', () => {
    let inptEmail = document.querySelector(".form__inpt-email");
    inptEmail.checkValidity() ? inptEmail.classList.remove("form__inpt-email--error") : inptEmail.classList.add("form__inpt-email--error");
});