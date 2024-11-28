import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  )
}

export default App
