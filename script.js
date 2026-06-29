/* ==========================================
   VIDEO EDITOR PORTFOLIO
   SCRIPT.JS
   PART 1
========================================== */

// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector("#mobile-menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

    });

}

// ==========================================
// Navbar Scroll Effect
// ==========================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ==========================================
// Fade Up Animation
// ==========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up").forEach((el)=>{

    observer.observe(el);

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================================
// Hero Buttons Hover
// ==========================================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});
/* ==========================================
   SCRIPT.JS
   PART 2
========================================== */

// ===============================
// Parallax Background
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        window.pageYOffset * 0.4 + "px";

    }

});

// ===============================
// Portfolio Cards Animation
// ===============================

const portfolioCards =
document.querySelectorAll(".portfolio-card");

portfolioCards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=
    `0.8s ease ${index*0.15}s`;

});

const portfolioObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

portfolioCards.forEach(card=>{

portfolioObserver.observe(card);

});

// ===============================
// Counter Animation
// ===============================

const counters =
document.querySelectorAll(".counter");

function startCounter(counter){

const target = +counter.dataset.target;

let count = 0;

const speed = target/120;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

}

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ===============================
// Mouse Glow Effect
// ===============================

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(
"--mouse-x",
e.clientX+"px"
);

document.documentElement.style.setProperty(
"--mouse-y",
e.clientY+"px"
);

});

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.clientX-rect.left-size/2+"px";

ripple.style.top=
e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ===============================
// Console Signature
// ===============================

console.log("%cSouhail Bouslama Portfolio",
"color:white;background:black;font-size:18px;padding:10px;border:2px solid white;");
