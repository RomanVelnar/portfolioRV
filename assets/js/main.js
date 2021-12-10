// button 
mybutton = document.getElementById("buttonTop");

window.onscroll = function() {getButton()};

function getButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function buttonFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



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
// function openBox(e, boxId){
//     var i, boxContent, box;
    
//     boxContent = document.getElementsByClassName('boxContent');
//     for(i=0; i<boxContent.length; i++){
//         boxContent[i].style.display = "none";
//     }
//     box = document.getElementsByClassName('box');
//     for(i=0; i<box.length; i++){
//         box[i].className = box[i].className.replace('active', "")
//     }

//     document.getElementById(boxId).style.display = "block";
//     e.currentTarget.className += 'active';
// };

// Navigation

// const navToggle1 = document.querySelector('.navToggle');
// const navLinks1 = document.querySelectorAll('.navbarLink');


// navToggle1.addEventListener('click', () => {
//     document.body.classList.toggle('navOpen');
// });

// navLinks1.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('navOpen');
//     })
// });


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





