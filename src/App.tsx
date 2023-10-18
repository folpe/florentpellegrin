import './App.css'
import { common } from './data/config'
import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

function App() {

  if (common.wip) {
    return <Wip />
  }

  return (
    <Main>
      New Site for Florent PELLEGRIN the best
    </Main>
  )
}

export default App
