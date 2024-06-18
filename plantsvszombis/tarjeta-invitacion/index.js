document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const img = document.querySelector('.Godzilla');
    
    const imagenes = [
        "/zomiGlobo-re.png",
        "/zombiParty-removebg.png",
        "/zombiTorta-removebg.png"
        // Agrega aquí más rutas de imágenes según tus necesidades
    ];

    let currentIndex = 0;

    wrapper.addEventListener('animationiteration', function() {
        
        img.src = imagenes[currentIndex];
        
        // Incrementa el índice o reinícialo al principio si llega al final del array
        currentIndex = (currentIndex + 1) % imagenes.length;
        wrapper.style.animationDirection = "reverse"
        
       
    });
});
