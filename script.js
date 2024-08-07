document.addEventListener('DOMContentLoaded', () => {
    // Actualización del texto dinámico
    const dynamicText = document.getElementById('dynamic-text');
    const words = ['Salud', 'Bienestar', 'Equilibrio', 'Armonía'];
    let currentWordIndex = 0;

    setInterval(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        dynamicText.textContent = words[currentWordIndex];
    }, 4000);

    // Carrusel de imágenes
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    // Inicia el carrusel
    items[currentIndex].classList.add('active');
    setInterval(showNextImage, 4000); // Cambia cada 4 segundos
});
