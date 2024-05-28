import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare,turns}){
    let gameBoard=initialGameBoard;
for (const turn of turns){
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
}

// const [gameBoard,setGameBoard]=useState(initialGameBoard);

// function handleSelectSquare(rowindex,colindex){
//     setGameBoard((prevgameBoard)=>{
//         const updatedBoard=[...prevgameBoard.map(innerArray=>[...innerArray])];
//         updatedBoard[rowindex][colindex]=activePlayerSymbol;
//     return updatedBoard;
//     });
//     onSelectSquare();
// }
    return(
 <ol id="game-board">
    {gameBoard.map((row,rowindex)=><li key={rowindex}>
        <ol>
            {row.map((playerSymbol,colindex)=><li key={colindex}>
                <button onClick={()=> onSelectSquare(rowindex,colindex)} 
                disabled={playerSymbol!==null}>
                {playerSymbol}
                </button>
            </li>)}
        </ol>

    </li>)}
 </ol>
    );
}