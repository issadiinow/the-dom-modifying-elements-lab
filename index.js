// 1. Remove the existing <main> element
const mainElement = document.getElementById('main');
mainElement.remove();

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// 5. Append the new <h1> element to the DOM
document.body.appendChild(newHeader);
