// ================= THUMBNAIL IMAGE CHANGE =================

function changeCan(image, color){
    const can = document.getElementById("mainCan");
    const hero = document.querySelector(".hero");

    // Smooth shrink
    can.style.transform = "scale(0.8)";
    can.style.opacity = "0";

    setTimeout(() => {
        can.src = image;
        hero.style.background = color;

        can.style.transform = "scale(1)";
        can.style.opacity = "1";
    }, 300);
}


// ================= RIPPLE BUTTON EFFECT =================

const btn = document.querySelector(".btn");

if(btn){
    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");
        const rect = this.getBoundingClientRect();

        circle.style.left = e.clientX - rect.left + "px";
        circle.style.top = e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });
}


// ================= SMOOTH PAGE LOAD FADE =================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


// ================= MOBILE NAV TOGGLE =================
const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");

if(header && menuToggle){
    menuToggle.addEventListener("click", () => {
        header.classList.toggle("open");
    });
}