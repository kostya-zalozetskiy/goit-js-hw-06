
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', changeBagroundColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBagroundColor () {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor
console.log(span)
}
