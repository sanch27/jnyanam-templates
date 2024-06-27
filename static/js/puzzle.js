var board = null

var moveCount = 0

console.log(data)

var game = new Chess()
game.load(data.FEN)

function onDragStart(piece) {
    if (game.game_over()) return false
    if (piece.search(/^b/) !== -1) return false
}

function checkSolution(moveCount) {
    var possibleMoves = game.moves()
    if (game.history({ reversed_history: true })[0] == data.solution[moveCount - 1]) {
        if (possibleMoves.length === 0) { document.getElementById("message").innerText = "Puzzle completed!"; return } //Game End 
        game.move(data.solution[moveCount])
        board.position(game.fen())
        moveCount++
    }
    else {
        document.getElementById("message").innerText = "Wrong Answer!"
    }

}

function onDrop(source, target) {

    var move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    })
    moveCount = moveCount + 1
    if (move === null) return 'snapback'
    window.setTimeout(checkSolution(moveCount), 250)
}

function onSnapEnd() {
    board.position(game.fen())
}

var config = {
    draggable: true,
    position: game.fen(),
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
}