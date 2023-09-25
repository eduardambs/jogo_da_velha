import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O Venceu!</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Venceu!</div>;
    case GameState.draw:
      return <div className="game-over">Empate!</div>;
    default:
      return <></>;
  }
}

export default GameOver;

/*1- Importação (import GameState from "./GameState";): Essa linha de código importa o módulo GameState do arquivo "GameState.js". Provavelmente, o módulo GameState contém constantes ou enums que representam os diferentes estados possíveis do jogo.

2- Função GameOver({ gameState }): Esta função é a definição do componente GameOver. Ela recebe uma prop chamada gameState, que é usada para determinar o estado atual do jogo (como vitória de "O", vitória de "X" ou empate) e renderizar uma mensagem apropriada com base nesse estado.

3- Switch Statement: O switch é uma estrutura condicional que avalia o valor da prop gameState e, com base nesse valor, retorna um elemento JSX correspondente. Os casos possíveis são os seguintes:
GameState.inProgress: Se o estado do jogo estiver em progresso, o componente retorna um elemento vazio <></>. Isso geralmente significa que o jogo ainda não terminou.
GameState.playerOWins: Se o jogador "O" venceu, o componente renderiza a mensagem "O Venceu!" dentro de uma div com a classe CSS "game-over".
GameState.playerXWins: Se o jogador "X" venceu, o componente renderiza a mensagem "X Venceu!" dentro de uma div com a classe CSS "game-over".
GameState.draw: Se o jogo terminou em empate, o componente renderiza a mensagem "Empate!" dentro de uma div com a classe CSS "game-over".
default: Qualquer outro valor de gameState resultará em um elemento vazio <></>.

4- Exportação (export default GameOver;): O componente GameOver é exportado para que possa ser importado e utilizado em outros lugares de sua aplicação.

Resumindo, o componente GameOver serve para exibir uma mensagem de encerramento de jogo (como vitória de um jogador ou empate) com base no estado atual do jogo, que é passado como uma prop chamada gameState. Ele usa um switch para determinar qual mensagem renderizar com base no valor dessa prop e retorna o elemento JSX apropriado para representar essa mensagem. Este componente pode ser usado em jogos de tabuleiro ou aplicativos onde seja necessário indicar o resultado de um jogo.*/