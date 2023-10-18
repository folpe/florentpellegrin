import { common } from './data/config'
import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

function App() {
  if (common.wip) {
    return <Wip />
  }

  return <Main />
}

export default App
