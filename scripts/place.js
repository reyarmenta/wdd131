//last date modified
const currentyear = document.querySelector('#currentyear');
const today = new Date();

currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const temperature = 19;
const windSpeed = 6;

function calculateWindChill(temp, windS) {
    
}