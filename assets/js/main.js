// button 
mybutton = document.getElementById("buttonTop");

window.onscroll = function() {getButton()};

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

// Open box 
function openBox(e, boxId){
    var i, boxContent, box;
    
    boxContent = document.getElementsByClassName('boxContent');
    for(i=0; i<boxContent.length; i++){
        boxContent[i].style.display = "none";
    }
    box = document.getElementsByClassName('box');
    for(i=0; i<box.length; i++){
        box[i].className = box[i].className.replace('active', "")
    }

    document.getElementById(boxId).style.display = "block";
    e.currentTarget.className += 'active';
}




