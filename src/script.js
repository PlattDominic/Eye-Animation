let divTL = document.getElementById('tl');
let divT = document.getElementById('t');
let divTR = document.getElementById('tr');
let divL = document.getElementById('l');
let divM = document.getElementById('m');
let divR = document.getElementById('r');
let divBL = document.getElementById('bl');
let divB = document.getElementById('b');
let divBR = document.getElementById('br');

let eyeImage = document.getElementById('eye-img');
let isBlinking = false;
let eyeImages = ['eye_c.gif', 'eye_cl.gif', 'eye_cr.gif', 'eye_lc.gif', 'eye_ll.gif', 'eye_lr.gif', 'eye_uc.gif', 'eye_ul.gif', 'eye_ur.gif'];



DivHover = (div) => {

    if (isBlinking) 
        return;

    if (div.id == 'tl') {
        eyeImage.src = './img/eye_ul.gif';
    }
    else if (div.id == 't') {
        eyeImage.src = './img/eye_uc.gif';
    }
    else if (div.id == 'tr') {
        eyeImage.src = './img/eye_ur.gif';
    }
    else if (div.id == 'l') {
        eyeImage.src = './img/eye_cl.gif';
    }
    else if (div.id =='m') {
        eyeImage.src = './img/eye_c.gif';
    }
    else if (div.id == 'r') {
        eyeImage.src = './img/eye_cr.gif';
    }
    else if (div.id == 'bl') {
        eyeImage.src = './img/eye_ll.gif';
    }
    else if (div.id == 'b') {
        eyeImage.src = './img/eye_lc.gif';
    }
    else if (div.id == 'br') {
        eyeImage.src = './img/eye_lr.gif';
    }
}

// setTimeout(RandomEyeMovement, 6000);

// function RandomEyeMovement() {
//     let randImg = eyeImages[Math.floor(Math.random()*eyeImages.length)];
//     eyeImage.src = './img/' + randImg;

//     setTimeout(RandomEyeMovement, 6000);
// }


setTimeout(EyeBlink, 4000)

function EyeBlink() {
    eyeImage.src = './img/closed.gif';
    isBlinking = true;
    setTimeout(EyeOpen, 500);
}
function EyeOpen() {
    eyeImage.src = './img/eye_c.gif';
    isBlinking = false;
    setTimeout(EyeBlink, 4000);
};
