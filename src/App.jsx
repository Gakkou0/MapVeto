import { useState } from 'react'
import MapSelector from './components/MapSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MapSelector/>
    </>
  )
}

export default App
