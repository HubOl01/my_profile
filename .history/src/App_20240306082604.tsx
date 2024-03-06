import { Grid } from '@mui/material'
import './App.css'
import Common from './components/center/Common'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LeftBar from './components/left/LeftBar'


function App() {

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={ >
          <LeftBar />
        </Grid>
        <Grid item xs={10}>
          <Common />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default App
