import Layout from './components/Layout'
import Home from './pages/Home'
import Info from './pages/Info'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=':slug' element={<Info/>} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
