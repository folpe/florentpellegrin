import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

const isWip = import.meta.env.VITE_WIP_FLAG === 'true'

console.log(isWip)
console.log('env : ', import.meta.env)
function App() {
  if (isWip) {
    return <Wip />
  }

  return <Main />
}

export default App
