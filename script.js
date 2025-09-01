// Funciones de navegación
function seleccionar(link) {
    const opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";
    const x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    const x = document.getElementById("nav");
    x.className = x.className === "" ? "responsive" : "";
}

// Actualizar año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Funcionalidad del modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Cargar preferencia de modo oscuro
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Funcionalidad del botón de scroll-top
window.addEventListener('scroll', () => {
    document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 300);
});

document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Configuración de particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ff5080" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "none", random: false }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    }
});

// Inicializar AOS (Animate On Scroll)
AOS.init({ 
    duration: 1000,
    once: true 
});

// Funcionalidad de los modales
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a los proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('click', function() {
            const proyectoId = this.getAttribute('data-proyecto');
            abrirModal(proyectoId);
        });
    });
    
    // Cerrar modales
    const cerrarModales = document.querySelectorAll('.cerrar-modal');
    cerrarModales.forEach(cerrar => {
        cerrar.addEventListener('click', function() {
            cerrarModal(this.closest('.modal'));
        });
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModal(this);
            }
        });
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modales.forEach(modal => {
                if (modal.classList.contains('mostrar')) {
                    cerrarModal(modal);
                }
            });
        }
    });
});

function abrirModal(proyectoId) {
    const modal = document.getElementById(`modal-proyecto-${proyectoId}`);
    if (modal) {
        modal.classList.add('mostrar');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
}

function cerrarModal(modal) {
    modal.classList.remove('mostrar');
    document.body.style.overflow = 'auto'; // Permitir scroll nuevamente
}

function inicializarCarruseles() {
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        const carouselImgs = modal.querySelectorAll('.carousel-img');
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');
        let currentIndex = 0;

        if (prevBtn && nextBtn) {
            function showImage(index) {
                carouselImgs.forEach(img => img.classList.remove('active'));
                carouselImgs[index].classList.add('active');
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + carouselImgs.length) % carouselImgs.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % carouselImgs.length;
                showImage(currentIndex);
            });

            // Opcional: Oculta los botones si solo hay una imagen
            if (carouselImgs.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
        }
    });
}
inicializarCarruseles();