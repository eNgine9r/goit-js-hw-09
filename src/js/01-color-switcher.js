const DELAY_COLOR_SWITCHER = 1000;
let timeoutId = null;
let isActive = false;
const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};


refs.btnStart.addEventListener('click', startColorSwitcher);
refs.btnStop.addEventListener('click', stopColorSwitcher);

function startColorSwitcher() {
  if (isActive) {
    return;
  };
  
  isActive = true;
  timeoutId = setInterval(() => {
    startColorSwitcher();
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY_COLOR_SWITCHER);
};

function stopColorSwitcher (){
  clearInterval(timeoutId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
