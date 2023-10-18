import { common } from './data/config'
import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

const isWip = common.WIP_FLAG

function App() {
  if (isWip) {
    return <Wip />
  }

  return <Main />
}

export default App
