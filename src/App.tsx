import './App.css'
import { wip } from './data/config'
import { Wip } from './pages/Wip'

function App() {

  if (wip) {
    return <Wip />
  }

  return (
    <>
      New Site for Florent PELLEGRIN
    </>
  )
}

export default App
