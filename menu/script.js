const enlacesMenu = document.querySelectorAll('.enlace-menu');


enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function(evento) {
        evento.preventDefault();
        
        const destino = this.getAttribute('href');
        desplazarHaciaSeccion(destino);
    });
});


function desplazarHaciaSeccion(idSeccion) {
    const seccion = document.querySelector(idSeccion);
    
    if (seccion) {
        const menu = document.getElementById('menu');
        const alturaMenu = menu.offsetHeight;
        const posicionSeccion = seccion.offsetTop - alturaMenu - 20;
        
        window.scrollTo({
            top: posicionSeccion,
            behavior: 'smooth'
        });
    }
}


window.addEventListener('scroll', function() {
    resaltarEnlaceActivo();
});


function resaltarEnlaceActivo() {
    const secciones = document.querySelectorAll('.seccion');
    const posicionScroll = window.scrollY + 150;
    const alturaDocumento = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    
    let seccionActual = '';
    
    // Si estamos cerca del final de la página, activar la última sección
    if (window.scrollY + alturaVentana >= alturaDocumento - 50) {
        const ultimaSeccion = secciones[secciones.length - 1];
        seccionActual = ultimaSeccion.getAttribute('id');
    } else {
        secciones.forEach(seccion => {
            const iniciSeccion = seccion.offsetTop;
            const alturaSeccion = seccion.offsetHeight;
            
            if (posicionScroll >= iniciSeccion && posicionScroll < iniciSeccion + alturaSeccion) {
                seccionActual = seccion.getAttribute('id');
            }
        });
    }
    
    removerClaseActiva();
    
    if (seccionActual) {
        const enlaceActivo = document.querySelector(`a[href="#${seccionActual}"]`);
        if (enlaceActivo) {
            enlaceActivo.classList.add('activo');
        }
    }
}


function removerClaseActiva() {
    enlacesMenu.forEach(enlace => {
        enlace.classList.remove('activo');
    });
}