function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxContainer = document.getElementById('boxes');
  const boxes = Array.from({ length: amount }, (_, index) => {
    const size = 30 + index * 10;
    const box = `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    return box;
  });
  boxContainer.innerHTML = boxes.join('');
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function() {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');

  createButton.addEventListener("click", function() {
    const inputNumber = document.querySelector('input[type="number"]').value;
    if (inputNumber >= 1 && inputNumber <= 100) {
      createBoxes(inputNumber);
      document.querySelector('input[type="number"]').value = '';
    } else {
      alert('Enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);
});