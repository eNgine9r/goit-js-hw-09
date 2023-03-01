const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};


refs.btnStart.addEventListener('click', onInputChange);
refs.btnStop.addEventListener('click', stop);

function onInputChange () {
    document.body.style.backgroundColor = getRandomHexColor();
    
    setInterval(() => {
      onInputChange();
      // console.log('hello')
    }, 1000);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




function stop (){
  clearInterval(intervalId);
}

