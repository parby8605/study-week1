import { memo, useState } from 'react'

import './App.css'

// eslint-disable-next-line react/display-name
const Child1Component = memo(({ state }) => {
  console.log(' - rerendered Child1')
  return <div>{state}</div>
})
// eslint-disable-next-line react/display-name
const Child2Component = memo(({ state }) => {
  console.log(' - rerendered Child2')
  return <div>{state}</div>
})
// eslint-disable-next-line react/display-name
const Child3Component = memo(({ state }) => {
  console.log(' - rerendered Child3')
  return <div>{state}</div>
})

function App() {
  const [state1, setState1] = useState('')
  const [state2, setState2] = useState('')
  const [state3, setState3] = useState('')

  return (
    <>
      <Child1Component state={state1} />
      <Child2Component state={state2} />
      <Child3Component state={state3} />
      <input value={state1} onChange={(e) => setState1(e.target.value)} />
      <input value={state2} onChange={(e) => setState2(e.target.value)} />
      <input value={state3} onChange={(e) => setState3(e.target.value)} />
    </>
  )
}

export default App
