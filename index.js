const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const numbers = {
  '0':1,
  '1':1, 
  '2':1, 
  '3':1, 
  '4':1, 
  '5':1, 
  '6':1, 
  '7':1, 
  '8':1, 
  '9':1, 
}
function isNumber(el){
  if(numbers[el]){
    return true
  }
  return false
} 
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const getTimerTextFromSeconds = (num) => {
  const s = num % 60
  const m = Math.floor((num % 3600) / 60)
  const h = Math.floor(num / 3600)
  return `${Math.floor(h/10) ? '' : '0'}${h}:${Math.floor(m/10) ? '' : '0'}${m}:${Math.floor(s/10) ? '' : '0'}${s}`
}
const createTimerAnimator = () => {
  let time = 0
  let intervalId = null
  return (seconds) => {
    time = seconds
    if(intervalId) clearInterval(intervalId)
    intervalId = setInterval(() => {

      timerEl.innerText = getTimerTextFromSeconds(time)

      if(time === 0){
        clearInterval(intervalId)
        intervalId = null
      }
      time--
    },1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  let val =  e.target.value.split('').filter(isNumber).join('')
  e.target.value = val
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
