function calcularIMC() {
    const peso = document.getElementById('peso').value.replace(',', '.');
    const altura = document.getElementById('altura').value.replace(',', '.');
    const resultado = document.getElementById('resultado');
  
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
  
    if (!pesoNum || !alturaNum) {
      resultado.innerHTML = '<span style="color:red;">Informe valores válidos</span>';
      return;
    }
  
    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';
  
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';
  
    resultado.innerHTML = `
      <p>Seu IMC é <strong>${imc.toFixed(1)}</strong></p>
      <p>Classificação: <strong>${classificacao}</strong></p>
    `;
  }
  
  function resetarCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
  }