const categoriesCount = document.getElementsByClassName('item').length;
console.log(`Number of categories: ${categoriesCount}`);

const categories = document.querySelectorAll('#categories .item') 
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);

    const items = category.querySelectorAll('ul > li').length;
    console.log(`Elements: ${items}`);
})
