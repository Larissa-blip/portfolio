// JavaScript para animações simples e interações
document.querySelector('.hero-content a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#ingressos').scrollIntoView({ behavior: 'smooth' });
});
