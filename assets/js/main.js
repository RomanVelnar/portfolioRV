// button 
mybutton = document.getElementById("buttonTop");

window.onscroll = function() {getButton()};

function getButton() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function buttonFunction() {
    document.body.scrollTop = 20;
    document.documentElement.scrollTop = 20;
};

// Navigation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbarList');
    const navLinks = document.querySelectorAll('.navbarList li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navbarListFade 0.5s ease forwards ${index / 7 + 1.5}s'
            }  
        });
        burger.classList.toggle('toggle');

    });
}

navSlide();

// Open box 
function openBox(e, boxId){
    var i, boxContent, expBoxBox;
    
    boxContent = document.getElementsByClassName('boxContent');
    for(i=0; i<boxContent.length; i++){
        boxContent[i].style.display = "none";
    }
    expBoxBox = document.getElementsByClassName('expBoxBox');
    for(i=0; i<expBoxBox.length; i++){
        expBoxBox[i].className = expBoxBox[i].className.replace('active', "")
    }

    document.getElementById(boxId).style.display = "block";
    e.currentTarget.className += 'active';
};


// Text animation

const text = document.querySelector(".sectionTitle");
const sText = text.textContent;
const splText = sText.split("");
text.textContent = "";

for(let i=0; i < splText.length; i++) {
    text.innerHTML += "<span>" + splText[i] + "</span>";
}

let char = 0;
let timer = setInterval(tick, 50);

function tick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}





