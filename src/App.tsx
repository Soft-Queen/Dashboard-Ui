
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Users from './components/dashboard/users'
import NotFound from './components/reusables/notfound'

function App() {


  return (
    <>
     <div>
      

   
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

export default App
