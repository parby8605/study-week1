import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [age, setAge] = useState(0)

  const validate = () => {
    console.log('calculated')
    return age >= 19 ? true : false
  }
  const valid = useMemo(() => validate(), [age >= 19])

  return (
    <>
      <p>{age}</p>
      <div>{valid ? <p>성년입니다</p> : <p style={{ color: 'red' }}>미성년입니다</p>}</div>
      <button onClick={() => setAge(age + 1)}>증가</button>
    </>
  )
}

export default App
