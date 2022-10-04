// All div objects that surround the eye element
let divTL = document.getElementById('tl');
let divT = document.getElementById('t');
let divTR = document.getElementById('tr');
let divL = document.getElementById('l');
let divM = document.getElementById('m');
let divR = document.getElementById('r');
let divBL = document.getElementById('bl');
let divB = document.getElementById('b');
let divBR = document.getElementById('br');

// Both of the eye image elements
let eyeImages =  document.querySelectorAll('.eye-img');

// isBlinking will be used to determine if eye image should change or not depending on if eye is blinking or not
let isBlinking = false;

// currentNumber will be used to set last eye image in eyeOpen function
let currentEyeNumber;

// Will be called when user hovers over any of the eye surrounding divs
DivHover = (div) => {
    // Make sure that the eye image is not currently in a blinking state
    if (isBlinking) 
        return;

    // Iterate through both of the eye images and change their source using the 
    // 'number' id of the passed div, to determine which image file to use
    eyeImages.forEach((element) => {
        element.src = `./img/${div.id}.gif`
    })

    // Set the current eye image number for eyeOpen function
    currentEyeNumber = div.id;
}

// Start eye blink timeout loop
setTimeout(EyeBlink, 4000)

// Will be called in a timeout and will change both of the eye images to a 
// close eye image
function EyeBlink() {
    // Iterate through both of the eye images and change their source to closed eye image
    eyeImages.forEach((element) => {
        element.src = './img/closed.gif';
    })
    // Set isBlinking to true so eye image can't be change when eye is blinking
    isBlinking = true;
    // Start timeout for open eye state
    setTimeout(EyeOpen, 500);
}
// Will be called in a timeout and will change both of the eye images to a 
// open eye state
function EyeOpen() {
    // Iterate through both of the eye images and change their source to last eye image before blink
    eyeImages.forEach((element) => {
        element.src = `./img/${currentEyeNumber}.gif`;
    })
    // Set isBlinking to false so eye image can be change again
    isBlinking = false;
    // Start timeout for closed eye state
    setTimeout(EyeBlink, 4000);
};
