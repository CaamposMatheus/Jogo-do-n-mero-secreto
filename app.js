// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";
// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaDeNumerosSorteados = [];
let quantidadeNumeroSecreto = 1000;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

mensagemInicial();
function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag)
   campo.innerHTML = texto; 
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numeral secreto");
    exibirTextoNaTela("p", `Digite um número entre 1 e ${quantidadeNumeroSecreto}`);
}

function verificarChute(){
    let chute = document.querySelector("input").value
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parábens! Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `você descobriu o número secreto com  ${tentativas} ${palavraTentativa}! `;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        }
    else{
            if(chute > numeroSecreto){
                exibirTextoNaTela("h1", "Que pena, você errou!.");
                exibirTextoNaTela("p", "Seu número foi maior");
            }
            else{
                exibirTextoNaTela("h1", "Que pena, você errou!");
                exibirTextoNaTela("p", "Seu chute foi menor.");
            }
            tentativas++;
            limparCampos();
        }
    }


function gerarNumeroaleatorio(){
     let numeroEscolhido = parseInt(Math.random() * quantidadeNumeroSecreto + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == quantidadeNumeroSecreto){
    listaDeNumerosSorteados = []
}

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroaleatorio();
    } 
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampos(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroaleatorio();
    limparCampos();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}


