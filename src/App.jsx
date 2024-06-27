import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
