const GameState = {
    playerXWins: 0,
    playerOWins: 1,
    draw: 2,
    inProgress: 3,
  };
  
  export default GameState;

/*1- playerXWins: 0: Esta constante playerXWins é definida como 0, o que geralmente significa que representa o estado em que o jogador "X" venceu o jogo. Em muitos jogos, "X" é frequentemente associado ao primeiro jogador.

2- playerOWins: 1: A constante playerOWins é definida como 1, o que indica que representa o estado em que o jogador "O" venceu o jogo. "O" é frequentemente associado ao segundo jogador.

3- draw: 2: A constante draw é definida como 2, sugerindo que representa o estado de empate no jogo. Isso significa que nenhum dos jogadores venceu, e o jogo terminou sem um vencedor.

4- inProgress: 3: A constante inProgress é definida como 3. Isso indica que o jogo está em andamento e nenhum dos estados anteriores (vitória de "X", vitória de "O" ou empate) foi alcançado ainda. O jogo está no meio da partida.

Essas constantes são úteis para manter o controle do estado do jogo em um aplicativo ou jogo, permitindo que você determine facilmente se o jogo ainda está em andamento, se um jogador venceu ou se o jogo terminou em empate. Elas podem ser usadas em conjunto com o componente GameOver que você mencionou anteriormente para determinar qual mensagem deve ser exibida com base no estado atual do jogo.*/