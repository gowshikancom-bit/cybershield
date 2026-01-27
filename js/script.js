// Scroll animation for hidden elements
const elements = document.querySelectorAll('.hidden');
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(position < screenHeight - 100) { el.classList.add('show'); }
    });
});
//Get the button
let mybutton = document.getElementById("topBtn");

// Show button when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top when button clicked
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

