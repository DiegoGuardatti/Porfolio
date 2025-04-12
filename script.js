function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";
    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    x.className = x.className === "" ? "responsive" : "";
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

window.addEventListener('scroll', () => {
    document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 300);
});

document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

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

AOS.init({ duration: 1000 });