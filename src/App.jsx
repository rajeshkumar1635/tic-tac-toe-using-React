import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./Components/winning-combination";
import GameOver from "./Components/GameOver";
const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer ='X';
    if (gameTurns.length>0 && gameTurns[0].player==='X'){
      currentPlayer='O';
    }
    return currentPlayer;
}

export default function App() {
  //const [activePlayer,setActivePlayer]=useState('X');
  const [gameTurns,setGameTurns]=useState([]);
  const activePlayer=deriveActivePlayer(gameTurns);

  let gameBoard=initialGameBoard;

for (const turn of gameTurns){
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
}
let winner;

for (const combination of WINNING_COMBINATIONS){
  const firstSquare=gameBoard[combination[0].row][combination[0].column];
  const secondSquare=gameBoard[combination[1].row][combination[1].column];
  const thirdSquare=gameBoard[combination[2].row][combination[2].column];

  if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
winner =firstSquare;

  }
}
const hasDraw=gameTurns.length===9 && !winner;

function handleSelectSquare(rowIndex,colIndex){
  setGameTurns(prevTurns=> {
    const currentPlayer=deriveActivePlayer(prevTurns);

    const updatedTurns=[{ square:{row : rowIndex,col :colIndex},
    player: currentPlayer},...prevTurns];

    return updatedTurns;
  });
}

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
      <Player 
      initialName="Player 1" 
      symbol="X" 
      isActive={activePlayer==='X'}/>
      <Player 
      initialName="Player 2"
       symbol="O" 
       isActive={activePlayer==='O'}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner}/>}
      <GameBoard 
      onSelectSquare={handleSelectSquare}
      board={gameBoard} 
      />
      
    </div>
    <Log turns={gameTurns}></Log> 
  </main>;
}

