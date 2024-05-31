import { useState } from 'react'
import Box from './Components/Box'

function App() {
  const [val, setVal] = useState<string>("");

  return (
    <>
      <Box label='Search' value={val} setter={setVal}/>
    </>
  )
}

export default App
