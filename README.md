# Jogo2-IniciandoEmJavaScript-Aula-2
Aprendendo a separar os comandos por arquivo

Nessa aula vimos como:
* Separar o algoritmo por arquivos .js;
* Organizar melhor o algoritmo;
* Adicionar mais carros;
* Fazer os carros ficarem em loop;

## Instruções 

### Organizar o código em arquivos

* Podemos reorganizar nosso código, criando um arquivo para cada elemento que vamos programar. No nosso caso, podemos dividir o algoritmo em imagens, ator e carros.
* Para isso vamos em "Aquivos do Esboço" e "Criar Arquivo"
* Criamos um arquivo chamado "imagens.js"
* Levamos as variaveis da Imagem para esse arquivo juntamente com a função preload(){}
* Depois vamos ao arquivo index.html 
* Duplicamos o codico <script src="sketch.js"></script>
* Substituimos por <script src="imagens.js"></script>
* Agora é só repetir para o ator e o carro;

### Adicionando mais carros...

* Para adicionar mais carros, vamos no arquivo de imagens e inserimos as novas variaveis imagemCarro2  e imagemCarro3, utilizamos a função preload para referenciar as imagens para essas variaveis
* Depois vamos criar as variaveis para o carro 2 e 3
* Por fim, na função mostrarCarro(){} inserimos as coordenadas das nossas imagens e seus tamanhos.
* Adicionamos uma movimentação
* Criamos uma variável velocidadeCarro para o código ficar mais expressivo;

### Fazendo o carro voltar

* Para isso vamos criar uma função que reconheçe o valor da posição x do carro, e quando esse valor for menor que -50 (para incluir o tamnho do carro) fazemos com que o carro volte para a posição inicial;
*   if (xCarro1 < -50){
   xCarro1 = 650
   }
* Agora é só repetir para os outros carros   
