import { useEffect, useMemo, useState } from 'react'

import './App.css'

function App() {
  const [level, setLevel] = useState(1)
  const [title, setTitle] = useState('Novice')

  useEffect(() => {
    if (level >= 15 && level < 30) {
      setTitle('1차전직')
    } else if (level >= 30) {
      setTitle('2차전직')
    }
  }, [level])

  const levelUp_1 = () => {
    const plusLevel = level + 1
    setLevel(plusLevel)
  }

  const levelUp_2 = () => {
    setLevel((prev) => prev + 1)
  }

  return (
    <>
      <div style={{ marginBottom: 10 }}>{level}</div>
      <div style={{ marginBottom: 10 }}>{title}</div>
      <button onClick={levelUp_2}>레벨업</button>
    </>
  )
}

export default App
