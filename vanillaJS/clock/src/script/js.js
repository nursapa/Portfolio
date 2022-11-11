const button = document.querySelectorAll('.button');
let isPlaying = false;

function playSound(e) {
  const id_sound = e.target.id;
  const audio = document.querySelector(`audio[name = "${id_sound}"]`);
  audio.loop = true;
  isPlaying ? audio.pause() : audio.play();

  audio.onplaying = function () {
    isPlaying = true;
  };

  audio.onpause = function () {
    isPlaying = false;
  };
}

button.forEach((element) => {
  element.addEventListener('click', playSound);
});

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = (min / 60) * 360;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours / 60) * 360;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
