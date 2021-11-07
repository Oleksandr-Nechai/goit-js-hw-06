const targetBtnSubtract = document.querySelector('button[data-action="decrement"]');
const targetText = document.querySelector('#value');
const targetBtnAdd = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
targetBtnAdd.addEventListener(`click`, () => {
  counterValue += 1;
  targetText.textContent = counterValue;
});
targetBtnSubtract.addEventListener(`click`, () => {
  counterValue -= 1;
  targetText.textContent = counterValue;
});
