// Carro 01
let xCarro1 = 650;
let yCarro1 = 40;
let velocidadeCarro1 = 2.5

//Carro 02
let xCarro2 = 650;
let yCarro2 = 97;
let velocidadeCarro2 = 3.2

//Carro 03
let xCarro3 = 650;
let yCarro3 = 150;
let velocidadeCarro3 = 4.2
    

function mostrarCarro() {
  image(imagemCarro1, xCarro1, yCarro1, 50, 40);
  image(imagemCarro2, xCarro2, yCarro2, 50, 40);
  image(imagemCarro3, xCarro3, yCarro3, 50, 40);
}
function movimentarCarro() {
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}
function voltaCarroPosicaoInicial(){
  if (xCarro1 < -50){
    xCarro1 = 650
  }
  if (xCarro2 < -50){
    xCarro2 = 650
  }
  if (xCarro3 < -50){
    xCarro3 = 650
  }
}

// Adicionando mais carros...

// Para adicionar mais carros, vamos no arquivo de imagens e inserimos as novas variaveis imagemCarro2  e imagemCarro3, utilizamos a função preload para referenciar as imagens para essas variaveis
// Depois vamos criar as variaveis para o carro 2 e 3
// Por fim, na função mostrarCarro(){} inserimos as coordenadas das nossas imagens e seus tamanhos.
// Adicionamos uma movimentação
// Criamos uma variável velocidadeCarro para o código ficar mais expressivo;

// Fazendo o carro voltar

// Para isso vamos criar uma função que reconheçe o valor da posição x do carro, e quando esse valor for menor que -50 (para incluir o tamnho do carro) fazemos com que o carro volte para a posição inicial;
//  if (xCarro1 < -50){
//    xCarro1 = 650
//  }
// Agora é só repetir para os outros carros
