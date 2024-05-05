
// maioridade
function calculaMaioridade() {
var idade = document.getElementById('idadeUser').value;
const maioridade = 18;
var elementoRE = document.getElementById("respostaidade");
    if (idade >= 18) {
    elementoRE.innerHTML = "Parabéns, você é maior de idade!"
  }
    else if (idade <18) {
      elementoRE.innerHTML = "Com "+ idade + " anos, você ainda é menor de idade"
    }
    console.log(document.getElementById('idadeUser').value);

};

//media das notas

function calculaMedia() {
  var nota1 = parseInt(document.getElementById('nota1User').value);
  var nota2 = parseInt(document.getElementById('nota2User').value);
  var nota3 = parseInt(document.getElementById('nota3User').value);
  var mediaUser = (nota1 + nota2 + nota3)/3;
  var elementoM = document.getElementById("respostamedia");
  if (nota1 > 10) {
    elementoM.innerHTML = "A primeira nota possui um valor inválido. Por favor, escreva sua nota corretamente, com um valor de 0 a 10."
   }
   else if (nota2 > 10) {
    elementoM.innerHTML = "A segunda nota possui um valor inválido. Por favor, escreva sua nota corretamente, com um valor de 0 a 10."
   }

   else if (nota3 > 10) {
    elementoM.innerHTML = "A terceira nota possui um valor inválido. Por favor, escreva sua nota corretamente, com um valor de 0 a 10."
   }

   else if (mediaUser < 7) {
      elementoM.innerHTML = "Sua média foi: "+ mediaUser + ", e está reprovado."
     }


    else if (mediaUser => 7) {
      elementoM.innerHTML =  "Parabéns! Sua média foi " + mediaUser + " e você está aprovado!";
      ;
    }
  }
  
  // numero real
function calculaReal() {
  var num1 = parseInt(document.getElementById('num1User').value);
  var num2 = parseInt(document.getElementById('num2User').value);
  var num3 = parseInt(document.getElementById('num3User').value);
  var elementoR = document.getElementById("respostareal");
  if (num1 > num3 && num1 > num2) {
    elementoR.innerHTML = "O maior número é: " + num1;
  }
  else if (num2 > num1 && num2 > num3) {
    elementoR.innerHTML = "O maior número é: " + num2;
  }
  else if (num3 > num1 && num3 > num2) {
    elementoR.innerHTML = "O maior número é: " + num3;
  }
}

  // classificação do nadador

  function calculaClassificacao() {
    var idadeN = parseInt(document.getElementById('idadeNadador').value);

    var elementoR = document.getElementById("respostaclassificacao");
    if (idadeN <= 7 ) {
      elementoR.innerHTML = "Classificação: Infantil A";
    }
    else if (idadeN > 7 && idadeN <= 10 ) {
      elementoR.innerHTML = "Classificação: Infantil B";
    }
    else if (idadeN > 10 && idadeN <= 13 ) {
      elementoR.innerHTML = "Classificação: Juvenil A";
    }

    else if (idadeN > 13 && idadeN <= 17 ) {
      elementoR.innerHTML = "Classificação: Juvenil B";
    }

    else if (idadeN > 17 && idadeN ) {
      elementoR.innerHTML = "Classificação: Adulto";
    }
  }

  function calculaTriangulo() {
    var lado1 = parseInt(document.getElementById('lado1').value);
    var lado2 = parseInt(document.getElementById('lado2').value);
    var lado3 = parseInt(document.getElementById('lado3').value);
    var elementoTri = document.getElementById("respostatriangulo");
    if (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado1 + lado3 <= lado2) {
      elementoTri.innerHTML = "Não é um triângulo."
    }
    else if (lado1 == lado2 && lado2 == lado3 ) {
      elementoTri.innerHTML = "Triângulo validado! É equilátero."
    }
    else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1 ) {
     elementoTri.innerHTML = "Triângulo validado! É isósceles."
    }
    else {
    elementoTri.innerHTML = "Triângulo validado! É escaleno."
    }
  }