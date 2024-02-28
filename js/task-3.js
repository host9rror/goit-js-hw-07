const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    const inputValue = this.value.trim();
    nameOutput.textContent = inputValue === ''  ? 'Anonymous' : inputValue;
})