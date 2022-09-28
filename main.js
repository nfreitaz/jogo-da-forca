
let catalogo = ["AZUL", "ROSA", "VERDE", "LARANJA", "ROXO", "PRETO"]
let palavraSorteada = catalogo[Math.floor(Math.random() * catalogo.length)];
let chuteErrado = [];
let chuteCerto = [];

function limpaTela() {
  document.getElementById('abertura-jogo').style.display = "none";
  document.getElementById('tela-jogo').style.display = "block";
  iniciaJogo();
}

function iniciaJogo() {
  document.addEventListener("keydown", (evento) => {
    let teste = evento.keyCode;
    if (verificaEntrada(teste)) {
      const letra = evento.key;
      if (chuteErrado.includes(letra)) {
        mostraChuteRepetido();
      } else {
        if (palavraSorteada.includes(letra)) {
          chuteCerto.push(letra);
        } else {
          chuteErrado.push(letra)
        }
      }
      atualizaJogo();

    }
  });

}


function atualizaJogo() {
  mostraChuteErrado();
  mostraChuteCerto();
  desenhaBoneco();
  jogaForca();
}

function mostraChuteErrado() {
  let erroChute = document.getElementById("letras-erradas");
  erroChute.innerHTML = "<h3>Letras erradas</h3>";
  chuteErrado.forEach(letra => {
    erroChute.innerHTML += `<span>${letra}</span>`
  });
}

function mostraChuteCerto() {
  let resultado = document.getElementById("palavra-sorteada");
  resultado.innerHTML = "";
  palavraSorteada.split("").forEach((letra) => {
    if (chuteCerto.includes(letra)) {
      resultado.innerHTML += `<span>${letra}</span>`;
    } else {
      resultado.innerHTML += `<span>_</span>`;
    }
  });
}

function jogaForca() {
  let caixaTexto = "";
  let resultado = document.getElementById("palavra-sorteada");
  let corpoBoneco = document.querySelectorAll(".corpo-boneco");

  if (chuteErrado.length === corpoBoneco.length) {
    caixaTexto = "Poxa vida, você perdeu!";
  }

  if (palavraSorteada === resultado.innerText) {
    caixaTexto = "Uhuull!! Parabéns! Você acertou!";
  }
  if (caixaTexto) {
    document.getElementById("caixa-de-texto").innerHTML = caixaTexto;
    document.getElementById("alerta-mensagem").style.display = "flex"
  }

}

function desenhaBoneco() {
  let corpoBoneco = document.querySelectorAll(".corpo-boneco");
  for (let i = 0; i < chuteErrado.length; i++) {
    corpoBoneco[i].style.display = "block";
  }
}

function reiniciarJogo() {
  window.location.reload();
}

function mostraChuteRepetido() {
  alert('palavra é repetida');

}

function verificaEntrada(teste) {
  return teste >= 65 && teste <= 90;
}

function novaPalavra() {
  let caixaEntrada = document.getElementById('nova-palavra').style.display = "block";
  let botaoNovaPalavra = document.getElementById('btn-nova-palavra').style.display = "block";
}
function adicionaNovaPalavra() {
  let caixaEntrada = document.getElementById('nova-palavra').style.display = "none";
  let btnNovaPalavra = document.getElementById('btn-nova-palavra').style.display = "none";
  let btnAdicionaPalavra = document.getElementById('btn-adiciona-palavra').style.display = "none";

  let entrada = document.getElementById('nova-palavra').value;
  catalogo.push(entrada);
  //console.log(catalogo);
}
