document.addEventListener("DOMContentLoaded", () => {
    const imagem = document.querySelector(".imagem");
    const alturaImagem = imagem.clientHeight;
    const alturaTela = window.innerHeight - 256; // Subtrai a altura da imagem da altura total da tela
    const larguraTela = window.innerWidth;
    const larguraImagem = imagem.clientWidth;

    // Função para gerar uma posição Y aleatória dentro dos limites da tela visível
    function gerarPosicaoY() {
        return Math.floor(Math.random() * alturaTela) + "px";
    }

    // Atualize a posição Y da imagem a cada vez que a animação reiniciar
    imagem.addEventListener("animationiteration", () => {
        const novaPosicaoY = gerarPosicaoY();
        imagem.style.top = novaPosicaoY;
    });

    // Verifique quando a imagem atinge a borda direita e atualize a posição Y
    function verificarBordaDireita() {
        const posicaoX = parseFloat(getComputedStyle(imagem).left);
        if (posicaoX >= larguraTela) {
            const novaPosicaoY = gerarPosicaoY();
            imagem.style.top = novaPosicaoY;
        }
    }

    // Inicie a verificação da borda direita em intervalos regulares
    setInterval(verificarBordaDireita, 100);

});


//Fim da aleatorização da imagem e inicio do botão de tornar a div visivel

// Obtém referências aos elementos do HTML
const botaoMostrarDiv = document.getElementById("Rickbutton");
const minhaDiv = document.getElementById("images");
const minhaDiv2 = document.getElementById("estrela");

// Adiciona um ouvinte de evento para o botão
botaoMostrarDiv.addEventListener("click", function() {
    // Verifica se a classe "invisivel" está presente na <div>
    if (minhaDiv.classList.contains("invisivel")){ 
        // Remove a classe "invisivel" para tornar a <div> visível
        minhaDiv.classList.remove("invisivel");
        minhaDiv2.classList.remove("invisivel");
    }

    
});


const switchModal = () => {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    const actualStyle = modal.style.display
    if(actualStyle == 'block'){
        modal.style.display = 'none'
        overlay.style.display = 'none'
    }else{
        modal.style.display = 'block'
        overlay.style.display = 'block'

    }
}
//pegar o inicializador do modal
const iniModal = document.querySelector('.estrela')
const wasabi = document.querySelector('.wasabi')
const niver = document.querySelector('.niver')
const rick = document.getElementById('Rick')
const happy = document.getElementById('Happy')
iniModal.addEventListener('click', switchModal)

window.onclick = function(event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
        switchModal()
        iniModal.style.display='none'
        wasabi.style.display='block'
        niver.style.display='block'
    }   
}


