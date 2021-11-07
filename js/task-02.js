const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elementsIngredients = document.querySelector('#ingredients');

const elements = ingredients.map((element, index) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredients[index];
  liEl.classList.add('item');
  return liEl;
});
elementsIngredients.append(...elements);
