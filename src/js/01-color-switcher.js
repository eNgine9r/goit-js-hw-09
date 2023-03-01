const DELAY_COLOR_SWITCHER = 1000;
let timeoutId = null;
let isActive = false;
const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};


refs.btnStart.addEventListener('click', startColorSwitcher);
refs.btnStop.addEventListener('click', stopColorSwitcher);

function stopColorSwitcher (){
  clearTimeout(timeoutId);
}

function startColorSwitcher() {
  document.body.style.backgroundColor = getRandomHexColor();
  
  if (isActive) {
      return;
    }
    isActive = true;

  timeoutId = setTimeout(() => {
    startColorSwitcher();
  }, DELAY_COLOR_SWITCHER);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const switcher = {
//   timeoutId: null,
//   isActive: false,
//   start() {
//     if (isActive) {
//       return;
//     }
    
//     timeoutId = setTimeout(() => {
//       document.body.style.backgroundColor = getRandomHexColor();
//       startColorSwitcher();
//     }, DELAY_COLOR_SWITCHER);

//   }
// }