let selectedBrand = 'General'; // Marca predeterminada

function selectBrand(brand) {
    selectedBrand = brand;
    document.querySelectorAll('.brand-button').forEach(button => {
        button.classList.toggle('active', button.textContent === brand);
    });
}

function calculate() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    switch (selectedBrand) {
        case 'General':
            result = inputValue * 1.21 * 2 + 500;
            break;
        case 'Fashion':
            result = inputValue * 1.26 * 2 + 500;
            break;
        case 'marca3':
            result = inputValue * 1.21 * 2;
            break;
        default:
            result = inputValue * 1.21 * 2;
    }

    const remainder = result % 100;
    if (remainder < 50) {
        result = result - remainder + 50;
    } else {
        result = result - remainder + 100;
    }

    document.getElementById('result').textContent = result.toFixed(2);
    addToHistory(selectedBrand, inputValue, result.toFixed(2));
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}

function addToHistory(brand, inputValue, result) {
    const historyTable = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    const newRow = historyTable.insertRow();

    const brandCell = newRow.insertCell(0);
    const inputValueCell = newRow.insertCell(1);
    const resultCell = newRow.insertCell(2);

    brandCell.textContent = brand;
    inputValueCell.textContent = inputValue;
    resultCell.textContent = result;
}
