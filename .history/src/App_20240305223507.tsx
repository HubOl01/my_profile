import './App.css'
import Common from './components/center/Common'
import Footer from './components/Footer'
import Header from './components/Header'
import LeftBar from './components/left/LeftBar'


function App() {

  return (
    <div className="App">
      <Header />
      <LeftBar />
      <Common />
      <Footer />
    </div>
  )
}

export default App