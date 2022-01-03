const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
const createliEl = document.createElement('li');
  
  createliEl.textContent = element;
  createliEl.classList.add('item');
   return createliEl  
})
console.log(elements);

ingredientsEl.append(...elements);



