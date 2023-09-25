function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null;
    if (value == null && playerTurn != null) {
      hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }
    return (
      <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
      </div>
    );
  }
  
  export default Tile;

/*1- Função Tile({ className, value, onClick, playerTurn }): Esta função é a definição do componente Tile. Ela recebe várias props como argumentos, que são usadas para configurar e renderizar a célula. Aqui estão as explicações de cada prop:
className: Esta prop permite que você passe classes CSS adicionais para a célula, o que pode ser usado para aplicar estilos específicos a essa célula.
value: Esta prop representa o valor atual da célula (pode ser "X", "O" ou null para célula vazia).
onClick: Esta prop é uma função de callback que será chamada quando a célula for clicada pelo jogador.
playerTurn: Esta prop indica qual jogador deve estar em destaque (para fins de realce visual) quando o mouse passar sobre a célula. Pode ser "X", "O" ou null quando não é a vez de nenhum jogador.

2- Variável hoverClass: Esta variável é usada para calcular a classe de realce visual quando o mouse passa sobre a célula. Ela é inicializada como null e só recebe um valor quando a célula está vazia (value é null) e é a vez de um jogador (playerTurn não é null). A classe é determinada com base no jogador atual, ou seja, "X-hover" ou "O-hover", dependendo de quem está prestes a fazer uma jogada.

3- Elemento JSX (<div onClick={onClick} className={tile ${className} ${hoverClass}}>{value}</div>): Este é o elemento JSX que representa a célula. Aqui está o que cada parte faz:
onClick={onClick}: Configura um evento de clique na célula que chamará a função onClick quando a célula for clicada pelo jogador.
className={tile ${className} ${hoverClass}}: Define as classes CSS para a célula. Isso inclui a classe base "tile", as classes adicionais passadas por className, e a classe de realce calculada com base em hoverClass.
{value}: Exibe o valor atual da célula ("X", "O" ou null) no interior da célula.

4- Exportação (export default Tile;): O componente Tile é exportado para que possa ser importado e utilizado em outros lugares de sua aplicação.

Afinal, o componente Tile é responsável por renderizar uma célula no tabuleiro do jogo da velha. Ele recebe informações sobre o estado da célula, o jogador atual e as classes CSS para estilização, permitindo a interação do jogador ao clicar na célula e destacando a célula quando é a vez de um jogador fazer uma jogada.*/