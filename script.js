let roundCount = 0;
const GameBoard = (function (){
    const board = new Array(9)
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const isValidMove = (index) => {
        return index >= 0 && index < board.length && board[index] === null;
    };

    const checkWinner = () => {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
        ) {
        return board[a]; 
        }
    }
    return null;
    };
    const placeMark = (index, mark) => {
    if (!isValidMove(index)) return false;
    board[index] = mark;
    return true;
    };

    const isBoardFull = () => board.every(cell => cell !== null);
    const getBoard = () => { return [...board]; };

    const getGameStatus = () => {
    const winner = checkWinner();
    if (winner) return { winner };
    if (isBoardFull()) return { tie: true };
    return { ongoing: true };
    };

    const reset = () => {
        board.fill(null);
    };
    return { placeMark, getBoard, getGameStatus,reset,};

})();

function createPLayer (playerName, playerMark){
    return{playerName , playerMark}
}
const GameController = ( function(){
    let players = [];
    let activePlayer = null;
    let gameOver = false;
    
    const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };


    const startGame = (playerOneName, playerTwoName) => {
    players = [
      createPLayer(playerOneName, "X"),
      createPLayer(playerTwoName, "O"),
    ];

    activePlayer = players[0];
    gameOver = false;
    gameBoard.reset();
  };
})();