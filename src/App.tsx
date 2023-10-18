import './App.css'
import { common } from './data/config'
import { Wip } from './pages/Wip'

function App() {

  if (common.wip) {
    return <Wip />
  }

  return (
    <>
      New Site for Florent PELLEGRIN
    </>
  )
}

export default App
