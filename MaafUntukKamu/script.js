// ===============================
// INISIALISASI
// ===============================

const bgm = document.getElementById("bgm");
const startButton = document.getElementById("startButton");
const forgiveButton = document.getElementById("forgiveButton");
const timer = document.getElementById("timer");
const typing = document.getElementById("typing1");
const result = document.getElementById("result");

// ===============================
// MUSIK
// ===============================

startButton.addEventListener("click", () => {

    bgm.play();

    document.querySelector(".countdown").scrollIntoView({
        behavior: "smooth"
    });

});

// ===============================
// COUNTDOWN
// ===============================

// Ganti dengan tanggal jadian kalian
const startDate = new Date("2026-04-6");

function updateTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(diff / 3600000) % 24;

    const minutes = Math.floor(diff / 60000) % 60;

    timer.innerHTML =
    `
    ${days} Hari
    <br>
    ${hours} Jam
    ${minutes} Menit
    `;

}

updateTimer();

setInterval(updateTimer,1000);

// ===============================
// EFEK MENGETIK
// ===============================

const text = `

Hai Sayang...

Aku tahu mungkin aku membuatmu kecewa.

Aku minta maaf karena tidak bisa menjadi sempurna.

Tetapi satu hal yang selalu ingin kamu tahu...

Aku tidak pernah berhenti mencintaimu.

Terima kasih karena selalu memilih bertahan.

Aku akan terus belajar menjadi seseorang yang pantas untukmu.

Aku sayang kamu.

❤️

`;

let index = 0;

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

// ===============================
// SURAT SAAT SCROLL
// ===============================

const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hidden.forEach(section=>{

    observer.observe(section);

});

// ===============================
// BINTANG
// ===============================

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.opacity=Math.random();

    document.body.appendChild(star);

}

// ===============================
// MAWAR BERJATUHAN
// ===============================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌹";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(20+Math.random()*20)+"px";

    petal.style.animationDuration=(5+Math.random()*6)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,350);

// ===============================
// GALERI LIGHTBOX
// ===============================

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

images.forEach(img=>{

    img.onclick=()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    }

});

close.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

// ===============================
// HATI BERTERBANGAN
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

}

// ===============================
// TOMBOL MAAF
// ===============================

forgiveButton.addEventListener("click",()=>{

    result.innerHTML=`

    💖

    Terima kasih Sayang...

    Terima kasih sudah memaafkanku.

    Aku janji akan menjadi seseorang

    yang lebih baik setiap hari.

    Aku mencintaimu hari ini,

    besok,

    dan selamanya.

    ❤️

    `;

    // Confetti
    confetti({

        particleCount:300,

        spread:180,

        origin:{y:0.6}

    });

    // Hati beterbangan
    setInterval(createHeart,250);

    // Mawar makin deras
    setInterval(createPetal,120);

});

// ===============================
// EFEK SCROLL
// ===============================

window.addEventListener("scroll",()=>{

    document.querySelectorAll("section").forEach(section=>{

        const speed=window.scrollY*0.03;

        section.style.backgroundPositionY=speed+"px";

    });

});