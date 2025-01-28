import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [age, setAge] = useState(0)

  const valid = useMemo(() => {
    console.log('calculated')
    return age >= 19 ? true : false
  }, [age >= 19])
  return (
    <div>
      <p>{age}</p>
      <div>{valid ? <p>Adult</p> : <p>Underage</p>}</div>
      <button onClick={() => setAge(age + 1)}>증가</button>
    </div>
  )
}
export default App
