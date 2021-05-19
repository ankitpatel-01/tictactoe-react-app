import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./style/root.scss";
import { calculateWinner } from "./winnerLogic";

const App = () => {

  const NEW_GAME = [{ board: Array(9).fill(null), isX: true }];

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => {

    if (current.board[position] || winner) {
      return;
    }

    setHistory((currentState) => {

      const last = currentState[currentState.length - 1];

      const newBoard = last.board.map((square, pos) => {

        if (pos === position) {
          return last.isX ? 'X' : 'O';
        }

        return square;
      });
      return currentState.concat({ board: newBoard, isX: !last.isX });
    });
    setCurrentMove(currentState => currentState + 1);
  };

  const moveTo = (index) => {
    setCurrentMove(index)
  };

  const startNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic <span className="text-green">Tac</span> Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button className={`btn-reset ${winner ? 'active' : ''}`} type="button" onClick={startNewGame}>New Game</button>
      <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"> </div>
    </div>
  );
};

export default App;
