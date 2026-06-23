// =========================
// TESTIMONIOS
// =========================

const testimonials = [

{
    name: "María González",
    role: "Directora - Colegio San José",
    text: "Los diplomas superaron nuestras expectativas. Cada detalle fue cuidado con amor y profesionalismo. Los padres quedaron encantados.",
    image: "Cliente 1"
},

{
    name: "Rosa Huamán",
    role: "Coordinadora - Colegio Los Andes",
    text: "Pedimos cuadros personalizados para toda la promoción y el resultado fue espectacular. Cada familia recibió un recuerdo único.",
    image: "Cliente 2"
},

{
    name: "Carlos Pérez",
    role: "Padre de familia",
    text: "Excelente calidad de impresión y atención. Los recuerdos llegaron a tiempo y con acabados premium.",
    image: "Cliente 3"
}

];

let currentTestimonial = 0;

const testimonialName =
document.getElementById("testimonialName");

const testimonialRole =
document.getElementById("testimonialRole");

const testimonialText =
document.getElementById("testimonialText");

const testimonialCounter =
document.getElementById("testimonialCounter");

const testimonialImage =
document.getElementById("testimonialImage");

function changeTestimonial(){

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){
        currentTestimonial = 0;
    }

    testimonialName.textContent =
    testimonials[currentTestimonial].name;

    testimonialRole.textContent =
    testimonials[currentTestimonial].role;

    testimonialText.textContent =
    testimonials[currentTestimonial].text;

    testimonialImage.textContent =
    testimonials[currentTestimonial].image;

    testimonialCounter.textContent =
    `${currentTestimonial + 1} / ${testimonials.length}`;

    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.classList.remove("active-dot");
    });

    dots[currentTestimonial].classList.add("active-dot");

}

setInterval(changeTestimonial, 5000);