import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { Link } from "react-router-dom";

const Board = ({ nRows, nCols, chanceLightStartsOn }) => {
   const createBoard = () => {
      const grid = [];
      console.log(nCols, nRows);
      for (let y = 0; y < nRows; y++) {
         const row = [];
         for (let x = 0; x < nCols; x++) {
            row.push(Math.random() < chanceLightStartsOn);
         }
         grid.push(row);
      }
      return grid;
   };

   const [hasWon, setHasWon] = useState(false);
   const [board, setBoard] = useState(createBoard());

   const flipCellsAroundMe = (coord) => {
      const [x, y] = coord.split("-").map(Number);
      const newBoard = [...board];

      const flipCell = (x, y) => {
         x >= 0 &&
            x < nRows &&
            y >= 0 &&
            y < nCols &&
            (newBoard[x][y] = !newBoard[x][y]);
      };

      flipCell(x, y);
      flipCell(x, y + 1);
      flipCell(x, y - 1);
      flipCell(x + 1, y);
      flipCell(x - 1, y);

      setBoard(newBoard);

      const didWin = board.every((row) => row.every((cell) => !cell));

      setHasWon(didWin);
   };

   const cells = () => {
      const grid = [];
      for (let x = 0; x < nRows; x++) {
         const row = [];
         for (let y = 0; y < nCols; y++) {
            let coord = `${x}-${y}`;
            row.push(
               <Cell
                  key={coord}
                  isLit={board[x][y]}
                  flipCellsAroundMe={() => flipCellsAroundMe(coord)}
               />
            );
         }
         grid.push(<tr key={x}>{row}</tr>);
      }
      return grid;
   };

   return (
      <>
         {hasWon ? (
            <div className="content">
               <div>
                  <h1 className="neon-orange title">You</h1>
                  <h1 className="neon-blue title">Won!!</h1>
               </div>
               <div
                  className="neon-blue btn"
                  onClick={() => {
                     setBoard(createBoard());
                     setHasWon(false);
                  }}
               >
                  Reset
               </div>
               <Link className="neon-orange btn" to="/">
                  Select Difficulty
               </Link>
            </div>
         ) : (
            <div className="content">
               <div className="board-title">
                  <div className=" neon-orange title">Lights</div>
                  <div className="neon-blue title">Out</div>
               </div>
               <table className="Board">
                  <tbody>{cells()}</tbody>
               </table>
               <Link className="neon-green btn" to="/">
                  Select Difficulty
               </Link>
            </div>
         )}
      </>
   );
};

Board.defaultProps = {
   nRows: 5,
   nCols: 5,
   chanceLightStartsOn: 0.25,
};

export default Board;
