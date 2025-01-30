import { useRef, useState } from 'react'

import './App.css'

function App() {
  const sources = [
    'https://vjs.zencdn.net/v/oceans.mp4',
    'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.mp4',
  ]
  const colorRef = useRef(null)
  const videoRef = useRef(null)
  console.log('- rerendered')

  const handleClick = () => {
    if (colorRef.current.style.color === 'red') {
      colorRef.current.style.color = 'black'
    } else {
      colorRef.current.style.color = 'red'
    }
  }

  return (
    <>
      <div>
        <div ref={colorRef}>apple</div>
        <button onClick={handleClick}>변경</button>
      </div>
      <div>
        <video ref={videoRef} autoPlay controls width={500} muted />
      </div>
      <button
        onClick={() => {
          videoRef.current.src = sources[0]
        }}
      >
        전환 1
      </button>
      <button
        onClick={() => {
          videoRef.current.src = sources[1]
        }}
      >
        전환 2
      </button>
    </>
  )
}

export default App
