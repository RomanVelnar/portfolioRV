// button //
mybutton = document.getElementById("buttonTop");

window.onscroll = function() {getButton()};

window.scrollTo({ top: 0, behavior: 'smooth' });

function getButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function buttonFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




