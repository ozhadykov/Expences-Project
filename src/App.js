import { useState } from 'react'
import Costs from './components/Costs'
import NewCost from './components/NewCost/NewCost'

function App() {
  const [costs, setCosts] = useState([])

  const inputCostsHandler = (object) => {
    const costObject = {
      ...object,
      id: Math.random().toString(),
    }
    setCosts((prevCosts) => {
      return [...prevCosts, costObject]
    })
  }

  return (
    <div className="App">
      <NewCost setCosts={inputCostsHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
