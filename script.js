function showImages() {
    const imagesContainer = document.getElementById('imagesContainer');
    
    if (imagesContainer.style.display === 'none') {
        imagesContainer.style.display = 'block';
        // Agregar la clase que activa la animación
        setTimeout(() => {
            imagesContainer.classList.add('showImages');
        }, 10); // Pequeño retraso para que la animación se aplique correctamente
    } else {
        // Opción para ocultar las imágenes de nuevo si lo deseas
        imagesContainer.classList.remove('showImages');
        setTimeout(() => {
            imagesContainer.style.display = 'none';
        }, 1000); // Esperar que la animación termine antes de ocultar
    }
}