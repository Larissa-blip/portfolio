// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            responseDiv.textContent = 'Obrigado pela sua mensagem, ' + nome + '! Em breve entraremos em contato.';
            responseDiv.style.color = 'green';
            form.reset();
        } else {
            responseDiv.textContent = 'Por favor, preencha todos os campos.';
            responseDiv.style.color = 'red';
        }
    });
});
