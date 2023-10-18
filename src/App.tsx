import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

function App() {
  const isWip = import.meta.env.VITE_WIP_FLAG === 'true'

  console.log(isWip)
  console.log(isWip)
  if (isWip) {
    return <Wip />
  }

  return <Main />
}

export default App
