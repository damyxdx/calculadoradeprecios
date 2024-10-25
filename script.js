function calculate() {
    const brand = document.getElementById('brand').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    switch (brand) {
        case 'marca1':
            result = inputValue * 1.21 * 2 + 500; // Aplicar el cálculo y suma de bolsa
            break;
        case 'marca2':
        case 'marca3':
        default:
            result = inputValue * 1.21 * 2;
    }

    // Redondear el resultado para que termine en multiplos de 50
    result = Math.round(result / 50) * 50;

    document.getElementById('result').textContent = result.toFixed(2);
}