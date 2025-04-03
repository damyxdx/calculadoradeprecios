let selectedBrand = 'General'; // Por defecto

function selectBrand(brand) {
    selectedBrand = brand;

    document.querySelectorAll('.brand-button').forEach(button => {
        button.classList.toggle('active', button.textContent === brand);
    });
}

function showCategory(category) {
    document.getElementById('bazarButtons').classList.remove('visible');
    document.getElementById('plantaBajaButtons').classList.remove('visible');

    if (category === 'bazar') {
        document.getElementById('bazarButtons').classList.add('visible');
    } else if (category === 'plantabaja') {
        document.getElementById('plantaBajaButtons').classList.add('visible');
    }
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
            result = inputValue * 1.21 * 2 + 700;
            break;
        case 'Fashion/Bathbazar':
            result = inputValue * 1.26 * 2 + 700;
            break;
        case '1.7':
            result = inputValue * 1.7;
            break;
        case '1.6':
            result = inputValue * 1.6;
            break;
        case '1.5':
            result = inputValue * 1.5;
            break;
        case '1.7 + IVA':
            result = inputValue * 1.7 * 1.21;
            break;
        case '1.6 + IVA':
            result = inputValue * 1.6 * 1.21;
            break;
        case '1.5 + IVA':
            result = inputValue * 1.5 * 1.21;
            break;
        default:
            result = inputValue * 1.21 * 2 + 700;
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
    const allowedKeys = ['Backspace', 'Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Decimal', '.'];

    if (!allowedKeys.includes(event.key) && (event.key < '0' || event.key > '9')) {
        event.preventDefault();
    }

    if (event.key === 'Enter') {
        calculate();
        document.getElementById('inputValue').select();
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
