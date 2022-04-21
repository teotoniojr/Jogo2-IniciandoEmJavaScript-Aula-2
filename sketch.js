function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(imagemDaEstrada);

  mostrarAtor();
  mostrarCarro();
  movimentarCarro();
  movimentarAtor();
  voltaCarroPosicaoInicial();
}

// Organizar o código em arquivos

// Podemos reorganizar nosso código, criando um arquivo para cada elemento que vamos programar. No nosso caso, podemos dividir o algoritmo em imagens, ator e carros.
// Para isso vamos em "Aquivos do Esboço" e "Criar Arquivo"
// Criamos um arquivo chamado "imagens.js"
// Levamos as variaveis da Imagem para esse arquivo juntamente com a função preload(){}
// Depois vamos ao arquivo index.html 
// Duplicamos o codico <script src="sketch.js"></script>
// Substituimos por <script src="imagens.js"></script>
// Agora é só repetir para o ator e o carro;