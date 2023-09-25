import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className=" bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;

/*1- Importações (import Strike from "./Strike"; e import Tile from "./Tile";): Essas linhas de código importam os componentes Strike e Tile de seus respectivos arquivos. Esses componentes provavelmente são usados no interior do componente Board.

2- Função Board({ tiles, onTileClick, playerTurn, strikeClass }): Essa função é a definição do componente Board. Ela recebe várias props como argumentos e retorna um elemento JSX que representa o tabuleiro do jogo.

3- Div com a classe "board": Esta é uma div com a classe CSS "board" que envolve todo o conteúdo do tabuleiro. Isso é usado para aplicar estilos específicos ao tabuleiro.

4- 9 componentes Tile: Dentro da div com a classe "board", há 9 componentes Tile. Cada um desses componentes representa uma célula do tabuleiro do jogo. Eles recebem várias props, incluindo playerTurn, onClick, e value, que são usadas para determinar o estado da célula, a ação a ser realizada quando a célula é clicada e o valor atual da célula (possivelmente "X", "O" ou vazio).

5- Classes CSS nas células (className): Cada componente Tile tem uma ou mais classes CSS especificadas no atributo className. Essas classes provavelmente são usadas para aplicar estilos específicos a cada célula do tabuleiro, como bordas ou cores.

6- Componente Strike no final: Após os 9 componentes Tile, há um componente Strike. Esse componente provavelmente é usado para exibir um elemento gráfico quando ocorre uma linha, coluna ou diagonal de células com o mesmo valor (como uma linha vencedora em um jogo da velha).

No geral, o componente Board é responsável por renderizar o tabuleiro do jogo e seus componentes Tile representam as células individuais do tabuleiro, enquanto o componente Strike pode ser usado para indicar uma vitória ou resultado especial no jogo. Essa estrutura parece ser típica de um jogo da velha, mas pode ser adaptada para outros jogos de tabuleiro similares. */