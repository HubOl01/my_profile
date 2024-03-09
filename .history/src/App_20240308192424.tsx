import { Grid } from '@mui/material'
import './App.css'
import Common from './components/center/Common'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LeftBar from './components/left/LeftBar'
import {  } from "s";

function App() {

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid className="profile" item xs={4}>
          <LeftBar />
        </Grid>
        <Grid item xs>
          <Common />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default App
