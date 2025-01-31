import { memo, useMemo, useState } from 'react'

import './App.css'

const Validation = memo(({ valid }) => {
  console.log('- rerendered : Validation')
  return <div>{valid ? <p>성년입니다</p> : <p style={{ color: 'red' }}>미성년입니다</p>}</div>
})

const Button = memo(({ onClick }) => {
  console.log('- rerendered : Button')
  return <button onClick={onClick}>증가</button>
})

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
      <Validation valid={valid}></Validation>
      <Button onClick={() => setAge(age + 1)}>증가</Button>
    </>
  )
}

export default App
