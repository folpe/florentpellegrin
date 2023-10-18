import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

const isWip = import.meta.env.VITE_WIP_FLAG === 'true'

console.log(isWip)
console.log('env : ', import.meta.env)
console.log('env 2 : ', process.env)
function App() {
  if (isWip) {
    return <Wip />
  }

  return <Main />
}

export default App
