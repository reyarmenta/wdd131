const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;