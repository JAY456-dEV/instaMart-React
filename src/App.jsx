import { Outlet } from 'react-router-dom'
import Header from '../components/HomePage/header'
import './App.css'
import { ContextFunction } from '../context/context'

function App() {

  return (
    <ContextFunction>
      <Header />
      <Outlet />
    </ContextFunction>
  )
}

export default App
