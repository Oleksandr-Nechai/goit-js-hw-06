const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${inputRef.value}px`;

const inputChangeHandler = e => {
  textRef.style.fontSize = `${e.currentTarget.value}px`;
};

inputRef.addEventListener('input', inputChangeHandler);
