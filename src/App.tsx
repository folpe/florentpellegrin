import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

function App() {
  const wipFlag = import.meta.env.VITE_WIP_FLAG
  const isWip = wipFlag.toLowerCase() === 'true'
  console.log(isWip)
  if (isWip) {
    return <Wip />
  }

  return <Main />
}

export default App
