import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Jogar Novamente.
    </button>
  );
}

export default Reset;

/* 1- Importação (import GameState from "./GameState";): Essa linha de código importa o módulo GameState do arquivo "GameState.js", o qual contém as constantes que representam os diferentes estados possíveis do jogo.

2- Função Reset({ gameState, onReset }): Esta função é a definição do componente Reset. Ela recebe duas props como argumentos:
gameState: Esta prop é usada para determinar o estado atual do jogo, com base nas constantes definidas no módulo GameState.
onReset: Esta prop é uma função de callback que será executada quando o botão "Jogar Novamente" for clicado. Provavelmente, essa função é usada para reiniciar o jogo.

3- Condição if (gameState === GameState.inProgress): Este trecho de código verifica se o gameState é igual a GameState.inProgress, ou seja, se o jogo está em andamento. Se o jogo estiver em andamento, o componente não renderiza nada (retorna null ou um elemento vazio <></>), o que significa que o botão "Jogar Novamente" não será exibido.

4- Botão "Jogar Novamente": Se o jogo não estiver em andamento (ou seja, não estiver no estado GameState.inProgress), o componente renderiza um botão com o texto "Jogar Novamente". Esse botão tem um evento onClick associado à prop onReset, o que significa que quando o botão é clicado, a função onReset será chamada.

5- Classe CSS (className="reset-button"): O botão tem uma classe CSS chamada "reset-button", que pode ser usada para aplicar estilos específicos ao botão, como cores, fontes ou tamanhos.

6- Exportação (export default Reset;): O componente Reset é exportado para que ele possa ser importado e utilizado em outros lugares de sua aplicação.

Ou seja, o componente Reset é usado para renderizar um botão "Jogar Novamente" apenas quando o jogo não está em andamento. Quando o botão é clicado, a função onReset passada como prop é chamada, o que provavelmente reiniciará o jogo ou realizará alguma ação relacionada ao reinício do jogo.*/