import { useReducer, useState } from 'react'

import './App.css'

function App() {
  const initialState = 0

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.scale
      case 'DECREMENT':
        return state - action.scale
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT', scale: 10 })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', scale: 10 })}>감소</button>
    </>
  )
}

export default App
