// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// function Greeting(props) {
//   // 💣 delete this variable declaration and replace it with a React.useState call
//   // const name = ''
//   const initialName = props.initialName || ""
function Greeting({ initialName = '' }) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [name, setName] = React.useState(initialName)
  // we use hooks instead of a variable since the function Greeting is only called once
  // and never rerenders the DOM but the React hooks will rerender the element

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName=''/>
}

export default App
