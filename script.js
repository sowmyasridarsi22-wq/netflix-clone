const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.background = "#000";
    }
    else{
        navbar.style.background = "rgba(0,0,0,0.8)";
    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert("Movie Preview Coming Soon 🎬");

    });

});