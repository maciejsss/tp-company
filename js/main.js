// SLIDE MOBILE NAVIGATION


const slideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // burger animation
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach(line => line.classList.toggle('active'));

        // links slide animation
        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`;
            }
        })
    })
}

slideNav();


// HOME BUTTON VISIBILITY

const homeBtn = document.querySelector(".home-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        homeBtn.style.right = "3vw";
    } else {
        homeBtn.style.right = "-30%";
    }
});


// SLIDER

let activeElement = 0;
let changeTime = 6000;


const sliderImg = document.querySelector('.parallax');
const sliderP = document.querySelector('.parallax__para');
const awesomeIcon = document.querySelector('h1 i');

const sliderTxt = ["Doświadczony Zespół", "Gwarancja jakości", "Szybka realizacja"];
const iClasses = ["fas fa-user-tie", "fas fa-home", "fas fa-check"];

function changeSlide() {
    sliderP.textContent = sliderTxt[activeElement];
    awesomeIcon.className = iClasses[activeElement];
    activeElement++;

    if (activeElement === 3) {
        activeElement = 0;
    }
    console.log(activeElement);
}

setInterval(changeSlide, changeTime);