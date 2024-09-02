// Espera o carregamento completo do documento para executar o código
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o formulário e a div onde a resposta será exibida
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (event) => {
        // Previne o comportamento padrão do envio do formulário (recarregar a página)
        event.preventDefault();

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verifica se todos os campos estão preenchidos
        if (nome && email && mensagem) {
            // Exibe uma mensagem de agradecimento se todos os campos estiverem preenchidos
            responseDiv.textContent = 'Obrigado pela sua mensagem, ' + nome + '! Em breve entraremos em contato.';
            responseDiv.style.color = 'green'; // Define a cor da mensagem como verde
            form.reset(); // Limpa os campos do formulário
        } else {
            // Exibe uma mensagem de erro se algum campo estiver vazio
            responseDiv.textContent = 'Por favor, preencha todos os campos.';
            responseDiv.style.color = 'red'; // Define a cor da mensagem como vermelha
        }
    });
});

