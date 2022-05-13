// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName
//   const [name, setName] = React.useState(window.localStorage.getItem('name') ?? initialName) // when do you use ?? versus || - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     // your side-effect code here.
//     // this is where you can make HTTP requests or interact with browser APIs.
//     window.localStorage.setItem('name', name)
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra Credit Solution 1: lazy state initialization
// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName

//   function getNameFromLocal() {
//     return window.localStorage.getItem('name') ?? initialName
//   }

//   const [name, setName] = React.useState(() => getNameFromLocal()) // when do you use ?? versus || - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
//   const [name, setName] = React.useState(getNameFromLocal)
//   const [name, setName] = React.useState(() => window.localStorage.getItem('name') ?? initialName)

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     // your side-effect code here.
//     // this is where you can make HTTP requests or interact with browser APIs.
//     window.localStorage.setItem('name', name)
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra Credit Solution 2: effect dependencies
// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName

//   function getNameFromLocal() {
//     return window.localStorage.getItem('name') ?? initialName
//   }

//   const [name, setName] = React.useState(() => getNameFromLocal()) // when do you use ?? versus || - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     // your side-effect code here.
//     // this is where you can make HTTP requests or interact with browser APIs.
//     window.localStorage.setItem('name', name)
//   }, [name]) // dependencies

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra Credit Solution 3: custom hooks
// a custom hook is a function that uses hooks
function useLocalStorageState(nameObj) {

  const initialNameString = JSON.parse(JSON.stringify(nameObj)).initialName ?? nameObj // what if data is a number?
  console.log(initialNameString)

  function getNameFromLocal() {
    return window.localStorage.getItem('name') ?? initialNameString
  }
  const [name, setName] = React.useState(() => getNameFromLocal()) 

  React.useEffect(() => {
    // your side-effect code here.
    // this is where you can make HTTP requests or interact with browser APIs.
    window.localStorage.setItem('name', name)
  }, [name]) // dependencies

  return [name, setName]
}

// function useLocalStorageState(key, defaultValue = '') {

//   const initialNameString = JSON.parse(JSON.stringify(nameObj)).initialName ?? nameObj // what if data is a number?
//   console.log(initialNameString)

//   const [state, setState] = React.useState(() => window.localStorage.getItem(key) ?? defaultValue) 

//   React.useEffect(() => {
//     // your side-effect code here.
//     // this is where you can make HTTP requests or interact with browser APIs.
//     window.localStorage.setItem(key, state)
//   }, [key, state]) // dependencies

//   return [state, setState]
// }

// See final/02.extra-4.js for extra credit 4 solution

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = useLocalStorageState(initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
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
  return <Greeting />
}

export default App
