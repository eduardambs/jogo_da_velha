import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import gameOverSoundAsset from "../sons/game_over.wav";
import clickSoundAsset from "../sons/click.wav";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  return (
    <div>
      <h1>JOGO DA VELHA</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
}

export default TicTacToe;

/*1- Importações (import { useState, useEffect } from "react"; e várias outras importações): Essas linhas de código importam vários módulos e recursos necessários para criar o componente TicTacToe, incluindo os hooks do React useState e useEffect, bem como outros componentes como Board, GameOver, GameState, e arquivos de som.

2- Configuração de Sons (const gameOverSound = new Audio(gameOverSoundAsset); e const clickSound = new Audio(clickSoundAsset);): Essas duas linhas de código configuram elementos Audio para reproduzir sons do jogo. gameOverSound é usado para reproduzir um som quando o jogo termina, e clickSound é usado para reproduzir um som quando um jogador clica em uma célula do tabuleiro. As variáveis gameOverSound e clickSound são configuradas com os caminhos dos arquivos de som e seus volumes.

3- Constantes (PLAYER_X e PLAYER_O): Essas constantes definem os valores dos jogadores "X" e "O", que são usados para representar os jogadores no jogo.

4- Matriz de Combinações Vencedoras (winningCombinations): Esta matriz contém objetos que representam todas as possíveis combinações vencedoras no jogo da velha. Cada objeto inclui um conjunto de índices de células que, se preenchidos pelo mesmo jogador, resultarão em uma vitória. Além disso, cada objeto possui uma classe CSS associada para destacar a linha, coluna ou diagonal vencedora.

5- Função checkWinner(tiles, setStrikeClass, setGameState): Esta função é responsável por verificar se há um vencedor no jogo ou se ocorreu um empate. Ela recebe a matriz tiles atual, a função setStrikeClass para atualizar a classe de destaque, e a função setGameState para atualizar o estado do jogo com base no resultado.

6- Componente TicTacToe: Este é o componente principal. Ele utiliza os hooks useState para gerenciar o estado do jogo. Aqui estão algumas partes importantes deste componente:
tiles: Mantém o estado das células do tabuleiro.
playerTurn: Mantém o jogador atual (X ou O).
strikeClass: Mantém a classe de destaque a ser aplicada ao tabuleiro.
gameState: Mantém o estado atual do jogo (em progresso, vitória de X, vitória de O ou empate).
Funções de manipulação de eventos, como handleTileClick para lidar com cliques nas células e handleReset para reiniciar o jogo.
Efeitos colaterais que disparam quando ocorrem mudanças nos estados, como verificar o vencedor, reproduzir sons e atualizar o estado de jogo.

7- Renderização: O componente TicTacToe renderiza o título do jogo, o componente Board (que exibe o tabuleiro), o componente GameOver (que exibe mensagens de fim de jogo) e o componente Reset (que permite reiniciar o jogo).

Ou seja, o componente TicTacToe é o coração do jogo da velha, gerenciando o estado do jogo, as ações do jogador e a lógica para determinar o vencedor ou um empate. Ele também cuida da reprodução de sons e da renderização dos componentes para interagir com o jogador.*/