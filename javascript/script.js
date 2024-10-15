document.getElementById('somarBtn').addEventListener('click', function() {
    // Obter os valores dos inputs
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    
    // Calcular a soma
    let soma = n1 + n2;

    // Exibir o resultado
    document.getElementById('resultado').innerText = `Resultado: ${soma}`;
});
