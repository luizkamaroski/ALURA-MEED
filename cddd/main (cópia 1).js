const teclas = document.querySelectorAll('.tecla'); // "Table com todas as teclas"
let n = 0; //Declara a variavel n para ser usada na verificação
while (n < 9) {// Aumenta o valor do n até 9
    function Som(idAudio)
    { document.querySelector(idAudio).play();}
    const instrumento = teclas [n].classList[1]; // Busca a segunda classe do elemento  e retorna em string
    teclas[n].onlick = function (){ // Identifica o instrumento a ser tocado
     Som('#som'+instrumento);
    }
    n += 1; //Aumenta o valor n de 1 em 1 para evitaar um loop infinito
    console.log(n);
      }