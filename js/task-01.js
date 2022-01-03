const getElItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${getElItem.length}`);

getElItem.forEach(element => {
    const getTittle = element.querySelector("h2");
    const getLi = element.querySelectorAll('li')

    console.log(`Category: ${getTittle.textContent}`);
    console.log(`Elements: ${getLi.length}`)


})



