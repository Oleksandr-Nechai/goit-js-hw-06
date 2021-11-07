'use strict';
const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(item => {
  const numberOfSubcategories = item.querySelector(`.item h2`);
  console.log(`Category: ${numberOfSubcategories.textContent}`);
  const itemsLength = item.querySelectorAll('.item > ul > li');
  console.log('Elements: ', itemsLength.length);
});
