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
})();

function createPLayer (playerName, playerMark){
    return{playerName , playerMark}
}
const GameController = ( function(){
    const player1 = createPLayer("player1","X")
    const player2 = createPLayer("player2","O")
    const playRound = () => {
        
    }
})();