import { useState } from 'react'

import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <div className='flex justify-center w-full h-full'>
     <BrowserRouter>
      <AppRoutes/>
     </BrowserRouter>
     <ToastContainer/>  
    </div>
    </div>
  )
}

export default App
