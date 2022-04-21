// Variaveis do Ator
let yAtor = 368;
let xAtor = 120

function mostrarAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentarAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}