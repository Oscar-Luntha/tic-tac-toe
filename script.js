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

})();

function createPLayer (playerName, playerMark){
    return{playerName , playerMark}
}
const GameController = ( function(){
    const player1 = createPLayer("player1","X")
    const player2 = createPLayer("player2","O")
    let activePlayer = player1 ? player2 : player1
    
    let index = 0;
    function placeMarker(index){
        if(GameBoard.isValidMove(index)){
            GameBoard.updateBoard(index, activePlayer.playerMark )
        }
    }
})();