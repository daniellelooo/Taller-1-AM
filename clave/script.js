let clave = '';
const longitudMaxima = 4;
const claveCorrecta = '1234'; // Clave correcta de ejemplo

const puntos = document.querySelectorAll('.dot');
const teclas = document.querySelectorAll('.key');
const elementoMensaje = document.getElementById('message');

// Agregar evento click a cada tecla
teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        const valor = tecla.getAttribute('data-value');
        manejarPresionTecla(valor);
    });
});

function manejarPresionTecla(valor) {
    if (valor === 'clear') {
        limpiarClave();
    } else if (valor === 'enter') {
        validarClave();
    } else if (clave.length < longitudMaxima) {
        clave += valor;
        actualizarPantalla();
    }
}

function actualizarPantalla() {
    puntos.forEach((punto, indice) => {
        if (indice < clave.length) {
            punto.classList.add('filled');
        } else {
            punto.classList.remove('filled');
        }
    });
}

function limpiarClave() {
    clave = '';
    actualizarPantalla();
    elementoMensaje.textContent = '';
    elementoMensaje.className = 'message';
}

function validarClave() {
    if (clave.length === 0) {
        mostrarMensaje('Ingrese una clave', 'error');
        return;
    }

    if (clave === claveCorrecta) {
        mostrarMensaje('✓ Acceso concedido', 'success');
        setTimeout(() => {
            limpiarClave();
        }, 2000);
    } else {
        mostrarMensaje('✗ Clave incorrecta', 'error');
        setTimeout(() => {
            limpiarClave();
        }, 1500);
    }
}

function mostrarMensaje(texto, tipo) {
    elementoMensaje.textContent = texto;
    elementoMensaje.className = `message ${tipo}`;
}