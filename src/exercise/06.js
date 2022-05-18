// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [pokemon, setPokemon] = React.useState(null)
//   const [error, setError] = React.useState(null)
//   const [status, setStatus] = React.useState('idle')
//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   React.useEffect( () =>
//     {if (pokemonName === '') {
//       return
//     } else {
//       setPokemon(null)
//       setStatus('pending')
//       fetchPokemon(pokemonName).then(
//         pokemonData => {setPokemon(pokemonData); setStatus('resolved')},
//       ).catch(error => {setError(error); setStatus('rejected')})

//     }}, [pokemonName]
//   )
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
//   // (This is to enable the loading state when switching between different pokemon.)
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => {/* update all the state here */},
//   //   )
//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />

//   // 💣 remove this
//   if (pokemonName === '') {
//     return 'Submit a pokemon'
//   } else if (error) {
//     return <div role="alert">There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre></div>
//   } else if (pokemon === null) {
//     return <PokemonInfoFallback name={pokemonName} />
//   } else {
//     return  <PokemonDataView pokemon={pokemon} />
//   }
// }


// Extra Credit 3 Solution
// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [state, setState] = React.useState({status: 'idle', pokemon: null})
//   const [error, setError] = React.useState(null)

//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   React.useEffect( () =>
//     {if (pokemonName === '') {
//       return
//     } else {
//       setState({status: 'pending', pokemon: null})
//       fetchPokemon(pokemonName).then(
//         pokemonData => {setState({status: 'resolved', pokemon: pokemonData})},
//       ).catch(error => {setError(error); setState({status: 'rejected', pokemon: null})})

//     }}, [pokemonName]
//   )
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
//   // (This is to enable the loading state when switching between different pokemon.)
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => {/* update all the state here */},
//   //   )
//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />

//   // 💣 remove this
//   if (state.status === 'idle') {
//     return 'Submit a pokemon'
//   } else if (state.status === 'rejected') {
//     return <div role="alert">There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre></div>
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />
//   } else if (state.status === 'resolved') {
//     return  <PokemonDataView pokemon={state.pokemon} />
//   }
// }

// Extra Credit 4 Solution
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, errorMessage: '' };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true, errorMessage: error.message };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <div role="alert">There was an error: <pre style={{whiteSpace: 'normal'}}>{this.state.errorMessage}</pre></div>;
//       // return <div role="alert">An error occurred.</div>;
//     }

//     return this.props.children; 
//   }
// }

// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [state, setState] = React.useState({status: 'idle', pokemon: null})
//   const [error, setError] = React.useState(null)

//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   React.useEffect( () =>
//     {if (pokemonName === '') {
//       return
//     } else {
//       setState({status: 'pending', pokemon: null})
//       fetchPokemon(pokemonName).then(
//         pokemonData => {setState({status: 'resolved', pokemon: pokemonData})},
//       ).catch(error => {setError(error); setState({status: 'rejected', pokemon: null})})

//     }}, [pokemonName]
//   )
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
//   // (This is to enable the loading state when switching between different pokemon.)
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => {/* update all the state here */},
//   //   )
//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />

//   // 💣 remove this
//   if (state.status === 'idle') {
//     return 'Submit a pokemon'
//   } else if (state.status === 'rejected') {
//     throw error
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />
//   } else if (state.status === 'resolved') {
//     return  <PokemonDataView pokemon={state.pokemon} />
//   }
// }

// Extra Credit 6 Solution
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>{' '}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)
  const [state, setState] = React.useState({status: pokemonName ? 'pending' : 'idle', pokemon: null})
  const [error, setError] = React.useState(null)

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  React.useEffect( () =>
    {if (pokemonName === '') {
      return
    } else {
      setState({status: 'pending', pokemon: null})
      fetchPokemon(pokemonName).then(
        pokemonData => {setState({status: 'resolved', pokemon: pokemonData})},
      ).catch(error => {setError(error); setState({status: 'rejected', pokemon: null})})

    }}, [pokemonName]
  )
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
  // (This is to enable the loading state when switching between different pokemon.)
  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => {/* update all the state here */},
  //   )
  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  // 💣 remove this
  if (state.status === 'idle') {
    return 'Submit a pokemon'
  } else if (state.status === 'rejected') {
    throw error
  } else if (state.status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  } else if (state.status === 'resolved') {
    return  <PokemonDataView pokemon={state.pokemon} />
  }
}


function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary resetKeys={[pokemonName]} FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
            setPokemonName('')
          }}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
