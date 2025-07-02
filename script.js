function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let formAno = window.document.getElementById('txtano');
  let anoNasc = Number(formAno.value);
  let res = window.document.getElementById('res');
  let idade = ano - anoNasc;
  if (formAno.value.length == 0 || anoNasc > ano) {
    window.alert(`Verifique os dados e tente novamente!`);
  } else {
    let fsex = document.getElementsByName('radsex');
    let img = window.document.createElement('img');
    let genero = '';
    if (fsex[0].checked) {
      genero = 'homem';
      if (idade == 1) {
        res.innerHTML = `É um ${genero} de ${idade} ano.`;
      } else res.innerHTML = `É um ${genero} de ${idade} anos.`;
      if (idade <= 3) {
        img.setAttribute('src', 'bebe-menino.png');
      } else if (idade <= 9) {
        img.setAttribute('src', 'menino.png');
      } else if (idade <= 15) {
        img.setAttribute('src', 'adolecente-menino.png');
      } else if (idade <= 22) {
        img.setAttribute('src', 'homem-jovem.png');
      } else if (idade <= 35) {
        img.setAttribute('src', 'homem-jovem-adulto.png');
      } else if (idade <= 55) {
        img.setAttribute('src', 'homem-adulto.png');
      } else if (idade <= 105) {
        img.setAttribute('src', 'senhor.png');
      } else {
        res.innerHTML = `É um ${genero}, se não está descansando em paz tem ${idade} anos.`;
      }
    } else {
      genero = 'mulher';
      if (idade == 1) {
        res.innerHTML = `É uma ${genero} de ${idade} ano.`;
      } else res.innerHTML = `É uma ${genero} de ${idade} anos.`;
      if (idade <= 3) {
        img.setAttribute('src', 'bebe-menina.png');
      } else if (idade <= 9) {
        img.setAttribute('src', 'menina.png');
      } else if (idade <= 15) {
        img.setAttribute('src', 'adolecente-menina.png');
      } else if (idade <= 22) {
        img.setAttribute('src', 'mulher-jovem.png');
      } else if (idade <= 35) {
        img.setAttribute('src', 'mulher-jovem-adulta.png');
      } else if (idade <= 55) {
        img.setAttribute('src', 'mulher-adulta.png');
      } else if (idade <= 105) {
        img.setAttribute('src', 'senhora.png');
      } else {
        res.innerHTML = `É uma ${genero}, se não está descansando em paz tem ${idade} anos.`;
      }
    }
    res.style.textAlign = 'center';
    res.appendChild(img);
  }
}
