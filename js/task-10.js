const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const motherBlock = document.querySelector('#boxes');
const divControls = document.querySelector('#controls');

motherBlock.style.display = `flex`;
motherBlock.style.flexWrap = `wrap`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let boxDivCollection = [];
let sizeBox = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let element = document.createElement('div');
    element.style.width = `${sizeBox}px`;
    element.style.height = `${sizeBox}px`;
    sizeBox += 10;
    element.style.backgroundColor = getRandomHexColor();
    boxDivCollection.push(element);
  }
}
function pushboxDivCollection() {
  createBoxes(Number(input.value));
  motherBlock.append(...boxDivCollection);
}
btnCreate.addEventListener(`click`, () => {
  pushboxDivCollection();
  input.value = 0;
});
btnDestroy.addEventListener(`click`, () => {
  motherBlock.innerHTML = '';
});
