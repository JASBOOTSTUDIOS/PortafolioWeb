

// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ejemplo de animación al hacer scroll (puedes usar una librería para más complejidad)
const secciones = document.querySelectorAll('.section');

function checkSlide() {
    secciones.forEach(seccion => {
        const slideInAt = (window.scrollY + window.innerHeight) - seccion.offsetHeight / 2;
        const seccionBottom = seccion.offsetTop + seccion.offsetHeight;
        const isHalfShown = slideInAt > seccion.offsetTop;
        const isNotScrolledPast = window.scrollY < seccionBottom;

        if (isHalfShown && isNotScrolledPast) {
            seccion.classList.add('active'); // Agrega una clase para la animación CSS
        } else {
            seccion.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkSlide);

// (En tu CSS, define la animación para la clase 'active')
/* .section { opacity: 0; transform: translateY(50px); transition: all 0.5s ease-out; }
.section.active { opacity: 1; transform: translateY(0); } */