
function calculate() {
    const brand = document.getElementById('brand').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    switch (brand) {
        case 'General':
            result = inputValue * 1.21 * 2 +500;
            break;
        case 'Fashion/bathbazar/':
            result = inputValue * 1.26 * 2 +500;
            break;
        case 'marca3':
            result = inputValue * 1.21 * 2;
            break;
        default:
            result = inputValue * 1.21 * 2;
    }

    // Ajustar el resultado para que termine en "50" o "00"
    const remainder = result % 100;
    if (remainder < 50) {
        result = result - remainder + 50; // Redondear hacia abajo a "50"
    } else {
        result = result - remainder + 100; // Redondear hacia arriba a "00"
    }

    document.getElementById('result').textContent = result.toFixed(2);
}
