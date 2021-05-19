import React from 'react'

const StatusMessage = ({ winner, current }) => {

    const noMovesLeft = current.board.every((val) => val !== null);
    return (
        // <h2>
        //     {winner && `Winner is ${winner}`}
        //     {!winner && !noMoveLeft && `Next Player is ${current.isX ? 'X' : 'O'} `}
        //     {noMoveLeft && !winner && "Game Tied" }
        // </h2>
        <div className="status-message">
            {winner && (
                <>
                    Winner is{' '}
                    <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                        {winner}
                    </span>
                </>
            )}
            {!winner && !noMovesLeft && (
                <>
                    Next player is{' '}
                    <span className={current.isX ? 'text-green' : 'text-orange'}>
                        {current.isX ? 'X' : 'O'}{' '}
                    </span>
                </>
            )}
            {!winner && noMovesLeft && (
                <>
                    <span className="text-green">X</span> and{' '}
                    <span className="text-orange">O</span> tied
                </>
            )}
        </div>
    )
}

export default StatusMessage;
