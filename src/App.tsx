import { ToastContainer } from 'react-toastify'
import { common } from './data/config'
import { Main } from './pages/Main'
import { Wip } from './pages/Wip'

import 'react-toastify/dist/ReactToastify.css'

const isWip = common.WIP_FLAG

function App() {
  if (isWip) {
    return <Wip />
  }

  return (
    <>
      <Main />
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
