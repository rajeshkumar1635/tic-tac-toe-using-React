import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({onSelectSquare,activePlayerSymbol}){
const [gameBoard,setGameBoard]=useState(initialGameBoard);

function handleSelectSquare(rowindex,colindex){
    setGameBoard((prevgameBoard)=>{
        const updatedBoard=[...prevgameBoard.map(innerArray=>[...innerArray])];
   updatedBoard[rowindex][colindex]=activePlayerSymbol;
return updatedBoard;
    });
    onSelectSquare();
}
    return(
 <ol id="game-board">
    {gameBoard.map((row,rowindex)=><li key={rowindex}>
        <ol>
            {row.map((playerSymbol,colindex)=><li key={colindex}>
                <button onClick={()=>handleSelectSquare(rowindex,colindex)}>
                {playerSymbol}
                </button>
            </li>)}
        </ol>

    </li>)}
 </ol>
    );
}