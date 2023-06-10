function suma () {
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    var suma = num1 + num2;
    document.getElementById('resultado').innerHTML = suma;
}

const btnSuma = document.getElementById('boton');

btnSuma.addEventListener('click',suma);