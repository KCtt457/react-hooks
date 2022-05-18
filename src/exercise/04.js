// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import { useLocalStorageState } from '../utils' // Extra Credit 2

// From 02.js
// function useLocalStorageState(key, defaultValue = Array(9).fill(null)) {
//   const [state, setState] = React.useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue) 

//   React.useEffect(() => {
//     // your side-effect code here.
//     // this is where you can make HTTP requests or interact with browser APIs.
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state]) // dependencies

//   return [state, setState]
// }

// function Board() {
//   // 🐨 squares is the state for this component. Add useState for squares
//   // const [squares, setSquares] = React.useState(Array(9).fill(null))

//   // Extra Credit 1 Solution
//   const [squares, setSquares] = useLocalStorageState('squares', Array(9).fill(null))

//   // 🐨 We'll need the following bits of derived state:
//   // - nextValue ('X' or 'O')
//   // - winner ('X', 'O', or null)
//   // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
//   // 💰 I've written the calculations for you! So you can use my utilities
//   // below to create these variables
//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   // This is the function your square click handler will call. `square` should
//   // be an index. So if they click the center square, this will be `4`.
//   function selectSquare(square) {
//     // 🐨 first, if there's already winner or there's already a value at the
//     // given square index (like someone clicked a square that's already been
//     // clicked), then return early so we don't make any state changes
//     if (winner || squares[square]) {
//       return
//     }
//     //
//     // 🦉 It's typically a bad idea to mutate or directly change state in React.
//     // Doing so can lead to subtle bugs that can easily slip into production.
//     //
//     // 🐨 make a copy of the squares array // mutation is bad
//     // 💰 `[...squares]` will do it!)
//     const squaresCopy = [...squares]
//     //
//     // 🐨 set the value of the square that was selected
//     // 💰 `squaresCopy[square] = nextValue`
//     squaresCopy[square] = nextValue
//     //
//     // 🐨 set the squares to your copy
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     // 🐨 reset the squares
//     // 💰 `Array(9).fill(null)` will do it!
//     setSquares(Array(9).fill(null))
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       {/* 🐨 put the status in the div below */}
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// Extra Credit 3 Solution
function Board(props) {
    const { onClick, squares } = props;

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {

   // Extra Credit 1 Solution
  //  const [currentSquares, setCurrentSquares] = useLocalStorageState('squares', Array(9).fill(null))
  const [history, setHistory] = useLocalStorageState('history', [Array(9).fill(null)])
  const [currentStep, setCurrentStep] = React.useState(0)


  const currentSquares = history[currentStep]
  //  const [moves, setMoves] = [<button onClick={setCurrentSquares(Array(9).fill(null))}>Go to game start</button>]

   // 🐨 We'll need the following bits of derived state:
   // - nextValue ('X' or 'O')
   // - winner ('X', 'O', or null)
   // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
   // 💰 I've written the calculations for you! So you can use my utilities
   // below to create these variables
   const nextValue = calculateNextValue(currentSquares)
   const winner = calculateWinner(currentSquares)
   const status = calculateStatus(winner, currentSquares, nextValue)

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `4`.
  function selectSquare(square) {
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes
    if (winner || currentSquares[square]) {
      return
    }
    //
    // 🦉 It's typically a bad idea to mutate or directly change state in React.
    // Doing so can lead to subtle bugs that can easily slip into production.
    //
    // 🐨 make a copy of the squares array // mutation is bad
    // 💰 `[...squares]` will do it!)
    const squaresCopy = [...currentSquares]
    //
    // 🐨 set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    squaresCopy[square] = nextValue
    const historyCopy = [...history, squaresCopy]
    //
    // 🐨 set the squares to your copy
    setCurrentSquares(squaresCopy)
    // console.log(currentSquares)
    // setHistory(historyCopy)
    // console.log(history)
  }

  const moves = history.map((board, i) => {
    const desc = i === 0 ? 'Go to game start' : `Go to move #${i}`;
    const isCurrentStep = i === currentStep;
    return <li key={i}>
      <button disabled={isCurrentStep} onClick={() => setCurrentStep(i)}>{desc} {isCurrentStep ? '(current)' : null}</button>
      </li>
  })

  // React.useEffect(() => {
  //   const movesCopy = history.map((board, i) => (
  //     <button onClick={setCurrentSquares(board)}>Go to move #{i}</button>
  //   ))

  //   setMoves([<button onClick={setCurrentSquares(Array(9).fill(null))}>Go to game start</button>, ...movesCopy])

  // }, [history, setCurrentSquares, setMoves])

  function restart() {
    // 🐨 reset the squares
    // 💰 `Array(9).fill(null)` will do it!
    setCurrentSquares(Array(9).fill(null))
    // setHistory([])
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
