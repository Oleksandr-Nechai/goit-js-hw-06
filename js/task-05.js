const input = document.querySelector(`#name-input`);
const spanInput = document.querySelector(`#name-output`);
input.addEventListener(`input`, outputChange);
function outputChange(event) {
  if (event.currentTarget.value.length === 0) {
    spanInput.textContent = 'Anonymous';
    return spanInput.textContent;
  }
  spanInput.textContent = event.currentTarget.value;
}
