const inputs = document.querySelectorAll('.controle input');

const back = document.querySelector('.main');
const fileInput = document.getElementById('imageInput');

const images = document.querySelectorAll('.mole');

function update() {
  if (this.name === 'spacing') {
    images[0].style.transform = `translateY(${this.value}px)`;
  } else if (this.name === 'blur') {
    images[0].style.filter = `blur(${this.value}px)`;
  } else {
    back.style.background = this.value;
  }
}

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];

  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = function () {
    images[0].setAttribute('src', fileReader.result);
  };
});

inputs.forEach((input) => input.addEventListener('mousemove', update));
inputs.forEach((input) => input.addEventListener('change', update));
