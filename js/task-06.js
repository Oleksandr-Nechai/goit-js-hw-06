const input = document.querySelector(`#validation-input`);

input.addEventListener('blur', notFocusInput);
function notFocusInput(event) {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
  return input.classList.add('invalid');
}
