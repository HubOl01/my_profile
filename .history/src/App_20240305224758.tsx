import { Grid } from '@mui/material'
import './App.css'
import Common from './components/center/Common'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LeftBar from './components/left/LeftBar'


function App() {

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
      <LeftBar />
          
        </Grid>
        <Grid item xs={4}>
      <Common />
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default App
