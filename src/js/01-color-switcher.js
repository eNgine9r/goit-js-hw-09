const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onInputChange);

function onInputChange () {
    document.body.style.backgroundColor = getRandomHexColor();
    spanText.textContent =  document.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}